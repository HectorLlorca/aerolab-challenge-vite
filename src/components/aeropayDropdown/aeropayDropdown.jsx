import aeropay from '../../assets/icons/aeropay-1.svg'
import chevron from '../../assets/icons/chevron-default.svg'

import  './aeropayDropdown.scss'

const AeropayDropdown = () => {
    return ( 
        <div className='aeropayDropdown'>
            <img className='aeropayIcon' src={aeropay} alt='aeropayicon' width='32px' height='32px'/>
            <p className='l1TextDefault'>1000</p>
            <img className='aeropayChevron' src={chevron} alt='chevron'/>
        </div>
     );
}
 
export default AeropayDropdown;