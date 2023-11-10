
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
- [ ] Deploy to Dev
- [ ] Deploy to prod
- [ ] Add Review bot