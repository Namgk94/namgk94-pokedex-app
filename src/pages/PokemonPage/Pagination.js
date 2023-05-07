// import clsx from 'clsx';
import { useLayoutEffect, useRef, useState } from 'react';
import RenderPokemon from './RenderPokemon';
import LoaderComponent from '../../Components/LoaderComponent/LoaderComponent'

import clsx from "clsx";
import styles from './RenderPokemon.module.css';
function Pagination() {

    const [currentPageURL, setCurrentPageURL] = useState('https://pokeapi.co/api/v2/pokemon')
    const [nextPageURL, setNextPageURL] = useState()
    const [prevPageURL, setPrevPageURL] = useState()
    const [pokemon, setPokemon] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const page = useRef(1);
    const dataList = [];


    useLayoutEffect(() => {
        setIsLoading(true);
        fetch(currentPageURL)
            .then(res => res.json())
            .then(result => {
                setNextPageURL(result.next);
                setPrevPageURL(result.previous);
                fetchData(result);
            })

    }, [currentPageURL])



    async function fetchData(result) {
        for (let i = 0; i < 20; i++) {
            let API = result.results[i].url;
            await fetch(API)
                .then(response => response.json())
                .then(result => dataList.push(result))

        }
        await Promise.all(dataList).then(results => {
            let pokemonDATA = results.map((result) => {
                let statsItem = {};
                result.stats.map((item) => {
                    return statsItem[item.stat.name] = item.base_stat;
                })
                return ({
                    name: result.name,
                    image: (result.sprites.other.dream_world.front_default) || (result.sprites.other.home.front_default),
                    types: result.types.map((type => (type.type.name))),
                    id: result.id,
                    height: result.height,
                    weight: result.weight,
                    stats: statsItem,
                    species: result.species,
                    abilities: result.abilities.map(item => {
                        return item.ability.name
                    })
                })
            })
            setPokemon(pokemonDATA);
            setIsLoading(false)
        })
    }

    function goNextPage() {
        setCurrentPageURL(nextPageURL)
        page.current++;
    }
    function goPrevPage() {
        setCurrentPageURL(prevPageURL)
        if(page.current > 1) {
            page.current--;
        }
        else {
            alert('Error: Page 1 is smallest');
            window.location.reload();
            console.error('Page 1 is smallest');
        }
    }

    if (isLoading) return <LoaderComponent />
    return (
        <>
            <RenderPokemon pokemon={pokemon} />
            <div className={clsx(styles.controlBtn)}>
                <button onClick={goPrevPage}>Prev</button>
                <strong>Page: {page.current}</strong>
                <button onClick={goNextPage}>Next</button>
            </div>
        </>
    )
}
export default Pagination