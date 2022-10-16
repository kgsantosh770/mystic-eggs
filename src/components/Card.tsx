export interface NFT {
  id: number,
  owner: string,
  imageSrc: string,
  price: number,
  currency: string,
}

interface Props {
  nft: NFT,
}

export default function Card({ nft }: Props) {
  return (
    <a href="#" className="card group relative snap-center">
      <div className="img-wrapper relative min-h-80 aspect-square overflow-hidden rounded-md lg:aspect-none lg:h-full">
        <img
          src={nft.imageSrc}
          alt="nft"
          className="nft-img h-full w-full object-cover object-center lg:h-full lg:w-full"
        />
        <div className="absolute h-full w-full top-0 bg-gradient-to-b from-transparent via-transparent to-slate-800"></div>
      </div>
      <div className="nft-details absolute w-full px-5 pb-3 bottom-0 mt-4">
        <p className="mb-1">{nft.owner}</p>
        <p>Price: {nft.price} {nft.currency}</p>
      </div>
    </a>
  )
}
