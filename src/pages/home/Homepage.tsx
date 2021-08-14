import { LynksContainer, PageContainer } from "../../components/StyledComponents"
import LynkCard from "../../components/LynkCard"
import { lynks } from "../../utils/constants"

const Homepage = () => {
  return (
    <PageContainer>
      <div className="title">
        <h1>Listings</h1>
      </div>

      <LynksContainer>
        {lynks.map(lynk => <LynkCard key={lynk.id} lynk={lynk} />)}
      </LynksContainer>

    </PageContainer>
  )
}

export default Homepage