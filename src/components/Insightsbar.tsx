import BalanceWidget from "./BalanceWidget";
import PlusIcon from "../assets/images/icons/plus.svg";
import SettingsIcon from "../assets/images/icons/three-dots.svg";

export default function Insightsbar() {
    return (
        <div className="insights-bar px-8 py-7 h-full">
            <div className="topbar flex flex-row justify-end mb-8">
                <button className="add-widget w-[35px] h-[35px] mr-3 rounded-full flex items-center justify-center">
                    <img className="w-[20px] h-[20px]" src={PlusIcon} alt="add-widget" />
                </button>
                <span className="settings">
                    <img className="w-[35px] h-[35px]" src={SettingsIcon} alt="settings" />
                </span>
            </div>
            <BalanceWidget />
        </div>
    )
}
