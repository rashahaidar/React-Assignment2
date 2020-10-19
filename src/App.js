import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import ValidationComponent from './ValidationComponent/ValidationComponent';
import CharComponent from './CharComponent/CharComponent';


class App extends Component {

 state={
   inputLength:0,
   inputStringArr:[],
   inputString:[]
 }

  inputChangeHandler=(event)=>{
    const inputString=(event.target.value).split('')
    //console.log(event.target.value.length)
    
    let filledArr=new Array(event.target.value.length)
    for(let i=0;i<event.target.value.length;i++){
      //console.log(i)
      filledArr[i]={id:i+1,char:inputString[i]}
      //console.log(filledArr[i])
    }
    
    // const len={...this.state}
    // len.inputLength=inputString.length
    this.setState({inputLength:inputString.length,inputStringArr:filledArr,inputString:inputString})
  }
   deleteCharHandler=(charID)=>{
     const arrCopy=[...this.state.inputStringArr]
     arrCopy.splice(charID,1)
     //const arrCopy=this.state.inputStringArr.filter(e=>e.id!==charID)
     const inputString=[...this.state.inputString]
     console.log(charID)
     inputString.splice(charID,1)
    //const strJoin=inputString.join('')
    // console.log(strJoin)
   this.setState({inputLength:arrCopy.length,inputStringArr:arrCopy,inputString:inputString})
  
   

   }
 
  render (){
  
    let inputLeng=this.state.inputLength>0 ? <p>{this.state.inputLength}</p> : null
    let charComp=null;
    if(this.state.inputLength>0){
      //console.log(this.state.inputStringArr)
      charComp=(
        <div>
          {this.state.inputStringArr.map((e,index)=>
            <CharComponent char={e.char} key={e.id} click={()=>this.deleteCharHandler(index)} ></CharComponent>
          )}
        </div>
      )
    }
  return (
    <div className="App">
      
     <input type="text" onChange={this.inputChangeHandler} value={this.state.inputString.join('')} ></input>
     <ValidationComponent length={this.state.inputLength}></ValidationComponent>
     {/* { <div>
     {this.state.inputLength >0 ? this.state.inputStringArr.map(e=>
       <CharComponent char={e} click={this.deleteCharHandler}></CharComponent>
     ) : null }
     </div> } */}
     {inputLeng}
     {charComp}
     
    
     
    </div>
  );
}
}

export default App;
