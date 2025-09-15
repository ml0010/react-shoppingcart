import { useEffect, useState } from 'react'
import '../styles/tours.css'
import { TOURS } from '../tourlist'
import { Tour } from '../components/tour/tour'
import { Faq } from '../components/faq/faq'
import { SkipPage } from '../components/buttons/skip-page'
import MainPhoto from '../assets/calos-des-moro.png'
import { MotionRoute } from '../components/motions'
import { Navigation, Pagination, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "swiper/css/pagination";
import { LoadingIcon } from '../components/buttons/loading-icon'

export const Tours = () => {

    const [ isViewOptionDefault, setIsViewOptionDefault ] = useState(true);

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
                    <div className='view-option'>
                        <button className='button' onClick={() => setIsViewOptionDefault(true)}>ALL TOURS</button>
                        <button className='button'  onClick={() => setIsViewOptionDefault(false)}>BY CATEGORY</button>
                    </div>
                    <div className='list-wrapper'>
                    {isViewOptionDefault ? 
                        <TourList /> :
                        <ToursByCategory />
                    }
                    </div>
                    <Faq />
                </div>
            </div>
        </MotionRoute>
    )
}
export default Tours;

const TourList = () => {
    
    const [ tourCategorySelected, setTourCategorySelected ] = useState('all');
    const [ tourList, setTourList ] = useState(TOURS);
    const [ isLoading, setIsLoading ] = useState(true);

    useEffect(() => {
        setIsLoading(true);
    }, [tourCategorySelected]);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 800);
    }, [isLoading]);


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
            <div className='list-all'>
                <div className='filter-wrapper'>
                    <div className='filters'>
                    <label className='filter'>
                        <input type='checkbox' checked={'all' === tourCategorySelected} value='all' onChange={(e)=>handleFilterTours(e.target.value)} /> All {`(${TOURS.length})`}
                    </label>
                    {getCategory().map((category, index)=> {
                        return (
                            <label className='filter' key={index}>
                                <input type='checkbox' checked={category === tourCategorySelected} value={category} onChange={(e)=>handleFilterTours(e.target.value)} />{` ${category.charAt(0).toUpperCase() + category.slice(1)} (${TOURS.filter(tour => tour.category===category).length})`}
                            </label>
                        )
                    })}
                    </div>
                </div>
                <div className='search'>
                    <input></input>
                </div>
                <div className='tour-list'>
                    {isLoading && <LoadingIcon /> }
                    {tourList.map((tour)=> (
                        <Tour data={tour} key={tour.id} />
                    ))}
                </div>
            </div>
        </MotionRoute>
    );
};


const ToursByCategory = () => {

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
    
    return (
        <MotionRoute>
            <div className='list-by-category'>
                <div>
                    {getCategory().map((category, index)=> {
                        return (
                            <div className='tour-by-category'> 
                                <p key={index} id={category} className={`category-name`}>
                                    {` ${category.charAt(0).toUpperCase() + category.slice(1)} (${TOURS.filter(tour => tour.category===category).length})`}
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
                                                    <Tour data={tour} />
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
            </div>
        </MotionRoute>
    );
};

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