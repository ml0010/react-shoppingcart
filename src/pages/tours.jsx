
import { useEffect, useRef, useState } from 'react'
import '../styles/tours.css'
import { TOURS } from '../tourlist'
import { Tour } from '../components/tour/tour'
import { Faq } from '../components/faq/faq'
import { SkipPage } from '../components/buttons/skip-page'
import MainPhoto from '../assets/calos-des-moro.png'
import { MotionRoute } from '../components/motions'
import { LoadingIcon } from '../components/buttons/loading-icon'
import { Link } from 'react-router-dom'
import { CaretDownIcon, MagnifyingGlassIcon, XIcon } from '@phosphor-icons/react'

export const Tours = () => {

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
                   <div className='list-wrapper'>
                        <TourList /> :
                    </div>
                    <Faq />
                </div>
            </div>
        </MotionRoute>
    )
}
export default Tours;


const TourList = () => {
    
    const [ tourListSearched, setTourListSearched ] = useState(TOURS);
    const [ tourListFiltered, setTourListFiltered ] = useState(TOURS);
    const [ isLoading, setIsLoading ] = useState(true);
    const [ isSearched, setIsSearched ] = useState(false);
    const [ searchText, setSearchText ] = useState("");
    const [ categoryList, setCategoryList ] = useState([]);
    const [ languageList, setLanguageList ] = useState([]);
    const [ isLanguageListOpen, setIsLanguageListOpen ] = useState(false);

    const [ searchInput, setSearchInput ] = useState("");
    const [ searchResult, setSearchResult ] = useState([]);

    useEffect(() => {
        setIsLoading(true);
    }, [tourListFiltered]);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 400);
    }, [isLoading]);


    const getSearchList = () => {
        const results = TOURS.filter((tour) => (tour.tourName.toLowerCase().includes(searchText.toLocaleLowerCase()) || tour.description.toLowerCase().includes(searchText.toLocaleLowerCase())));
        setTourListFiltered([...results]);
        return results;
    };

    const getCategory = () => {
        const categoryList = [];
        tourListSearched.map((tour)=> {
            if (!categoryList.includes(tour.category)) {
                categoryList.push(tour.category);
            }
            return 0;
        });
        return categoryList;
    };

    const getLanguage = () => {
        const languageList = [];
        tourListSearched.map((tour)=> {
            tour.languages.map((language) => {
                if (!languageList.includes(language)) {
                    languageList.push(language);
                }
                return 0;
            });
        });
        return languageList;
    };

    const handleCategoryFilter = (category) => {
        const searchedList = getSearchList();
        const index = categoryList.indexOf(category);
        var newCategoryList = [];

        if (index > -1) {
            newCategoryList = categoryList.filter(item => item !== category);
        } else {
            newCategoryList = [...categoryList, category];
        }
        setCategoryList(newCategoryList);

        const newTourList = searchedList.filter((tour) => (
            newCategoryList.includes(tour.category)
        ));

        if (newTourList.length === 0) {
            setTourListFiltered(searchedList);
        } else {
            setTourListFiltered(newTourList);
        }
        setLanguageList([]);
    };

    const handleLanguageList = (language) => {
        const index = languageList.indexOf(language);
        const searchedList = getSearchList();

        var newLanguageList = [];
        if (index > -1) {
            newLanguageList = languageList.filter(item => item !== language);
        } else {
            newLanguageList = [...languageList, language];
        }
        setLanguageList(newLanguageList);

        if (newLanguageList.length > 0) {
            const newTourListFiltered = searchedList.filter((tour) => {
                var isListed = false;
                tour.languages.map((language) => {
                    if(newLanguageList.includes(language)) {
                        isListed = true;
                    }
                })
                return isListed;
            });
            setTourListFiltered(newTourListFiltered);
        } else {
            setTourListFiltered(TOURS);
        }
    };

    const handleFilterReset = () => {
        setTourListFiltered(TOURS);
        setTourListSearched(TOURS);
        setLanguageList([]);
        setCategoryList([]);
        setIsSearched(false);
        setSearchText("");
    };

    const handleTextSearchReset = () => {
        setIsSearched(false);
        setSearchText("");
        setTourListFiltered(TOURS);
    };

    const handleLanguageReset = () => {
        setTourListFiltered(getSearchList());
        setLanguageList([]);
    };

    let languageRef = useRef(null);

    useEffect(() => {
        let handler = (e)=>{
            if(languageRef.current && !languageRef.current.contains(e.target)){
                setIsLanguageListOpen(false);
            }
        };
        document.addEventListener("mousedown", handler);
        return() =>{
            document.removeEventListener("mousedown", handler);
        }
    }, [languageRef]);



    // search Box

    const handleSearch = (input) => {
        setSearchInput(input);
        const results = TOURS.filter((tour) => (tour.tourName.toLowerCase().includes(input.toLocaleLowerCase()) || tour.description.toLowerCase().includes(input.toLocaleLowerCase())));
        setSearchResult([...results]);
    };

    const handleDeleteSearchInput = () => {
        setSearchInput("");
        setSearchResult([]);
    };

    let searchRef = useRef(null);

    useEffect(() => {
        let handler = (e)=>{
            if(searchRef.current && !searchRef.current.contains(e.target)){
                handleDeleteSearchInput();
            }
        };
        document.addEventListener("mousedown", handler);
        return() =>{
            document.removeEventListener("mousedown", handler);
        }
    }, [searchRef]);

    const searchBox = () => {
        const handleKeyPress = (e) => {
            if(e.key === 'Enter' && searchResult.length > 0) {
                console.log("Enter Key Pressed!: ", e.target.value);
                handleTextSearch(e.target.value);
            }
        };
        const handleTextSearch = (text) => {
            setTourListFiltered(searchResult);
            setTourListSearched(searchResult);
            setSearchText(text);
            handleDeleteSearchInput();
            setIsSearched(true);
        };

        const SearchResult = ({tour}) => {
            return (
                <Link className='item' to={`/tour-detail/${tour.id}`}>
                    <span className='detail'>
                        <img src={tour.img[0]}></img>
                        {tour.tourName}
                    </span>
                    <hr className='separator'/>
                </Link>
            );
        };

        return (
            <>
                <div className='input-wrapper'>
                    <MagnifyingGlassIcon size={20} weight="bold" />
                    <input 
                        className='input' 
                        value={searchInput} 
                        placeholder='Search' 
                        onChange={(e)=>handleSearch(e.target.value)} 
                        onKeyDown={handleKeyPress}
                    />
                    {searchInput && <XIcon size={15} weight="bold" onClick={handleDeleteSearchInput}/>}
                </div>
                <div>
                <div className={`search-result ${searchInput.length > 0 ? 'visible' : 'hidden'}`}>
                    {isLoading && <LoadingIcon /> }
                    <div className='result-list'>
                    {searchResult.length > 0 ?
                        <>
                            {searchResult.slice(0,5).map((tour, index) => (
                                <SearchResult tour={tour} key={index} />
                            ))}
                            {searchResult.length > 5 && 
                                <span onClick={() => handleTextSearch(searchInput)}>View All Results ({searchResult.length})</span>
                            }
                        </> :
                        <>
                            <span className='empty-list'>No Matching Result</span>
                        </>
                    }
                    </div>
                </div>
            </div>
            </>
        )
    };
    
    return (
        <MotionRoute>
            <div className='list-all'>
                <div className='filter-wrapper'>
                    <div className='search' ref={searchRef}>
                    {searchBox()}
                    </div>
                    <div className='filter-list'>
                        {isSearched &&                         
                            <button 
                                className={`filter-button selected`}
                                value={searchText} 
                                onClick={handleTextSearchReset} 
                            >
                                <span>Search: {searchText.charAt(0).toUpperCase() + searchText.slice(1)}</span>
                                <span><XIcon size={15} /></span>
                            </button>
                        }
                        {getCategory().map((category, index)=> {
                            return (
                                <button 
                                    className={`filter-button ${categoryList.includes(category) ? 'selected' : 'notSelected'}`}
                                    key={index} 
                                    value={category} 
                                    onClick={(e)=>handleCategoryFilter(e.target.value)} 
                                >
                                    <span>{category.charAt(0).toUpperCase() + category.slice(1)}</span>
                                    <span>{categoryList.includes(category) && <XIcon size={15} />}</span>
                                </button>
                            )
                        })}
                        <button 
                            className={`filter-button ${languageList.length > 0 ? 'selected' : 'notSelected'}`}
                            onClick={() => setIsLanguageListOpen(!isLanguageListOpen)}
                            ref={languageRef}
                        >
                            <span>{languageList.length !== 0 ? (languageList.length > 1 ? languageList[0] + ', +' + (languageList.length -1) + ' more' : languageList[0]) : 'Language'}</span>
                            <span><CaretDownIcon size={15} /></span>
                            <div className={`language-list ${isLanguageListOpen ? 'active' : 'closed'}`}>
                                {getLanguage().map((language, index) => (
                                    <label className='language' key={index}>
                                        <input type='checkbox' checked={languageList.includes(language)} value={language} onChange={(e)=>handleLanguageList(e.target.value)}/>
                                        <p>{language}</p>
                                    </label>
                                ))}
                                <div className='reset-button' onClick={handleLanguageReset}>Reset</div>
                            </div>
                        </button>
                        {(categoryList.length > 0 || languageList.length > 0 || searchText.length > 0) && 
                            <button 
                                className={`filter-button selected`}
                                onClick={handleFilterReset} 
                            >
                                <span>Reset All</span>
                                <span><XIcon size={15} /></span>
                            </button>
                        }
                    </div>
                </div>
                <div className='tour-number'>Result: {tourListFiltered.length}</div>
                <div className='tour-list'>
                    {isLoading && <LoadingIcon /> }
                    {tourListFiltered.map((tour)=> (
                        <Tour data={tour} key={tour.id} />
                    ))}
                </div>
            </div>
        </MotionRoute>
    );
};



/*
import { useEffect, useRef, useState } from 'react'
import '../styles/tours.css'
import { TOURS } from '../tourlist'
import { Tour } from '../components/tour/tour'
import { Faq } from '../components/faq/faq'
import { SkipPage } from '../components/buttons/skip-page'
import MainPhoto from '../assets/calos-des-moro.png'
import { MotionRoute } from '../components/motions'
import { LoadingIcon } from '../components/buttons/loading-icon'
import { Link } from 'react-router-dom'
import { CaretDownIcon, MagnifyingGlassIcon, XIcon } from '@phosphor-icons/react'

export const Tours = () => {

    const [ tourList, setTourList ] = useState(TOURS);

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
                   <div className='list-wrapper'>
                        <TourList tourList={tourList} setTourList={setTourList} /> :
                    </div>
                    <Faq />
                </div>
            </div>
        </MotionRoute>
    )
}
export default Tours;



const TourList = ({tourList}) => {
    
    const [ tourListSearched, setTourListSearched ] = useState(tourList);
    const [ tourListFiltered, setTourListFiltered ] = useState(tourList);
    const [ isLoading, setIsLoading ] = useState(true);
    const [ isSearched, setIsSearched ] = useState(false);
    const [ searchText, setSearchText ] = useState("");
    const [ categoryList, setCategoryList ] = useState([]);
    const [ languageList, setLanguageList ] = useState([]);
    const [ isLanguageListOpen, setIsLanguageListOpen ] = useState(false);

    useEffect(() => {
        setIsLoading(true);
    }, [categoryList, languageList, isSearched]);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 400);
    }, [isLoading]);


    const getSearchList = () => {
        const results = TOURS.filter((tour) => (tour.tourName.toLowerCase().includes(searchText.toLocaleLowerCase()) || tour.description.toLowerCase().includes(searchText.toLocaleLowerCase())));
        setTourListFiltered([...results]);
        return results;
    };

    const getCategory = () => {
        const categoryList = [];
        tourListFiltered.map((tour)=> {
            if (!categoryList.includes(tour.category)) {
                categoryList.push(tour.category);
            }
            return 0;
        });
        return categoryList;
    };

    const getLanguage = () => {
        const languageList = [];
        tourListFiltered.map((tour)=> {
            tour.languages.map((language) => {
                if (!languageList.includes(language)) {
                    languageList.push(language);
                }
                return 0;
            });
        });
        return languageList;
    };

    const handleCategoryFilter = (category) => {
        const searchedList = getSearchList();
        const index = categoryList.indexOf(category);
        var newCategoryList = [];

        if (index > -1) {
            newCategoryList = categoryList.filter(item => item !== category);
        } else {
            newCategoryList = [...categoryList, category];
        }
        setCategoryList(newCategoryList);

        const newTourList = searchedList.filter((tour) => (
            newCategoryList.includes(tour.category)
        ));

        if (newTourList.length === 0) {
            setTourListFiltered(searchedList);
        } else {
            setTourListFiltered(newTourList);
        }
        setLanguageList([]);
    };

    const handleLanguageList = (language) => {
        const index = languageList.indexOf(language);
        const searchedList = getSearchList();

        var newLanguageList = [];
        if (index > -1) {
            newLanguageList = languageList.filter(item => item !== language);
        } else {
            newLanguageList = [...languageList, language];
        }
        setLanguageList(newLanguageList);

        if (newLanguageList.length > 0) {
            const newTourListFiltered = searchedList.filter((tour) => {
                var isListed = false;
                tour.languages.map((language) => {
                    if(newLanguageList.includes(language)) {
                        isListed = true;
                    }
                })
                return isListed;
            });
            setTourListFiltered(newTourListFiltered);
        } else {
            setTourListFiltered(tourList);
        }
    };

    const handleFilterReset = () => {
        setTourListFiltered(tourList);
        setLanguageList([]);
        setCategoryList([]);
        setIsSearched(false);
        setSearchText("");
    };

    const handleTextSearchReset = () => {
        setIsSearched(false);
        setSearchText("");
        setTourListFiltered(tourList);
    };

    const handleLanguageReset = () => {
        setTourListFiltered(getSearchList());
        setLanguageList([]);
    };

    let languageRef = useRef(null);

    useEffect(() => {
        let handler = (e)=>{
            if(languageRef.current && !languageRef.current.contains(e.target)){
                setIsLanguageListOpen(false);
            }
        };
        document.addEventListener("mousedown", handler);
        return() =>{
            document.removeEventListener("mousedown", handler);
        }
    }, [languageRef]);

    return (
        <MotionRoute>
            <div className='list-all'>
                <div className='filter-wrapper'>
                    <SearchBox tourList={tourListFiltered} setTourList={setTourListFiltered} setIsSearched={setIsSearched} setSearchText={setSearchText} />
                    <div className='filter-list'>
                        {isSearched &&                         
                            <button 
                                className={`filter-button selected`}
                                value={searchText} 
                                onClick={handleTextSearchReset} 
                            >
                                <span>Search: {searchText.charAt(0).toUpperCase() + searchText.slice(1)}</span>
                                <span><XIcon size={15} /></span>
                            </button>
                        }
                        {getCategory().map((category, index)=> {
                            return (
                                <button 
                                    className={`filter-button ${categoryList.includes(category) ? 'selected' : 'notSelected'}`}
                                    key={index} 
                                    value={category} 
                                    onClick={(e)=>handleCategoryFilter(e.target.value)} 
                                >
                                    <span>{category.charAt(0).toUpperCase() + category.slice(1)}</span>
                                    <span>{categoryList.includes(category) && <XIcon size={15} />}</span>
                                </button>
                            )
                        })}
                        <button 
                            className={`filter-button ${languageList.length > 0 ? 'selected' : 'notSelected'}`}
                            onClick={() => setIsLanguageListOpen(!isLanguageListOpen)}
                            ref={languageRef}
                        >
                            <span>{languageList.length !== 0 ? (languageList.length > 1 ? languageList[0] + ', +' + (languageList.length -1) + ' more' : languageList[0]) : 'Language'}</span>
                            <span><CaretDownIcon size={15} /></span>
                            <div className={`language-list ${isLanguageListOpen ? 'active' : 'closed'}`}>
                                {getLanguage().map((language, index) => (
                                    <label className='language' key={index}>
                                        <input type='checkbox' checked={languageList.includes(language)} value={language} onChange={(e)=>handleLanguageList(e.target.value)}/>
                                        <p>{language}</p>
                                    </label>
                                ))}
                                <div className='reset-button' onClick={handleLanguageReset}>Reset</div>
                            </div>
                        </button>
                        {(categoryList.length > 0 || languageList.length > 0 || searchText.length > 0) && 
                            <button 
                                className={`filter-button selected`}
                                onClick={handleFilterReset} 
                            >
                                <span>Reset All</span>
                                <span><XIcon size={15} /></span>
                            </button>
                        }
                    </div>
                </div>
                <div className='tour-number'>Result: {tourListFiltered.length}</div>
                <div className='tour-list'>
                    {isLoading && <LoadingIcon /> }
                    {tourListFiltered.map((tour)=> (
                        <Tour data={tour} key={tour.id} />
                    ))}
                </div>
            </div>
        </MotionRoute>
    );
};

const SearchBox = ({tourList, setTourList, setIsSearched, setSearchText}) => {

    const [ searchInput, setSearchInput ] = useState("");
    const [ searchResult, setSearchResult ] = useState([]);
    const [ isLoading, setIsLoading ] = useState(false);

    useEffect(() => {
        setIsLoading(true);
    }, [searchResult]);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 400);
    }, [isLoading]);

    const handleSearch = (input) => {
        setSearchInput(input);
        const results = TOURS.filter((tour) => (tour.tourName.toLowerCase().includes(input.toLocaleLowerCase()) || tour.description.toLowerCase().includes(input.toLocaleLowerCase())));
        setSearchResult([...results]);
    };

    const handleDeleteSearchInput = () => {
        setSearchInput("");
        setSearchResult([]);
    };

    let searchRef = useRef(null);

    useEffect(() => {
        let handler = (e)=>{
            if(searchRef.current && !searchRef.current.contains(e.target)){
                handleDeleteSearchInput();
            }
        };
        document.addEventListener("mousedown", handler);
        return() =>{
            document.removeEventListener("mousedown", handler);
        }
    }, [searchRef]);
    
    const handleKeyPress = (e) => {
        if(e.key === 'Enter' && searchResult.length > 0) {
            console.log("Enter Key Pressed!: ", e.target.value);
            handleTextSearch(e.target.value);
        }
    };

    const handleTextSearch = (text) => {
            setTourList(searchResult);
            setSearchText(text);
            handleDeleteSearchInput();
            setIsSearched(true);
    };

    const SearchResult = ({tour}) => {
        return (
            <Link className='item' to={`/tour-detail/${tour.id}`}>
                <span className='detail'>
                    <img src={tour.img[0]}></img>
                    {tour.tourName}
                </span>
                <hr className='separator'/>
            </Link>
        );
    };

    return (
        <div className='search' ref={searchRef}>
            <div className='input-wrapper'>
                <MagnifyingGlassIcon size={20} weight="bold" />
                <input 
                    className='input' 
                    value={searchInput} 
                    placeholder='Search' 
                    onChange={(e)=>handleSearch(e.target.value)} 
                    onKeyDown={handleKeyPress}
                />
                {searchInput && <XIcon size={15} weight="bold" onClick={handleDeleteSearchInput}/>}
            </div>
            <div>
            <div className={`search-result ${searchInput.length > 0 ? 'visible' : 'hidden'}`}>
                {isLoading && <LoadingIcon /> }
                <div className='result-list'>
                {searchResult.length > 0 ?
                    <>
                        {searchResult.slice(0,5).map((tour, index) => (
                            <SearchResult tour={tour} key={index} />
                        ))}
                        {searchResult.length > 5 && 
                            <span onClick={() => handleTextSearch(searchInput)}>View All Results ({searchResult.length})</span>
                        }
                    </> :
                    <>
                        <span className='empty-list'>No Matching Result</span>
                    </>
                }
                </div>
            </div>
            </div>
        </div>
    )
};


*/