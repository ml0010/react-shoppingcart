import { useEffect, useState } from 'react'
import '../styles/tours.css'
import { TOURS } from '../tourlist'
import { Tour } from '../components/tour/tour'
import { Faq } from '../components/faq/faq'
import { SkipPage } from '../components/buttons/skip-page'
import MainPhoto from '../assets/calos-des-moro.png'
import { RevealOnScroll } from '../components/reveal-on-scroll'
import { MotionRoute } from '../components/motions'
import { Navigation, Pagination, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";


import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "swiper/css/pagination";


const SlideNextButton = () => {
    const swiper = useSwiper();
    return (
        <button onClick={() => swiper.slideNext()}>Next</button>
    );
};
const SlidePrevButton = () => {
    const swiper = useSwiper();
    return (
        <button onClick={() => swiper.slidePrev()}>Prev</button>
    );
};


export const Tours = () => {

    const getCategory = () => {
        const categoryList = [];
        TOURS.map((tour)=> {
            if (!categoryList.includes(tour.category)) {
                categoryList.push(tour.category);
            }
            return 0;
        });
        return categoryList;
    };


    const toursByCategory = (category) => {
        const tours = (TOURS.filter((tour) => {
            return tour.category === category;
        }));
        return tours;
    };

    const [ slides, setSlides ] = useState(1);

    const setSlidesPerview = () => {
        setSlides(
            window.innerWidth <= 700
                ? 1
                : window.innerWidth <= 1200
                ? 2
                : window.innerWidth > 1200
                ? 3
                : 0
        );
    };

    useEffect(() => {
        setSlidesPerview();
        window.addEventListener("resize", setSlidesPerview);
        return () => {
            window.removeEventListener("resize", setSlidesPerview);
        };
    }, []);
    
    return (
        <MotionRoute>
            <div className='tours'>
                <div className='pageFront'>
                    <div className='pageBackground' style={{ backgroundImage: `url(${MainPhoto})` }}></div>
                    <div className='pageMain'>
                        <p className='pageTitle'>DISCOVER EXPERIENCES</p>
                        <p className='pageDescription'>Curated activities and memorable experiences, complementing your time in Mallorca.</p>
                    </div>
                    <SkipPage />
                </div>
                <div className='pageContent'>
                    <div className='title'>
                        <h1>EXPLORE MALLORCA TOURS</h1>
                        <hr className='separator' />
                    </div>
                    <div>
                        {getCategory().map((category, index)=> {
                            return (
                                <div className='tour-by-category'> 
                                    <p key={index} id={category} className={`category-name`}>
                                        {` ${category} (${TOURS.filter(tour => tour.category===category).length})`}
                                    </p>

                                    <Swiper
                                        slidesPerView={slides}
                                        spaceBetween={20}
                                        slidesPerGroup={1}
                                        navigation={true}
                                        pagination={{
                                            clickable: true,
                                        }}
                                        grabCursor={true}
                                        loop={true}
                                        //scrollbar={{ draggable: true, dragSize: 100 }}
                                        modules={[Navigation, Scrollbar, Pagination]}
                                    >
                                        <div className='slides-wrapper'>
                                            {toursByCategory(category).map((tour, index) => {
                                                return (
                                                    <SwiperSlide key={index}>
                                                        <Tour data={tour} key={index} />
                                                    </SwiperSlide>
                                                )
                                            })}
                                        </div>
                                        <div>
                                            <div className="swiper-scrollbar test">
                                                <div className='swiper-scrollbar-drag test'></div>
                                            </div>
                                        </div>
                                    </Swiper>
                                </div>
                            )
                        })}
                    </div>
                    <Faq />
                </div>
            </div>
        </MotionRoute>
    )
}
export default Tours;

/*

    const [ tourCategorySelected, setTourCategorySelected ] = useState('all');
    const [ tourList, setTourList ] = useState(TOURS);

    const getCategory = () => {
        const categoryList = [];
        TOURS.map((tour)=> {
            if (!categoryList.includes(tour.category)) {
                categoryList.push(tour.category);
            }
            return 0;
        });
        return categoryList;
    };

    const handleFilter = (categorySelected) => {

        setTourCategorySelected(categorySelected);

        if (categorySelected === 'all') {
            setTourList(TOURS);
        }
        else {
            setTourList(toursByCategory(categorySelected));
        }
    };

    const toursByCategory = (category) => {
        const tours = (TOURS.filter((tour) => {
            return tour.category === category;
        }));
        console.log(tours);
        return tours;
    };

export const Tours = () => {

    const [ tourCategorySelected, setTourCategorySelected ] = useState('all');
    const [ tourList, setTourList ] = useState(TOURS);

    const getCategory = () => {
        const categoryList = [];
        TOURS.map((tour)=> {
            if (!categoryList.includes(tour.category)) {
                categoryList.push(tour.category);
            }
            return 0;
        });
        return categoryList;
    };

    const handleFilterTours = (categorySelected) => {

        setTourCategorySelected(categorySelected);

        if (categorySelected === 'all') {
            setTourList(TOURS);
        }
        else {
            const filteredTours = TOURS.filter((tour) => {
                return tour.category === categorySelected
            });
            setTourList(filteredTours);
        }
    }
    
    return (
        <MotionRoute>
            <div className='tours'>
                <div className='pageFront'>
                    <div className='pageBackground' style={{ backgroundImage: `url(${MainPhoto})` }}></div>
                    <div className='pageMain'>
                        <p className='pageTitle'>DISCOVER EXPERIENCES</p>
                        <p className='pageDescription'>Curated activities and memorable experiences, complementing your time in Mallorca.</p>
                    </div>
                    <SkipPage />
                </div>
                <div className='pageContent'>
                    <div className='title'>
                        <h1>EXPLORE MALLORCA TOURS</h1>
                        <hr className='separator' />
                    </div>
                    <div className='filterHandler'>
                        <div className='filters'>
                        <label className='filter'>
                            <input type='checkbox' checked={'all' === tourCategorySelected} value='all' onChange={(e)=>handleFilterTours(e.target.value)} /> ALL TOURS {`(${TOURS.length})`}
                        </label>
                        {getCategory().map((category, index)=> {
                            return (
                            <label className='filter' key={index}>
                                <input type='checkbox' checked={category === tourCategorySelected} value={category} onChange={(e)=>handleFilterTours(e.target.value)} />{` ${category} (${TOURS.filter(tour => tour.category===category).length})`}
                            </label>)
                        })}
                        </div>
                    </div>
                    <div className='toursList'>
                        {tourList.map((tour)=> (
                            <RevealOnScroll>
                                <Tour data={tour} key={tour.id} />
                            </RevealOnScroll>
                        ))}
                    </div>
                    <Faq />
                </div>
            </div>
        </MotionRoute>
    )
}
export default Tours;
 */