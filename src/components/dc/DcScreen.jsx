
import HeroList from '../hero/HeroList'

const DcScreen = () => {
  return (
    <div>
      <h1 className="animate__animated animate__zoomInDown">DC Heroes</h1>
      <HeroList publisher='DC Comics' />

    </div>
  )
}

export default DcScreen