---
layout: post
title: "Testing Github pages"
description: ""
category: meta 
tags: [meta, jekyll]
excerpt: "An introduction."
---

```haskell
{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE DeriveDataTypeable #-}

module Main where

import Lib
import System.Environment (getArgs)
import Database.SQLite.Simple
import System.Console.CmdArgs
import Data.List hiding (delete)
import Data.Time.Format.Human
import Data.Time
import Data.Time.Format
import Control.Monad (when)

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
    , delete = def &= typ "[number]" &= help "Delete a note."
    , humanTime =
        False &= typ "Relative time" &= help "Show time relative to now in human readable format."
    , tags = def &= typ "tags" &= help "Tag a note."
    , update = def &= typ "[number]" &= help "Modify a note."
    , showTag = def &= typ "TAG" &= help "Show entries with given tag."
    } &=
    summary "n notes" &=
    program "n"

data TestField = TestField
    { id_ :: Int
    , time :: String
    , note :: String
    , tags' :: Maybe String
    } deriving (Show)

instance FromRow TestField where
    fromRow = TestField <$> field <*> field <*> field <*> field

instance ToRow TestField where
    toRow (TestField id_ date_added str str') = toRow (id_, date_added, str, str')

dbPut :: Connection -> String -> Maybe String -> IO ()
dbPut conn val mTags =
    case mTags of
        Nothing ->
            execute
                conn
                "INSERT INTO test (date_added, str) \
        \VALUES (datetime('now'), ?)"
                (Only (val :: String))
        tags ->
            execute
                conn
                "INSERT INTO test (date_added, str, tags) \
        \VALUES (datetime('now'), ?, ?)"
                (val :: String, tags)

deleteRecord :: Connection -> Integer -> IO ()
deleteRecord conn x = execute conn "DELETE FROM test WHERE ID = (?)" (Only x)

showNote :: Bool -> TestField -> IO ()
showNote humanizeTime x = do
    time' <- if humanizeTime then
        do let t = parseTimeOrError False defaultTimeLocale "%F %T" (time x) :: UTCTime
           humanReadableTime t
    else
           return (time x)
    t <-
        case tags' x of
            Nothing -> return ""
            Just xs -> return $ "#" ++ xs

    let msg = note x ++ " " ++ t
    let o = intercalate " | " [show (id_ x), time', msg]
    print o

createTable conn =
    execute_
        conn
        "CREATE TABLE IF NOT EXISTS \
        \test (id INTEGER PRIMARY KEY, \
        \date_added DATETIME DEFAULT CURRENT_TIMESTAMP, \
        \str TEXT, \
        \tags TEXT)"

main :: IO ()
main = do
    opts <- cmdArgs options
    conn <- open "test.db"
    createTable conn
    when (delete opts /= 0) (deleteRecord conn (delete opts))
    when (message opts /= "") (dbPut conn (message opts) (tags opts))
    when
        (inputMode opts)
        (do content <- getContents
            dbPut conn content (tags opts))
    r <-
        case showTag opts of
            Nothing -> query_ conn "SELECT * from test" :: IO [TestField]
            Just x -> query conn "SELECT * from test WHERE tags LIKE ?" (Only x) :: IO [TestField]
    if humanTime opts
        then mapM_ (showNote True) r
        else mapM_ (showNote False) r
    close conn

```
