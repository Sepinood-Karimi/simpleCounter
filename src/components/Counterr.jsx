import React,{Component} from "react";

class Counter extends Component {

    handleValue (){
        const {value} = this.props.counter;
        return value===0 ? "Zero" : value
    }
    handleValueClass(){
        let classes = "badge m-2 text-dark bg-";
        const {value} = this.props.counter;
        return value===0 ? classes ="badge m-2 text-light bg-dark" : classes+="info";
    }
    render() {
        return(
            <>
                <div>
                    <span className={this.handleValueClass()}>{this.handleValue()}</span>
                    <button className="btn btn-secondary m-2" onClick={()=>this.props.onIncrement(this.props.counter)}> Increment </button>
                    <button className="btn btn-danger m-2" onClick={()=>this.props.onDelete(this.props.counter.id)}> Delete </button>
                </div>
            </>
        )
    }
}

export default Counter;