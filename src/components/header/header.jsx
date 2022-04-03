import logo from '../../assets/icons/aerolab-logo-1.svg'
import AeropayDropdown from '../aeropayDropdown/aeropayDropdown'

import './header.scss'

const Header = () => {
  return (
    <div className="header container">
      <div className="logoBalance">
        <img src={logo} alt="logo" />
        <AeropayDropdown />
      </div>
    </div>
  )
}

export default Header
