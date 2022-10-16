import Card, { NFT } from './Card';

interface Props {
    heading?: string,
    horizontalScrolling?: boolean,
    cardsData: NFT[]
}

export default function CardGroup(props: Props) {
    const cards = props.cardsData.map((card) => <Card key={card.id} nft={card}></Card>)
    return (
        <div className="card-group">
            {props.heading && <h1 className="mb-9 text-3xl">{props.heading}</h1>}
            <div className={
                props.horizontalScrolling ?
                    "flex flex-row gap-3 overflow-x-auto snap-mandatory snap-x no-scrollbar" :
                    "grid gap-5 grid-cols-3 grid-flow-row auto-rows-fr xl:grid-cols-4 2xl:grid-cols-5"
            }
            >
                {cards}
            </div>
        </div>
    )
}

CardGroup.defaultProps = {
    horizontalScrolling: true,
}