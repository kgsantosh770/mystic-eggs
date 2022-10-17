import { NavLink } from 'react-router-dom';
import { PRODUCT_NAME } from "../constants/Constant.ts";

import Logo from "../assets/images/logo.png";
import HomeIcon from "../assets/images/icons/home.svg";
import ExploreIcon from "../assets/images/icons/explore.svg";
import CartIcon from "../assets/images/icons/cart.svg";
import TrendingIcon from "../assets/images/icons/trending.svg";
import WalletIcon from "../assets/images/icons/wallet.svg";
import SettingsIcon from "../assets/images/icons/settings.svg";

export default function Sidebar() {
    return (
        <nav className="fixed top-0 h-full w-16 flex flex-col place-self-center">
            <button className="mx-auto mt-7 mb-12">
                <img className="logo" src={Logo} alt={PRODUCT_NAME} title={PRODUCT_NAME} />
            </button>
            <div className="nav-links flex flex-col h-full">
                <NavLink end to={'/'}><img src={HomeIcon} alt="home" title="Home" /></NavLink>
                <NavLink to={'/explore'}><img src={ExploreIcon} alt="explore" title="Explore" /></NavLink>
                <NavLink to={'/cart'}><img src={CartIcon} alt="cart" title="Cart" /></NavLink>
                <NavLink to={'/trending'}><img src={TrendingIcon} alt="trending" title="Trending" /></NavLink>
                <NavLink to={'/wallet'}><img src={WalletIcon} alt="wallet" title="Wallet" /></NavLink>
                <NavLink className="mt-auto" to={'/settings'}><img src={SettingsIcon} alt="settings" title="Settings" /></NavLink>
            </div>
        </nav>
    )
}
