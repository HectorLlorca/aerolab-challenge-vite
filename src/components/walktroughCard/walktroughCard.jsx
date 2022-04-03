import './walktroughCard.scss'

const WalktroughCard = ({ img, icon, text, classe }) => {
  console.log(classe)
  return (
    <div className={'walktroughCard ' + classe}>
      <div className="walktroughCardContent">
        <div className="walktroughCardImg">
          <img src={img} alt="walktroughCard" />
        </div>
        <div className="walktroughCardText">
          <div>
            <img src={icon} alt="iconCard" />
            <p className="l3Title">{text[0]}</p>
          </div>
          <div>
            <p className="l1TextDefault">{text[1]}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WalktroughCard
