
import HeroList from '../hero/HeroList'

const MarvelScreen = () => {
    return (
        <div>
            <h1 className="animate__animated animate__zoomInDown">Marvel Heroes</h1>

            <HeroList publisher='Marvel Comics'/>

        </div>
    )
}

export default MarvelScreen