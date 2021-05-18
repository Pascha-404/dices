import React, {
    Component
} from 'react'
import './Die.css'

class Die extends Component {
    render(){
        const eye = "fas fa-dice-" + this.props.eye
        return(
            <div className="Die">
                <i className={eye}></i>
            </div>
        )
    }
}

export default Die;