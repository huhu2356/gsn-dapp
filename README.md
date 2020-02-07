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
or use command to test:
    
    1. 
    ```
    npx oz call
    ? Pick a network rinkeby
    ? Pick an instance Counter at 0xe77899Bd49d2be3dB19084b4E9bC731E6485f45C
    ? Select which function value()
    ✓ Method 'value()' returned: 1
    1
    ```
    2.
    ```
    npx oz send-tx
    ? Pick a network rinkeby
    ? Pick an instance Counter at 0xe77899Bd49d2be3dB19084b4E9bC731E6485f45C
    ? Select which function increase()
    ✓ Transaction successful. Transaction hash: 0xeb313bf74933c7e22f7f35bee140696b188c62d8fc5480e2875eefd1899efbea
    ```
    3.
    ```
    npx oz call
    ? Pick a network rinkeby
    ? Pick an instance Counter at 0xe77899Bd49d2be3dB19084b4E9bC731E6485f45C
    ? Select which function value()
    ✓ Method 'value()' returned: 2
    2
    ```
