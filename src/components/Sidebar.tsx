import { useState } from "react"
import { PRODUCT_NAME } from "../constants/Constant.ts";

import Logo from "../assets/images/logo.png";
import HomeIcon from "../assets/images/icons/home.svg";
import ExploreIcon from "../assets/images/icons/explore.svg";
import CartIcon from "../assets/images/icons/cart.svg";
import TrendingIcon from "../assets/images/icons/trending.svg";
import WalletIcon from "../assets/images/icons/wallet.svg";

export default function Sidebar() {
    const [isExpanded, setIsExpanded] = useState(false)
    return (
        <nav className="fixed top-0 h-full w-14 flex flex-col place-self-center">
            <button className="mx-auto my-7">
                <img className="logo" src={Logo} alt={PRODUCT_NAME} title={PRODUCT_NAME} />
            </button>
            <ul>
                <li>
                    <button><img src={HomeIcon} alt="home" title="Home" /></button>
                </li>
                <li>
                    <button><img src={ExploreIcon} alt="explore" title="Explore" /></button>
                </li>
                <li>
                    <button><img src={CartIcon} alt="cart" title="Cart" /></button>
                </li>
                <li>
                    <button><img src={TrendingIcon} alt="trending" title="Trending" /></button>
                </li>
                <li>
                    <button><img src={WalletIcon} alt="wallet" title="Wallet" /></button>
                </li>
            </ul>
        </nav>
    )
}
