import RenderDetail from "./RenderDetail";
import { useContext } from "react";
import { NameContext } from "../../App";
function PokemonDetail() {
    const {nameHref} = useContext(NameContext);
    return <RenderDetail {...nameHref}></RenderDetail>
}   
export default PokemonDetail;