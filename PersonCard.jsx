import React, {Component} from 'react';

class Personcard extends Component {
    render(){
        return <div className="cardItem">
            <h1>{this.props.itemName}</h1>
            <p>Age: {this.props.age}</p>
            <p>Hair Color: {this.props.hair}</p>

        </div>
    }
}
export default Personcard;

