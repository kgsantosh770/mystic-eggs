import Button from './Button';
import Searchbar from './Searchbar';

export default function Header() {
    return (
        <header className='flex flex-row items-center mb-14'>
            <Searchbar placeholder="Search NFT's here" />
        </header>
    )
}
