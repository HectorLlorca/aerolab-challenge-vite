import WalktroughCard from '../walktroughCard/walktroughCard'

import misile from '../../assets/illustrations/walkthroug-1-desktop.png'
import hands from '../../assets/illustrations/walkthroug-2-desktop.png'
import dev from '../../assets/illustrations/walkthroug-3-desktop.png'

import browse from '../../assets/icons/walkthrough-1.svg'
import choose from '../../assets/icons/walkthrough-2.svg'
import enjoy from '../../assets/icons/walkthrough-3.svg'

import './walkthroughSection.scss'

const TEXT1 = [
  '1—browse',
  'Browse our tech catalog with more than 20 top tech products'
]
const TEXT2 = [
  '2—choose',
  'Exchange your hard earned AeroPoints for the item you want'
]
const TEXT3 = [
  '3—enjoy!',
  'All done, you can relax! We’ll take care of delivery of your tech item!'
]

const WalkthroughSection = () => {
  return (
    <div className="walkthroughSection">
      <WalktroughCard classe="card1" img={misile} icon={browse} text={TEXT1} />
      <WalktroughCard classe="card2" img={hands} icon={choose} text={TEXT2} />
      <WalktroughCard classe="card3" img={dev} icon={enjoy} text={TEXT3} />
    </div>
  )
}

export default WalkthroughSection
