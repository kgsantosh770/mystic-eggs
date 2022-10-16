import Searchbar from './Searchbar';

import SettingsIcon from "../assets/images/icons/settings.svg";
import NotificaionBellIcon from "../assets/images/icons/notification-bell.svg";
import { useState } from 'react';

export default function Header() {
    const [notify, setNotify] = useState(false);
    
    return (
        <header className='flex flex-row items-center justify-between mb-10'>
            <Searchbar placeholder="Search NFT's here" />
            <ul className="right-section flex flex-row">
                <li>
                    <button>
                        <img src={SettingsIcon} alt="settings" title="Settings" />
                    </button>
                </li>
                <li>
                    <button className='relative'>
                        <img src={NotificaionBellIcon} alt="notifications" title="Notifications" />
                        {notify && <div className="notification-dot w-2 h-2 rounded-full absolute top-0 right-0.5"></div>}
                    </button>
                </li>
                <li className='flex flex-row place-self-center'>
                    <img className="profile-img rounded-full" src="/anime2.jpg" alt="profile-img" title="Profile Image" />
                </li>
            </ul>
        </header>
    )
}
