### Guide for Macos

## Install
https://www.cloudquery.io/docs/quickstart/macOS

## Create env
export CROWD_SOURCE_PG_CONNECTION_STRING="postgresql://crowd:secret@localhost:5000/crowd?sslmode=disable"

export LOCAL_DESTINATION_PG_CONNECTION_STRING="postgresql://crowd:secret@localhost:5001/crowd?sslmode=disable"

## Run sync for few minutes 
```
gtimeout 10m cloudquery sync sync-tool/sync-members.yml
gtimeout 10m cloudquery sync sync-tool/sync-general.yml
gtimeout 10m cloudquery sync sync-tool/sync-activities.yml
```


