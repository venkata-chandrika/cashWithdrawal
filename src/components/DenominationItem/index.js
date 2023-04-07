// Write your code here
import './index.css'

const DenominationItem = props => {
  const {denomination, update} = props
  const onDenomination = () => {
    update(denomination.value)
  }

  return (
    <li>
      <button className="button" type="button" onClick={onDenomination}>
        {denomination.value}
      </button>
    </li>
  )
}
export default DenominationItem
