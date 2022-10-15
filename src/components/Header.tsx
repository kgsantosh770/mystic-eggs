import Button from './Button';
import Searchbar from './Searchbar';

export default function Header() {
    return (
        <header className='flex flex-row items-center mb-14'>
            <Searchbar className="mx-auto" placeholder="Search NFT's here" />
            <Button className='connect-btn' onClick={()=>{}} variant='contained'>Connect Wallet</Button>
        </header>
    )
}
