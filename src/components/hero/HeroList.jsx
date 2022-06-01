import { useMemo } from 'react'
import HeroCard from './HeroCard'

import { getHeroesByPublisher } from '../../helpers/getHeroByPublisher'



const HeroList = ({ publisher }) => {

    const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher]);



    return (
        <div className="row row-cols-1 row-cols-md-3 g-3 animate__animated animate__fadeIn">
            {
                heroes.map(hero => (
                    <HeroCard 
                    key={hero.id}
                    {...hero} // Se pasa cada uno de los heroes como elemento unico
                    />
                    
                ))
            }

        </div>
    )
}

export default HeroList