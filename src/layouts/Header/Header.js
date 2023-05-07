import { Fragment, useContext} from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css"
import clsx from "clsx";
import { NavContext } from "../../App";
function Header() {
    const { setActiveHome } = useContext(NavContext)
    const {activeHome} = useContext(NavContext);
    const { setActivePokemon } = useContext(NavContext)
    const {activePokemon} = useContext(NavContext);
    function handleSetActive(element) {
        if (element.className === '') {
            setActiveHome(!activeHome);
            setActivePokemon(!activePokemon);
        }

    }   

    return (
        <Fragment>
            <div className={clsx(`${styles.headerBackground} container-fluid`)}>
                <nav className={clsx(`${styles.navbarCustom} navbar navbar-expand-xl container`)}>
                    {
                        (activePokemon && <Link className="navbar-brand" to={"/"} onClick={() => {
                            setActiveHome(true)
                            setActivePokemon(false)
                        }}>
                            <img src="https://logos-world.net/wp-content/uploads/2020/05/Pokemon-Logo.png" alt=""
                                style={{ width: "200px", height: "100px" }}
                            />
                        </Link>)
                        ||
                        <Link className="navbar-brand" to={"/"}>
                            <img src="https://logos-world.net/wp-content/uploads/2020/05/Pokemon-Logo.png" alt=""
                                style={{ width: "200px", height: "100px" }}
                            />
                        </Link>
                    }

                    <button
                        className={clsx(`${styles.customToggler} navbar-toggler`)}
                        data-bs-toggle="collapse"
                        data-bs-target="#headerNavbar"
                        style={{ zIndex: 100 }}
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div id="headerNavbar" className={clsx(`${styles.navbarCollapseCustom} navbar-collapse collapse`)}>
                        <ul className={clsx(`${styles.navbarNavCustom} navbar-nav flex-col`)}>
                            <li className="nav-item active">

                                {
                                    (activeHome && <Link onClick={(e) => handleSetActive(e.target)} className={clsx(styles.active)} to={"/Home"}>Home</Link>)
                                    || <Link onClick={(e) => handleSetActive(e.target)} to={"/Home"}>Home</Link>
                                }

                            </li>
                            <li className="nav-item">

                                {
                                    (activePokemon && <Link onClick={(e) => handleSetActive(e.target)} className={clsx(styles.active)} to={"/PokemonPage"}>Pokemon</Link>)
                                    || <Link onClick={(e) => handleSetActive(e.target)} to={"/PokemonPage"}>Pokemon</Link>
                                }
                            </li>
                        </ul>
                    </div>

                </nav>
            </div>


        </Fragment>
    )
}

export default Header;