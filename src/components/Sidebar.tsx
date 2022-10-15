import { useState } from "react"

import Logo from "../assets/images/logo.png";
import HomeIcon from "../assets/images/icons/home.svg";
import CollectionsIcon from "../assets/images/icons/collections.svg";
import ProfileIcon from "../assets/images/icons/profile.svg";
import BagIcon from "../assets/images/icons/bag.svg";

export default function Sidebar() {
    const [isExpanded, setIsExpanded] = useState(false)
    return (
        <nav className="fixed top-0 px-1 h-full">
            <img className="logo mt-6 mb-12 rounded-full mx-auto" src={Logo} alt="Logo" />
            <ul>
                <li>
                    <button><img src={CollectionsIcon} alt="collections" title="Collections"/> 
                    {isExpanded && <div>Collections</div>}</button>
                </li>
            </ul>
            <ul>
                <li>
                    <button><img src={ProfileIcon} alt="profile" title="Profile"/> 
                    {isExpanded && <div>Profile</div>}</button>
                </li>
                <li>
                    <button><img src={BagIcon} alt="my-nfts" title="My Nfts"/> 
                    {isExpanded && <div>My NFT's</div>}</button>
                </li>
            </ul>
        </nav>
    )
}
