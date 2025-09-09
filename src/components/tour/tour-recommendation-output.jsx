import { Link } from 'react-router-dom';
import './tour-recommendation.css';
import { ArrowUpRightIcon } from '@phosphor-icons/react';

export const TourRecommendationOutput = (props) => {
    const data = props.data;

    return (
            <div className='recommendation' key={data.id}>
                <img className='tourImg' src={data.img[0]} alt={data.tourName} />            
                <div className='tourDetail'>
                    <p className='tourName'>{data.tourName}</p>
                </div>
                <div className='background'/>
                <Link className='see-more-button' to={`/tour-detail/${data.id}`} >EXPLORE NOW<ArrowUpRightIcon size={16} /></Link>
            </div>
    )
}
