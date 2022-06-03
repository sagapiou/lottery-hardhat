Lottery contract that uses chainlink for 2 purposes. Purpose one is to receive a random number. Purpose 2 is for using chainlink keepers as a trigger for triggering a function in the contract to run. Hardhat-deploy has been used for deployments. Tests for both the localhost and rinkeby testnet!
```
1. https://vrf.chain.link/ Get Subscription ID for chainlink VRF and fund it with some link
2. Deploy our contract using above subscription ID
3. Register the contract with Chainlink VRF and using the above subscription ID (ADD CONSUMER using the lottery contract address)
4. Register the contract to chainlink keepers (https://keepers.chain.link/  register new upkeep)
5. Run the staging test!
```