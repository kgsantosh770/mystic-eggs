import 'dotenv/config'
import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

function getEnvVar(v: string): string {
  const ret = process.env[v];
  if (ret === undefined) {
      throw new Error("process.env." + v + " is undefined!");
  }
  return ret;
}

const config: HardhatUserConfig = {
  solidity: "0.8.17",
  networks:{
    goerli: {
      url: getEnvVar('QUICKNODE_API_KEY_URL'),
      accounts: [getEnvVar('GOERLI_PRIVATE_KEY')],
    }
  }
};

export default config;
