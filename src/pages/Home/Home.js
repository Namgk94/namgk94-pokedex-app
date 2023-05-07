import Pokemon from '../../Components/Pokemon/Pokemon';
import { Fragment } from 'react';
import WrapperBackground from '../../WrapperBackground.js'

function Home() {
    
    return (
        <Fragment>

            <WrapperBackground>
            </WrapperBackground>

            <Pokemon></Pokemon>
            
        </Fragment>
    )
}
export default Home;