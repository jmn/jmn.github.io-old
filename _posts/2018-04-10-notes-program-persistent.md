---
title: "Haskell Persistent note recording program"
layout: "post"
tags: "haskell"
---
Here's a version of [the previous notes program](https://www.jmnorlund.net/log/2018/03/notes-program-in-haskell) that uses Persistent. 
<!--more-->
The imports are: 
- text
- cmdargs
- friendly-time
- time
- persistent
- persistent-sqlite
- persistent-template
- transformers

```haskell 

{-# LANGUAGE DeriveDataTypeable #-}
{-# LANGUAGE EmptyDataDecls #-}
{-# LANGUAGE FlexibleContexts #-}
{-# LANGUAGE GADTs #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
{-# LANGUAGE MultiParamTypeClasses #-}
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE QuasiQuotes #-}
{-# LANGUAGE TemplateHaskell #-}
{-# LANGUAGE TypeFamilies #-}

module Main where

import System.Console.CmdArgs
import Control.Monad (when, void)
import Database.Persist
import Database.Persist.TH
import Database.Persist.Sqlite
import Control.Monad.IO.Class (liftIO)
import Control.Monad.Trans.Reader
import Data.Time
import Data.List (intercalate)
import Data.Time.Format.Human

share
    [mkPersist sqlSettings, mkMigrate "migrateAll"]
    [persistLowerCase|
Note
    message String
    tags String Maybe
    createdAt UTCTime default=CURRENT_TIME
    deriving Show
|]

data Options = Options
    { inputMode :: Bool
    , message :: String
    , delete :: Integer
    , humanTime :: Bool
    , tags :: Maybe String
    , update :: Integer
    , showTag :: Maybe String
    } deriving (Data, Typeable)

options :: Options
options =
    Options
    { inputMode = False &= typ "Input mode" &= help "Toggle input mode"
    , message = def &= typ "message" &= opt ("" :: String) &= args
    , Main.delete = def &= typ "[number]" &= help "Delete a note."
    , humanTime =
        False &= typ "Relative time" &= help "Show time relative to now in human readable format."
    , tags = def &= typ "tags" &= help "Tag a note."
    , Main.update = def &= typ "[number]" &= help "Modify a note."
    , showTag = def &= typ "TAG" &= help "Show entries with given tag."
    } &=
    summary "n notes" &=
    program "n"

showNote :: Bool -> Entity Note -> IO ()
showNote humanizeTime note = do
    let n = entityVal note
    let t' = noteCreatedAt n
    let key = show $ fromSqlKey $ entityKey note
    time <-
        if humanizeTime
            then humanReadableTime t'
            else return $ show t'
    t <-
        case noteTags n of
            Nothing -> return ""
            Just xs -> return $ "#" ++ xs
    let o = intercalate " | " [key, time, show (noteMessage n), t]
    print o


asSqlBackendReader :: ReaderT SqlBackend m a -> ReaderT SqlBackend m a
asSqlBackendReader = id

main :: IO ()
main =
    runSqlite "testn.db" $
    asSqlBackendReader $
    do opts <- liftIO $ cmdArgs options
       runMigration migrateAll
       time <- liftIO getCurrentTime
       when (message opts /= "") $ void $ insert $ Note (message opts) (tags opts) time
       when
           (inputMode opts)
           (do content <- liftIO getContents
               void $ insert $ Note content (tags opts) time
               return ())
       when
           (Main.delete opts /= 0)
           (do let key = toSqlKey $ fromIntegral (Main.delete opts) :: Key Note
               Database.Persist.Sqlite.delete key)
       notes <-
           case showTag opts of
               Nothing -> selectList [] [Asc NoteCreatedAt]
               Just x -> selectList [NoteTags ==. Just x] [Asc NoteCreatedAt]
       if humanTime opts
           then liftIO $ mapM_ (showNote True) notes
           else liftIO $ mapM_ (showNote False) notes

```
