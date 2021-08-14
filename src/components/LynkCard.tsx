import { LynkCardS } from "./StyledComponents"
import { icons } from "../utils/constants"

function LynkCard() {
  return (
    <LynkCardS>
      {/* category info  */}
      {/* <span className="option__icon">
        {icons.options}
      </span> */}
      <section className="card__title">
        <h2 className="name">Punch Newspaper</h2>
        <span className="category">SPORTS</span>
      </section>
      <p className="description">
        This is an online version of the Nigerian Punch Newspaper.
        They have great information about things going on within
        the country and outside of it.
      </p>
      <section className="options">
        <a
          href="https://punchng.com"
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
