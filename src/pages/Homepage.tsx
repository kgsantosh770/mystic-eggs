import CardGroup from "../components/CardGroup";
import HeroBanner from "../components/HeroBanner";
import { NFT_DATA } from "../constants/Constant.ts";

export default function Homepage() {
  return (
    <>
      <HeroBanner
        title="Valorant - Astra the queen"
        subtitle="EkjasdlkjfEkjasdlkjfEkjasdlkjfEkjasdlkjfEkjasdlkjfEkjasdlkjfEkjasdlkjfEkjasdlkjf"
        description=" Auction ends tonight"
        sideHeading="Current price: 45 ETH"
      />
      <CardGroup heading='Trending' cardsData={NFT_DATA} />
    </>
  )
}
