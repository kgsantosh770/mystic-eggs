import CardGroup from "../components/CardGroup";

const data = [
  {
    id: 1,
    owner: "0xkkjjsdjfsdfjsdjf",
    imageSrc: "./anime1.jpg",
    price: 8,
    currency: 'ETH',
  },
  {
    id: 2,
    owner: "0xzcxvxcvxczv",
    imageSrc: "/anime2.jpg",
    price: 71,
    currency: 'ETH',
  },
  {
    id: 3,
    owner: "0x23rdsgf45tgre",
    imageSrc: "/anime3.jpg",
    price: 80,
    currency: 'ETH',
  },
  {
    id: 4,
    owner: "0xu89oy7mgt6yu876",
    imageSrc: "/anime1.jpg",
    price: 15,
    currency: 'ETH',
  },
  {
    id: 5,
    owner: "0xzcxvxcvxczv",
    imageSrc: "/anime2.jpg",
    price: 71,
    currency: 'ETH',
  },
  {
    id: 6,
    owner: "0x23rdsgf45tgre",
    imageSrc: "/anime3.jpg",
    price: 80,
    currency: 'ETH',
  },
  {
    id: 7,
    owner: "0xu89oy7mgt6yu876",
    imageSrc: "/anime1.jpg",
    price: 15,
    currency: 'ETH',
  }
]

export default function Homepage() {
  
  return (
    <>
        <CardGroup heading='Trending' cardsData={data}/>
    </>
  )
}
