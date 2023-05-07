import styles from './LoaderComponent.module.css';
import clsx from 'clsx';

function LoaderComponent() {
    return (
        <div className={clsx(styles.LoaderBG)}>
            <div className={clsx(styles.loader)}></div>
        </div>
    )
}
export default LoaderComponent