import RenderItem from "../../Components/Pokemon/RenderItem"
import clsx from "clsx";
import styles from './RenderPokemon.module.css';
function RenderPokemon({ pokemon }) {
    return (
        <div className={clsx(styles.PokemonWrapper)}>
           {
            pokemon.map((item) => {
                return (
                    <div className={clsx(`${styles.wrapper}`)}  key={item.id}>
                        <RenderItem {...item}></RenderItem>
                    </div>
                )
            })
           }
        </div>
    )
}
export default RenderPokemon