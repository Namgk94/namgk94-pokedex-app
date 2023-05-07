import clsx from "clsx";
import Portal from "../Portal/Portal";
import styles from './Modal.module.css'
function Modal({ isOpen = false, children }) {
    if (!isOpen) {
        return null
    }

    return (
        <Portal>
            <div className={clsx(styles.wrapper)}>
                <div className={clsx(styles.overlay)}></div>
                <div className={clsx(styles.body)}>
                    {children}
                </div>
            </div>
        </Portal>
    )

}

export default Modal;