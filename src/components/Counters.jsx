import React,{Component} from "react";
import Counter from "./Counterr";

class Counters extends Component{
    state={
        counters :[
            {id:0,value:0},
            {id:1,value:10},
            {id:2,value:0},
            {id:3,value:8},
            {id:4,value:5},
        ]
    }
    handleDelete=(counterId)=>{
        let {counters} = this.state;
        counters = counters.filter((counter)=>counter.id!==counterId);
        this.setState({counters})
    }
    handleIncrement=(counter)=>{
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index].value++;
        this.setState({counters})
    }
    handleReset=()=>{
        const {counters} = this.state;
        counters.map((counter)=>
            counter.value = 0
        )
        this.setState({counters})
    }
    render() {
        return(
            <>
                <div>
                    <button className="btn btn-info m-2" onClick={this.handleReset}> Reset </button>
                </div>
                <div>
                    {this.state.counters.map((counter)=>
                        <Counter key={counter.id} counter={counter} onDelete={this.handleDelete} onIncrement={this.handleIncrement} ></Counter>
                    )}
                </div>
            </>
        )
    }
}

export default Counters