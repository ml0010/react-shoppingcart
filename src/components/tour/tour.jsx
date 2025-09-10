import './tour.css'
import { ArrowUpRightIcon } from '@phosphor-icons/react'
import { Carousel } from './carousel';
import { Link } from 'react-router-dom';

export const Tour = ({ data }) => {
    return (
        <div className='tour' key={data.id}>
            <div className='image'>
                <Carousel images={data.img} thumbnails={false}/>
            </div>
            <div className='tour-detail'>
                <div className='top'>
                    <p className='name'>{data.tourName}</p>
                    <p className='duration'>{data.duration} hours</p>
                </div>
                <div className='bottom'>
                    <span className='price-warpper'>
                        <p className='price'>{data.price}€</p>
                        <p> per person</p>
                    </span>
                </div>
                <Link className='tour-detail-button' to={`/tour-detail/${data.id}`}>
                    <button className='button' >
                        DETAILS & BOOK<ArrowUpRightIcon size={15} />
                    </button>
                </Link>
            </div>

        </div>
    )
}

// <Link className='button' to={`/tour-detail/${data.id}`} state={{ data: data }}>DETAILS & BOOK<ArrowUpRightIcon size={15} /></Link>


/*

export const Tour = (props) => {
    const { id, tourName, img, description, duration, meetingPoint, price } = props.data;
    const data = props.data;
    const [ showTourInfo, setShowTourInfo ] = useState(false);

    useEffect(() => {
        document.body.style.overflow = showTourInfo ? 'hidden' : 'unset';
    }, [showTourInfo]);

    return (
        <div className='tour' key={id}>
            <div className='tourImg'>
                <Carousel images={img} thumbnails={false}/>
            </div>
            <div className='tourDetail'>
                <p className='tourName'>{tourName}</p>
                <span className='subInfo'>
                    <ClockIcon size={15} />
                    <p>Duration {duration} hours</p>
                    <MapPinLineIcon size={15} />
                    <p>Tour starts in {meetingPoint}</p>
                    <PiggyBankIcon size={15} />
                    <p>{price}€ per person</p>
                </span>
                <Link to="/onboarding/profile" state={{ from: "occupation" }}>
                Next Step
                </Link>
                <button className='button' onClick={()=>setShowTourInfo(true)}>DETAILS & BOOK<ArrowUpRightIcon size={15} /></button>
            </div>

            {showTourInfo && 
                <>
                    <div className={`backdrop ${showTourInfo? 'active' : 'inactive'}`} key={id}></div>
                    <TourInfo props={data} showTourInfo={showTourInfo} closeTourInfo={() => setShowTourInfo(false)} />
                </>
            } 
        </div>
    )
}
*/