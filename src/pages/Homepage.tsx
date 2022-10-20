import CardGroup from "../components/CardGroup";
import Header from "../components/Header";
import HeroBanner from "../components/HeroBanner";
import Insightsbar from "../components/Insightsbar";
import { NFT_DATA } from "../constants/Constant";

export default function Homepage() {
  return (
    <div className="flex flex-row">
      <div className="lg:w-2/3 ml-16 py-6 px-10 lg:pl-14 lg:pr-4">
        <Header></Header>
        <HeroBanner
          title="Valorant - Astra the queen"
          subtitle="EkjasdlkjfEkjasdlkjfEkjasdlkjfEkjasdlkjfEkjasdlkjfEkjasdlkjfEkjasdlkjfEkjasdlkjf"
          description=" Auction ends tonight"
          sideHeading="Current price: 45 ETH"
        />
        <CardGroup heading='All NFTs' cardsData={NFT_DATA} />
      </div>
      <div className='w-1/3 pl-3'>
        <Insightsbar />
      </div>
    </div>
  )
}
