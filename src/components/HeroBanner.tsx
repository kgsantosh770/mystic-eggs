import BannerBackground from "../assets/images/banner.gif";

interface Props {
    title: string,
    subtitle?: string,
    description?: string,
    sideHeading?: string,
}

export default function HeroBanner(props: Props) {
  return (
    <div className="relative overflow-hidden h-72 rounded-xl mb-14">
        <img className="w-full h-full" src={BannerBackground} alt="banner" />
        <div className="absolute h-full w-full top-0 bg-gradient-to-b from-transparent to-slate-800"></div>
        <div className="absolute bottom-0 px-4 py-6">
            <p className="text-white text-2xl font-base-bold">{props.title}</p>
            {props.subtitle && <p className="text-white text-sm font-base-bold">{props.subtitle}</p>}
            {props.description && <p className="text-white text-sm font-base-bold mt-4">{props.description}</p>}
        </div>
        {props.sideHeading && 
          <div className="absolute bottom-0 right-0 px-4 py-6">
            <p className="text-white text-sm font-base-bold">{props.sideHeading}</p>
          </div>
        }
    </div>
  )
}
