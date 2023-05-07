import clsx from "clsx";
import styles from './RenderDetail.module.css'
import '../../Components/Pokemon/styles/BackgroundColor.css'
import Stats from "./Stats";
import InformationSection from "./InformationSection";
import Evolutions from "./Evolutions";
import { NavContext } from "../../App";
import { useContext } from 'react';
import { useEffect } from "react";
import { cleanup } from "@testing-library/react";
function RenderDetail(item) {
    const { setActiveHome } = useContext(NavContext)
    const { setActivePokemon } = useContext(NavContext)
    useEffect(() => {
        setActiveHome(false)
        setActivePokemon(true)
        return () => {
            cleanup();
        }
    })
    window.addEventListener("load", () => {
        window.location.href = 'http://localhost:3000/PokemonPage'
    })
    return (
        <div className={clsx(`${styles.WrapperDetail} d-flex flex-column container`)}>
            <div className={clsx(`${styles.HeaderDetail}`)}>
                <h2>{item.name}</h2>
                <span>#{item.id}</span>
            </div>
            <div className={clsx(`${styles.PokemonInfomations}`)}>
                <div className={clsx(`${styles.PokemonStats} padding_10 `)}>
                    <div className={clsx(`${styles.PokemonImage} padding_10 border_1px_semiblack border_radius`)}>
                        <img src={item.image} alt={item.name} />
                    </div>
                    <div className={clsx(`${styles.Stats} d-flex flex-column padding_10 border_1px_semiblack border_radius`)}>
                        <p><strong>Stats</strong></p>
                        < Stats {...item.stats} />
                    </div>

                </div>
                <InformationSection {...item} />
            </div>

            <div style={{ backgroundColor: "#333", height: "400px", margin: "10px",display: "flex", justifyContent:"center", alignItems:"center" }}>
                <Evolutions {...item}/>
            </div>
        </div>

    )
}
export default RenderDetail;