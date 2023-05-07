import clsx from "clsx"
import styles from './styles/RenderItem.module.css'
import './styles/BackgroundColor.css'
import { Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { NameContext } from "../../App";
// import RenderDetail from "../../pages/PokemonDetail/RenderDetail";
function RenderItem(item) {
    const [hover, setHover] = useState(false);
    const navigate = useNavigate();
    const { setNameHref } = useContext(NameContext);

    return (
        <Fragment>
            <div
                onMouseEnter={() => {
                    setHover(true);
                }}
                onMouseLeave={() => {
                    setHover(false);
                }}
                className={clsx(`${styles.cardWrapper} border_1px_semiblack`)}
                style={{ display: "inline-block", width: "200px" }}
                onClick={() => {
                    navigate(`/PokemonPage/${item.name}`);
                    setNameHref(item);
                }}
            >

                {
                    (hover === true) ?
                        (<img className={clsx(`${styles.cardImg} BG${item.types[0]} duration-200`)} src={item.image} alt={item.name} />)
                        :
                        (<img className={clsx(`${styles.cardImg} BGwhitesmoke duration-200`)} src={item.image} alt={item.name} />)
                }

                <div className="card-body">
                    <p className={clsx(`${styles.cardId}`)}>#{item.id}</p>
                    <p className={clsx(`${styles.cardName}`)}>{item.name}</p>
                    <div className={clsx(`${styles.typesSection}`)}>
                        {
                            item.types.map((type, index) => {
                                let typeClass = `BG${type}`;
                                return (<p key={index} className={clsx(`${styles.cardType} ${typeClass}`)}>{type}</p>)
                            })
                        }
                    </div>
                </div>
            </div>
        </Fragment>

    )
}
export default RenderItem