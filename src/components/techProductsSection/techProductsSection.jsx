import FilterSort from './filter&sort/filter&sort'
import './techProductsSection.scss'

const TechProductsSection = () => {
  return <div className="techProductsSection container" id='techProducts'>
      <div className="techProductsSectionTitle">
        <p className='l2Title'>Tech</p>
        <p className='l2Title'>Products</p>
      </div>
      <FilterSort/>
  </div>
}

export default TechProductsSection
