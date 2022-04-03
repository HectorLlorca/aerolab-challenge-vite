import arrowDown from '../../assets/icons/Icons.svg'

import './landingBtn.scss'

const LandingBtn = () => {
  return (
    <a href='#techProducts' className="landingBtn l2TextDefault">
      VIEW ALL PRODUCTS
      <img src={arrowDown} alt="arrow" />
    </a>
  )
}

export default LandingBtn
