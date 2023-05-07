import './styles/CustomArrowSlick.css'
import RenderItem from '../Pokemon/RenderItem';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import clsx from 'clsx';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

function SlideShow({ data }) {

    // Custom slick slider:
    const settings = {
        infinite: true,
        speed: 500,
        swipeToSlide: true,
        slidesToShow: 5,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        slidesToScroll: 2,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 2,
                    infinite: true,
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    function NextArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={`${className} custom-arrow-slick custom-slick-next`}
                style={{
                    ...style,
                    right: 0,
                }}
                onClick={onClick}
            >
                <button><FontAwesomeIcon className='icon-btn' icon={faAngleRight} /></button>
            </div>
        );
    }
    function PrevArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={clsx(`${className} custom-arrow-slick custom-slick-prev`)}
                style={{
                    ...style,
                    left: 0,
                    zIndex: 10,
                }}
                onClick={onClick}
            >
                <button><FontAwesomeIcon className='icon-btn' icon={faAngleLeft} /></button>
            </div>
        );
    }
    return (

        <div className="container">
            <Slider {...settings}>
                {
                    data.data.map((item, index) => {
                        return (
                            <div key={item.id}>
                                <RenderItem {...item}></RenderItem>
                            </div>
                        )
                    })
                }
            </Slider>
        </div>

    )
}
export default SlideShow;