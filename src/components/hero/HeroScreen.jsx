import { useMemo } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom"
import { getHeroById } from "../../helpers/getHerobyId"
import { heroImages } from "../../helpers/heroImages";




const HeroScreen = () => {

    const { id } = useParams()
    const navigation = useNavigate();


    const hero = useMemo(() => getHeroById(id), [id])

    if (!hero) {
        return <Navigate to="/" />
    }

    const { superhero, publisher, alter_ego, first_appearance, characters } = hero;

    // const imgPath = `/assets/${hero.id}.jpg`


    const handleReturn = () => {
        navigation(-1)
    }

    return (
        <div className="row mt-5">
            <div className="col-4">
                <img
                    // src={imgPath}
                    src={heroImages(`./${hero.id}.jpg`)}
                    alt={superhero} className="img-thumbnail animate__animated animate__bounceInLeft animate__delay-1s" />
            </div>

            <div className="col-8 animate__animated animate__bounceInDown ">
                <h3>{superhero}</h3>
                <ul className="list-group list-group-flush animate__animated animate__bounceInRight animate__delay-1s">
                    <li className="list-group-item"><b>Alter ego: </b>{alter_ego}</li>
                    <li className="list-group-item"><b>Publisher: </b>{publisher}</li>
                    <li className="list-group-item"><b>First appeareance: </b>{first_appearance}</li>

                    <h5 className="mt-2">Characters</h5>
                    <p>{characters}</p>

                    <button onClick={handleReturn} className="btn btn-outline-info w-25 ">
                        Regresar
                    </button>

                </ul>
            </div>



        </div>
    )
}

export default HeroScreen