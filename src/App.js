import React,{Component} from "react";
import './App.css';
import Counters from "./components/Counters";
import NavBar from "./components/NavBar";
class App extends Component{
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
        <NavBar totalCounters={this.state.counters.filter(counter=>counter.value>0).length}> </NavBar>
        <main className="container"> <Counters
            counters={this.state.counters}
            onDelete={this.handleDelete}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
        > </Counters> </main>
      </>
    );
  }
}

export default App;
