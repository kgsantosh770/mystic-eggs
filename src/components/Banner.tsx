interface Props {
    heading: string,
    children: React.ReactNode,
}

export default function Banner(props: Props) {
    return (
        <div className="banner">
            <h1 className="mb-3">{props.heading}</h1>
            {props.children}
        </div>
    )
}
