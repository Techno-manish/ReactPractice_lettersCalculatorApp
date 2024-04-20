// Write your code here.
import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {inputElement: ''}

  changeInput = event => {
    this.setState({inputElement: event.target.value})
  }

  render() {
    const {inputElement} = this.state

    const count = inputElement.length

    return (
      <div className="bgContainer">
        <div className="innerContainer">
          <h1 className="mainHeading">
            Calculate the
            <br />
            Letters you
            <br />
            enter
          </h1>
          <label htmlFor="input" className="para">
            Enter the phrase
          </label>
          <input
            id="input"
            className="input"
            type="text"
            onChange={this.changeInput}
            placeholder="Enter the phrase"
          />
          <p className="button">No.of letters: {count}</p>
        </div>
        <img
          className="image"
          src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
          alt="letters calculator"
        />
      </div>
    )
  }
}
export default LettersCalculator
