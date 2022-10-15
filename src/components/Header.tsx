import Button from './Button';

export default function Header() {
    return (
        <header>
            <h2 className='title font-bold'>Mystic Eggs</h2>
            {/* <Searchbar></Searchbar> */}
            <Button className='connect-btn' onClick={()=>{}} variant='contained' size='large'>Connect Wallet</Button>
        </header>
    )
}
