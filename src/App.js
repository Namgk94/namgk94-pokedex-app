import './App.css';

import Header from './layouts/Header/Header';
import Home from './pages/Home/Home';
import PokemonPage from './pages/PokemonPage/PokemonPage'
import PokemonDetail from './pages/PokemonDetail/PokemonDetail';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import { Routes, Route } from 'react-router-dom';
import { createContext } from 'react';
import { useState } from 'react';
export const NameContext = createContext({
  nameHref: '',
  setNameHref: () => { }
})
export const NavContext = createContext({
  activeHome: null,
  setActiveHome: () => { },
  activePokemon: null,
  setActivePokemon: () => { },
})

export const PageDataContext = createContext({
  currentData: null,
  setCurrentData: () => { }
})
function App() {
  const [nameHref, setNameHref] = useState();
  const [activeHome, setActiveHome] = useState(true);
  const [activePokemon, setActivePokemon] = useState(false);


  return (
      <NavContext.Provider value={{ activeHome, setActiveHome, activePokemon, setActivePokemon }}>
        <NameContext.Provider value={{ nameHref, setNameHref }}>
          <Header></Header>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/PokemonPage" element={<PokemonPage />} />
            <Route path='/PokemonPage/:nameHref' element={<PokemonDetail />} />

            <Route path='*' element={<ErrorPage />} />
          </Routes>
        </NameContext.Provider>
      </NavContext.Provider>
  )
}
export default App;
