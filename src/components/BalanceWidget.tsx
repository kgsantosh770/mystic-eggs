import EtherIcon from "../assets/images/icons/ether.svg";
import Button from "./Button";
import Widget from "./Widget";
import LoadingIcon from '../assets/images/loading.svg';
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { connectWallet } from "../features/wallet/WalletSlice";

export default function BalanceWidget() {

  const wallet = useAppSelector((state) => state.wallet);
  const dispatch = useAppDispatch();

  function handleClick() {
    if(!wallet.loading)
      dispatch(connectWallet());
  }


  return (
    <Widget>
      <p className="font-base-semibold text-md mb-4 gray-text">Your Balance</p>
      <p className="balance text-3xl font-base-bold mb-4">
        {wallet.walletAddress ? 455.30 : 0}
        <span className="ml-3 text-lg">
          ETH
        </span>
      </p>
      <p className="text-sm dark-gray-text mb-8">
        Last transaction
        <img className="mx-2 mb-1.5 w-[22px] h-[22px] inline" src={EtherIcon} alt="cryto currency" />
        {wallet.walletAddress ? 34.67 : 'Not found'} ETH
      </p>
      <Button onClick={handleClick} className="block mx-auto min-w-[130px]">
        {wallet.loading === true ?
          <img className='w-[22px] aspect-square mx-auto' src={LoadingIcon} alt="loading" /> :
          wallet.walletAddress !== undefined ?
            'Add ETH to wallet' :
            'Connect wallet'
        }
      </Button>
    </Widget>
  )
}
