import clsx from "clsx"
import styles from './RenderDetail.module.css'
import { useState } from "react";
import { useLayoutEffect } from "react";
import { cleanup } from "@testing-library/react";

function InformationSection(item) {
    const [isLoading, setIsLoading] = useState(true);
    const [color, setColor] = useState('');
    const [discription, setDiscription] = useState('');
    const [habitat, setHabitat] = useState();
    useLayoutEffect(() => {
        setIsLoading(true)
        let URL_API = item.species.url
        fetch(URL_API)
            .then(res => res.json())
            .then(result => {
                setColor(result.color.name);
                setDiscription(result.flavor_text_entries[0].flavor_text)
                setIsLoading(false);
                (result.habitat === null) ? setHabitat("_") : setHabitat(result.habitat.name);
            })
            .catch(new Error('Error'))

        return () => {
            cleanup();
            console.log("clean up")
        }
    }, [])
    return (


        <div className={clsx(`${styles.InfomationSection} padding_20 border_1px_semiblack border_radius`)}>


            {(isLoading === false) ?
                (<>
                    <div className={clsx(`${styles.info} ${styles.description} capitalize`)}>
                        <p><strong>Description</strong>: {discription} </p>
                    </div>
                    <div className={clsx(`${styles.info} ${styles.height}`)}>
                        <p><strong>Height</strong>: {item.height} Ft</p>
                    </div>
                    <div className={clsx(`${styles.info} ${styles.weight}`)}>
                        <p><strong>Weight</strong>: {item.weight} Lps</p>
                    </div>
                    <div className={clsx(`${styles.info} ${styles.color} capitalize`)}>
                        <p><strong>Color</strong>: {color}</p>
                    </div>
                    <div className={clsx(`${styles.info} ${styles.habitat} capitalize`)}>
                        <p><strong>Habitat</strong>: {habitat}</p>
                    </div>
                    <div className={clsx(`${styles.info} ${styles.abilities} capitalize`)}>
                        <strong>Abilities</strong>:
                        {
                            item.abilities.map((ability,index) => {
                                return <p key={index} className={clsx(`${styles.ability} capitalize border_1px_semiblack border_radius`)}>{ability}</p>
                            })
                        }

                    </div>
                    <div className={clsx(`${styles.info} ${styles.types}`)}>
                        <strong>Types</strong>:
                        {
                            item.types.map((type, index) => {
                                let typeClass = `BG${type}`;
                                return (<p key={index} className={clsx(`${styles.cardType} ${typeClass} capitalize border_1px_semiblack border_radius`)}>{type}</p>)
                            })
                        }

                    </div>
                </>)
                : (<div className={clsx(styles.LoaderBG)}>
                    <div className={clsx(styles.loader)}></div>
                </div>)
            }
        </div>

    )
}
export default InformationSection