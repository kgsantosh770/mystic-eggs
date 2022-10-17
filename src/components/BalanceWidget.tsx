import { WALLET } from "../constants/Constant.ts"
import EtherIcon from "../assets/images/icons/ether.svg";
import Button from "./Button";
import Widget from "./Widget";

export default function BalanceWidget() {
  return (
    <Widget>
      <p className="font-base-semibold text-md mb-4 gray-text">Your Balance</p>
      <p className="balance text-3xl font-base-bold mb-4">
        {WALLET.walletBalance}
        <span className="ml-3 text-lg">
          {WALLET.currencyType}
        </span>
      </p>
      <p className="text-sm dark-gray-text mb-4">
        Last transaction
        <img className="mx-2 mb-1.5 w-[22px] h-[22px] inline" src={EtherIcon} alt="cryto currency"/>
        {WALLET.lastTransaction} {WALLET.currencyType}
      </p>
      <Button onClick={()=>{}} className="block mx-auto">Add ETH to wallet</Button>
    </Widget>
  )
}
