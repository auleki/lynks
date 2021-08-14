import { LynksContainer, PageContainer } from "../../components/StyledComponents"
import LynkCard from "../../components/LynkCard"


const Homepage = () => {
  return (
    <PageContainer>
      <div className="title">
        <h1>Listings</h1>
      </div>

      <LynksContainer>
        <LynkCard />
        <LynkCard />
        <LynkCard />
        <LynkCard />
        <LynkCard />
        <LynkCard />
        <LynkCard />
        <LynkCard />
        <LynkCard />
      </LynksContainer>

    </PageContainer>
  )
}

export default Homepage