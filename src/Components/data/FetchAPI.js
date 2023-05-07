import { useEffect, useState } from "react";
function FetchAPI( amount , isRandom = false, startPoint ) {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading]= useState(true);
    
    const dataList = [];
    let start;
    // const pokemonDATA = useRef([]);

    useEffect(() => {
        setIsLoading(true);
        if(isRandom === true) {
            (start = Math.floor(Math.random() * 800 + 1))
        }
        else ( start = startPoint);
        console.log(start);
        let end = start + amount - 1;
        async function fetchData() {
            for (let i = start; i <= end; i++) {
                let API = `https://pokeapi.co/api/v2/pokemon/${i}`;
                await fetch(API)
                    .then(setIsLoading(false))
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
                        image:(result.sprites.other.dream_world.front_default) || (result.sprites.other.home.front_default),
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
                setData(pokemonDATA);
            })
        }
        fetchData();
    },[]);
    if(isLoading) return 'loading'
    return data;
    
}
export default FetchAPI;