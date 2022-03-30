import arrowDown from '../../assets/icons/Icons.svg'

import './landingBtn.scss'

const LandingBtn = () => {
    return (
        <button className='landingBtn l2TextDefault'>VIEW ALL PRODUCTS
            <img src={arrowDown} alt="arrow" /></button>
    );
}

export default LandingBtn;