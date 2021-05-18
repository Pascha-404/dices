import React, { Component } from 'react'
import Die from './Die'
import './RollDice.css'

class RollDice extends Component{
    constructor(props){
        super(props);
        this.state = {dice1: "one", dice2: "one"}
        this.roll = this.roll.bind(this)
    }
    static defaultProps = {1: "one", 2: "two", 3: "three", 4: "four", 5: "five",6: "six"}

    rndNum(e){
        const number = Math.floor(Math.random() * 6) + 1
        return number
    }

    roll(e){
            const die1 = this.props.rndNum();
            const die2 = this.props.rndNum();
            this.setState({dice1: die1, dice2: die2});
        }

    render(){
        return(
            <div className="RollDice">
                <h1>Random Dices</h1>
                <div className="RollDice-dices">
                    <Die eye="one" />
                    <Die eye="one" />
                </div>
                <button className="RollDice-btn" onClick={this.roll}>
                    Roll Dice!
                </button>
            </div>
        )
    }
}

export default RollDice;