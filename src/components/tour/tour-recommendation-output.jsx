import './tour-recommendation.css';

export const TourRecommendationOutput = (props) => {
    const { id, tourName, img } = props.data;

    return (
        <div className='recommendation' key={id}>
            <img className='tourImg' src={img[0]} alt={tourName} />            
            <div className='tourDetail'>
                <p className='tourName'>{tourName}</p>
                <button className='see-more-button'>SEE MORE</button>
            </div>
        </div>
    )
}
