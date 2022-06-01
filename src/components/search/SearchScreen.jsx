import { useMemo } from 'react';
import queryString from 'query-string';
import { useNavigate, useLocation } from 'react-router-dom';
import HeroCard from '../hero/HeroCard';

import { useForm } from '../../hooks/useForm';
import { getHeroByName } from '../../helpers/getHeroByName';


const SearchScreen = () => {
    
    const navigate = useNavigate();
    const location = useLocation();

    const { q } = queryString.parse(location.search)


    const [formValues, handleInputChange] = useForm({
        searchText: q
    });

    const { searchText } = formValues;


    const heroesFiltered = useMemo(() => getHeroByName(q), [q])


    const handleSearch = e => {
        e.preventDefault();
        navigate(`?q=${searchText.trim()}`);

    }

    return (
        <>
            <h1 className="mt-3 animate__animated animate__zoomInDown animate__delay-1s">Búsca a tu heroe</h1>
            <hr />
            <div className="row ">
                <div className="col-5 animate__animated animate__bounceInLeft">
                    <h4>Buscar</h4>
                    <hr />

                    <form onSubmit={handleSearch}>
                        <input value={searchText} onChange={handleInputChange} className="form-control" type="text" placeholder="Buscar un heroé" name="searchText" autoComplete="off" />
                        <button type="submit" className="btn btn-outline-primary mt-1">Buscar...</button>
                    </form>
                </div>
                <div className="col-7">
                    <h4 className="animate__animated animate__zoomInDown animate__delay-1s">Resultados</h4>
                    <hr />
                    {
                        !q ? <div className="alert alert-info"> Buscar un héroe </div>
                            : ( heroesFiltered.length === 0 ) 
                                && <div className="alert alert-danger"> No hay resultados: { q } </div>
                    }
                    <div className="">
                        {
                            heroesFiltered.map(hero => (
                                <HeroCard key={hero.id} {...hero} />
                            ))
                        }
                    </div>

                </div>
            </div>
        </>
    )
}

export default SearchScreen