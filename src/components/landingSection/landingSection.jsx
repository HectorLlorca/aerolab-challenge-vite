import LandingBtn from '../landingBtn/landingBtn'

import hero from '../../assets/illustrations/hero-desktop.png'

import './landingSection.scss'

const LandingSection = () => {
  return (
    <div className="landingSection">
      <div className="techZone">
        <div className="techZoneTitle">
          <p className="l1TextCaps">Explore the</p>
          <div>
            <p className="l1Title">Tech</p>
            <p className="l1Title">zone</p>
          </div>
          <p className="l1TextDefault">
            Here you’ll be able to exchange all of your hard-earned Aeropoints
            and exchange them for cool tech.
          </p>
          <LandingBtn />
        </div>

        <div className="techZoneImg">
          <img src={hero} alt="hero" />
        </div>
      </div>
    </div>
  )
}

export default LandingSection
