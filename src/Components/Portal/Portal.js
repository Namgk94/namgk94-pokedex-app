import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
function Portal({children, target}) {
    const [wrapper, setWrapper] = useState();
    useEffect(() => {
        let portal = document.querySelector(`#${target}`);
        
        if(!portal) {
            portal = document.createElement("div");
            document.body.appendChild(portal);
        }
        setWrapper(portal);
        return () => {
            portal.remove()
        };
    },[target])
    if(!wrapper) return null;
    return createPortal(children, wrapper)
}
export default Portal