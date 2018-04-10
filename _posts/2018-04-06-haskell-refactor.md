---
title: Improving basic haskell programs
tags: haskell
---
Using the symbols `>>=` (bind) `<$>`(fmap) and `<*>` we can improve our Haskell programs.
<!--more-->
For example:


```haskell
extractDomain :: Text -> Text
extractDomain url =
    case parseURI (unpack url) of
        Nothing -> ""
        Just uri ->
            case uriAuthority uri of
                Nothing -> ""
                Just auth -> pack $ uriRegName auth

```

```haskell
extractDomainB :: Text -> Text
extractDomainB url = fromMaybe "" $ parseURI (unpack url)
                     >>= uriAuthority
                     >>= pure . pack . uriRegName

```

```haskell 

-- | Retrieve the members of a set
sout :: Connection -> ByteString -> IO [ByteString] -- (Either Reply [ByteString])
sout conn k = do
  members <-
    liftIO $
    runRedis conn $ do
      res <- (smembers k)
      mem <-
        case res of
          Left _ -> return [] -- Hmm
          Right m -> return m
      return mem
  return members
```

```haskell
-- | Retrieve the members of a set
sout :: Connection -> ByteString -> IO [ByteString]
sout conn k = 
    runRedis conn $ either (return []) id <$> smembers k
```
