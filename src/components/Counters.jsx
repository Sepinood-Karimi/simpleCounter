import React,{Component} from "react";
import Counter from "./Counterr";

class Counters extends Component{
    render() {
        const {counters,onDelete,onReset,onIncrement}=this.props;
        return(
            <>
                <div>
                    <button className="btn btn-info m-2" onClick={onReset}> Reset </button>
                </div>
                <div>
                    {counters.map((counter)=>
                        <Counter
                            key={counter.id}
                            counter={counter}
                            onDelete={onDelete}
                            onIncrement={onIncrement}>
                        </Counter>
                    )}
                </div>
            </>
        )
    }
}

export default Counters