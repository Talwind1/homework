import './App.css';
import React from 'react'

import './App.css'


class App extends React.Component {
    
  constructor(props){
    super(props)
    this.state ={status: ''}
  }
  
  componentDidMount(){
    setTimeout(()=>{
      this.setState({status:'showBox'})

    },2000)
  }
  componentDidUpdate(){
    setTimeout(()=>{
      this.setState({status:''})

    },4000)
  }
  
  render (){
    return(
      <div className="boxContainer">
        <div className={this.state.status} style={{width:'300px' ,height:'300px'}}></div>
        <div className={this.state.status} style={{width:'200px' ,height:'200px'}}></div>
        <div className={this.state.status} style={{width:'150px' ,height:'150px'}}></div>

  </div>
  )
  }      
  
}

export default App;
