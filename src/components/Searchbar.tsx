import SearchIcon from "../assets/images/icons/search.svg";

interface Props {
    placeholder: string,
}

export default function Searchbar(props: Props) {
    return (
        <div className={`relative w-80 max-w-screen-lg flex items-center`}>
            <img
                className="w-[22px] h-[22px] absolute left-[20px]"
                src={SearchIcon}
                alt="search"
            />
            <input
                className='searchbar rounded-md focus:outline-none w-full py-[10px] pl-[50px] pr-[20px]'
                type="search"
                placeholder={props.placeholder} />
        </div>
    )
}