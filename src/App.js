import React from 'react';
import './App.css';
import Buttons from './Buttons'

class App extends React.Component{
  constructor(props){
      super(props);
      this.state = {
          guncelRenk: {}
      }

      this.renkDegistirme = this.renkDegistirme.bind(this);
  }

  renkDegistirme(butonColor){
      this.setState({
          guncelRenk: butonColor
      })
  }

  render(){
    let mainClass = "main-container ";
    mainClass += this.state.guncelRenk.style;
   return <div className={mainClass}>
        <div className="main-container2">
            {this.state.guncelRenk.renk} 
        </div>
       {
           [0,1,2,3,4].map(() => {
               return <Buttons renkDegistirme={this.renkDegistirme} />
           })
       }
    </div>
}
  }

export default App;
