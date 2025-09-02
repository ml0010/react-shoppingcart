import './services.css'
import { BusIcon, CameraIcon, CheersIcon, CoffeeIcon, DropIcon, FirstAidKitIcon, ForkKnifeIcon, TowelIcon, UsersThreeIcon } from '@phosphor-icons/react'

export const Services = () => {
    return (
    <div className='service'>                    
        <div className='service-list'>
            <span className='service-item'>
                <CheersIcon size={28} />
                <p>Welcome drink</p>
            </span>
            <span className='service-item'>
                <DropIcon size={28} />
                <p>Drinking water</p>
            </span>
            <span className='service-item'>
                <CoffeeIcon size={28} />
                <p>Coffee</p>
            </span>
            <span className='service-item'>
                <TowelIcon size={28} />
                <p>Towel</p>
            </span>
            <span className='service-item'>
                <BusIcon size={28} />
                <p>Shuttle service</p>
            </span>
            <span className='service-item'>
                <ForkKnifeIcon size={28} />
                <p>Light snacks</p>
            </span>
            <span className='service-item'>
                <FirstAidKitIcon size={28} />
                <p>First aid kit</p>
            </span>
            <span className='service-item'>
                <UsersThreeIcon size={28} />
                <p>Authentic, knowledged and friendly service</p>
            </span>
            <span className='service-item'>
                <CameraIcon size={28} />
                <p>Photo</p>
            </span>
        </div>
        <hr className='separator'/>
        <h3>- Availability may change. If there is any change we will inform you minimum 24 hours before your journey begins.</h3>
        <h3>- Shuttle service is only available within the distance of 5km of our office (Palma de Mallorca).</h3>
        <h3>- Snacks are provided your tour's duration is more than 3 hours.</h3>
    </div>
    )
}
