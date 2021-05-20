import React, { Component } from 'react'
import Die from './Die'
import './RollDice.css'

class RollDice extends Component{
    constructor(props){
        super(props);
        this.state = {dice1: "one", dice2: "one", btnTxt: "Roll Dice!", isRolling: false}
        this.roll = this.roll.bind(this)
    };
    static defaultProps = {eyes: ["one", "two", "three", "four", "five", "six"]};

    roll(e){
        this.setState({btnTxt: "Rolling...", isRolling: true})
            const num1 = Math.floor(Math.random() * 6);
            const num2 = Math.floor(Math.random() * 6);
            const die1 = this.props.eyes[num1];
            const die2 = this.props.eyes[num2];
            setTimeout(() => {
                this.setState({btnTxt: "Roll Dice!", isRolling: false})
                this.setState({dice1: die1, dice2: die2});
            }, 600); 
        };

    render(){
        return(
            <div className="RollDice">
                <h1>Random Dices</h1>
                <div className={"RollDice-dices " + (this.state.isRolling ? "active" : null)}>
                    <Die eye={this.state.dice1} />
                    <Die eye={this.state.dice2} />
                </div>
                <button className="RollDice-btn" 
                        onClick={this.roll} 
                        disabled={this.state.isRolling
                        ? true
                        : false}>
                    {this.state.btnTxt}
                </button>
            </div>
        )
    }
}

export default RollDice;