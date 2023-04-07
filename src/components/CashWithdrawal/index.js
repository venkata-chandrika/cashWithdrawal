// Write your code here
import {Component} from 'react'

import DenominationItem from '../DenominationItem'

import './index.css'

class CashWithdrawal extends Component {
  state = {rupees: 2000}

  onUpdate = value => {
    this.setState(prev => ({rupees: prev.rupees - value}))
  }

  render() {
    const {rupees} = this.state

    const {denominationsList} = this.props
    return (
      <div className="container">
        <div className="card-container">
          <div className="top">
            <button className="logo" type="button">
              S
            </button>
            <p className="heading">Sarah Williams</p>
          </div>

          <div className="middle">
            <p className="balance">Your Balance</p>
            <div>
              <p className="count">{rupees}</p>
              <span className="rupee">In Rupees</span>
            </div>
          </div>
          <p className="withdraw">Withdraw</p>
          <p className="sub">CHOOSE SUM (IN RUPEES)</p>
          <ul className="list-container">
            {denominationsList.map(each => (
              <DenominationItem
                key={each.id}
                denomination={each}
                update={this.onUpdate}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
