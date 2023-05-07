import styles from './styles/Pokemon.module.css'
import FetchAPI from '../../Components/data/FetchAPI';
import HandleLoading from '../HandleLoading/HandleLoading';

import { faArrowsRotate } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import { NavContext } from "../../App";
import { useContext } from 'react';
function Pokemon() {
    const { setActiveHome } = useContext(NavContext)
    const { setActivePokemon } = useContext(NavContext)
    function HandleReload() {
        window.location.reload()
    }
    function handleClickSeeAll() {
        setActiveHome(false)
        setActivePokemon(true)
    }
    return (
        <div
            className={clsx(`${styles.WrapperPokemon}`)}
        >
            <div className={clsx(`${styles.HeaderPokemon} container d-flex w-full`)}>
                <div className={clsx(`${styles.title} d-flex`)}>
                    <h2>Pokémon</h2>
                    <button onClick={HandleReload}>
                        <FontAwesomeIcon icon={faArrowsRotate} />
                    </button>
                </div>
                <div onClick={handleClickSeeAll} className={clsx(`${styles.SeeAllBtn}`)}>
                    <Link to={'/PokemonPage'} refresh="true">See all</Link>
                </div>
            </div>

            <HandleLoading data={FetchAPI(20, true)}>

            </HandleLoading>

        </div>
    )
}
export default Pokemon;