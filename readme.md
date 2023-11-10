
## Dependecies
- Docker
- Docker desktop

## Development

```
yarn start
```

# Open

```
http://localhost:4000/#/build?query={%22measures%22:[%22activities.count%22],%22order%22:{%22activities.count%22:%22desc%22},%22dimensions%22:[%22activities.username%22]}
```

## restart
```
yarn clean
yarn start
```

## Test
One terminal
```
yarn start
```

Another terminal
```
yarn install
yarn test
```


## Sync Data
```
```

## TODO
- [ ] Sync Data
- [x] Add more datasources
- [x] Deploy to Dev by git connection
- [x] Deploy to prod by cli
- [ ] Add Review bot
- [ ] update it as monorepo and add doc app