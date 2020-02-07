## Steps
    1. deploy
        ```
        npx oz create
        Nothing to compile, all contracts are up to date.
        ? Pick a contract to instantiate Counter
        ? Pick a network rinkeby
        ✓ Contract Counter deployed
        All contracts have been deployed
        ? Call a function to initialize the instance after creating it? Yes
        ? Select which function * initialize()
        ✓ Setting everything up to create contract instances
        ✓ Instance created at 0xe77899Bd49d2be3dB19084b4E9bC731E6485f45C
        0xe77899Bd49d2be3dB19084b4E9bC731E6485f45C
        ```
    
    2. use [online gsn-tool](https://gsn.openzeppelin.com/relays) funded contract

    3. ```cd client && npm start``` to lauch app to test