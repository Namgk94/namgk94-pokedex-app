import { useLayoutEffect, useState } from 'react';
import { memo } from 'react';

// import styles from './HandleLoading.module.css'
import LoaderComponent from '../LoaderComponent/LoaderComponent';

import SlideShow from '../Pokemon/SlideShow';
function HandleLoading(data) {
    const [isLoading, setIsLoading] = useState(true);
    useLayoutEffect(() => {
        setIsLoading(false);
        if (data.data === 'loading' || data.data.length === 0) {
            setIsLoading(true);
        }
    }, [data.data])

    return (
        (isLoading === false) ?
        <SlideShow data={data}></SlideShow>
        :
        (<div className="container">
            <LoaderComponent />
        </div>)
    )
}
export default memo(HandleLoading);