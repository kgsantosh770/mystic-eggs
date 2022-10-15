interface Props {
    heading: string,
    children: React.ReactNode,
    horizontalScrolling?: boolean,
}

export default function Banner(props: Props) {
    return (
        <div className="banner">
            <h1 className="mb-9 text-3xl">{props.heading}</h1>
            <div className={
                props.horizontalScrolling ?
                    "flex flex-row gap-3 overflow-x-auto snap-mandatory snap-x no-scrollbar" :
                    "grid gap-5 grid-cols-3 grid-flow-row auto-rows-fr xl:grid-cols-4 2xl:grid-cols-5"
            }
            >
                {props.children}
            </div>
        </div>
    )
}

Banner.defaultProps = {
    horizontalScrolling: true,
}