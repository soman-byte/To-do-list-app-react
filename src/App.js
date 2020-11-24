import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      getArr:[],
      currentItem:{
        userInput:'',
        key:''
      }
       }
    }
    
    change(e){
      this.setState({
        currentItem:{
          userInput:e.target.value,
          key: Date.now()
      }
    })
  }

    get(){
      if(this.state.currentItem.userInput!==''){
        let arr = this.state.getArr;
        let items = this.state.currentItem
        arr.push(items)
        this.setState({getArr:arr,currentItem:{userInput:'',key:''}})
      }
    }

    del(key){
      const fil = this.state.getArr.filter(val=>val.key!==key)
      this.setState({
        getArr: fil
      })
    }

    Update(e,key){
      const val = e.target.value;
      const items = this.state.getArr;
      items.map(item=>{
        if(item.key === key){
          item.userInput=val
        }
      this.setState({getArr:items})
      })
    }

 
  render(){
  return (
    <div className='App'>
      <h1 style={
        {color: 'white', textAlign:'center',padding:'10px',backgroundColor:"darkorange"}}>
          Task Writer
      </h1>
      <div className='head'>
        <input type='text' placeholder="Enter your task"
          value={this.state.currentItem.userInput} onChange={e=>this.change(e)} />
        <button onClick={()=>this.get()}>Add task</button>
      </div>
      <div className='list'>
        <ul>
          {this.state.getArr.map((item)=>
          <li><input type='text' value={item.userInput}
          onChange={e=>this.Update(e,item.key)} />
          <button onClick={()=>this.del(item.key)} >Delete</button></li>)}
        </ul>
      </div>
    </div>
  );
}
}

export default App;
