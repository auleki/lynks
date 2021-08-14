import { LynkCardS } from "./StyledComponents"
import { icons } from "../utils/constants"

export interface ILynkProps {
  id: number
  siteName: string
  category: string
  description: string
  siteLink: string
}

function LynkCard(props: { lynk: ILynkProps }) {
  return (
    <LynkCardS>
      <section className="card__title">
        <h2 className="name">{props.lynk.siteName}</h2>
        <span className="category">{props.lynk.category}</span>
      </section>
      <p className="description">
        {props.lynk.description}
      </p>
      <section className="options">
        <a
          href={props.lynk.siteLink}
          className="link"
          target="_blank"
          rel="noopener noreferrer">
          <span className="text">Visit Site</span>
          <span className="icon">{icons.link}</span>
        </a>
        <span className="save">
          {icons.save}
        </span>
      </section>
    </LynkCardS>
  )
}

export default LynkCard
