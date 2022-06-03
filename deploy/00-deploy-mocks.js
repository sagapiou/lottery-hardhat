const { developmentChains } = require("../helper-hardhat-config")

// below 2 variables are created based on what the VRFCoordinatorV2Mock needs in its constructor
// the price of 0.25 link used as a base fee was found on the chainlink site as that used for rinkeby
const BASE_FEE = "250000000000000000" // 0.25 is this the premium in LINK?
const GAS_PRICE_LINK = 1e9 // link per gas, is this the gas lane? // 0.000000001 LINK per gas

module.exports = async ({ getNamedAccounts, deployments }) => {
    const { deploy, log } = deployments
    const { deployer } = await getNamedAccounts()
    const chainId = network.config.chainId
    const args = [BASE_FEE, GAS_PRICE_LINK]

    if (developmentChains.includes(network.name)) {
        log("Local Network Detected! Deploying mocks")
        await deploy("VRFCoordinatorV2Mock", {
            from: deployer,
            log: true,
            args: args,
        })
        log("Mocks deployed")
        log("-----------------------------------------------")
    }
}

module.exports.tags = ["all", "mocks"]
