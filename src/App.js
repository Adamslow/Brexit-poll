import React, {Component} from 'react';
import Button from './components/Buttons';
import Navbar from './components/Navbar';


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      voteDeal: null,

    }
this.addVoteDeal = () => this.setState({voteDeal: this.state.voteDeal  + 1})
  }

  render() {
    return(
      <div>
      <Navbar />
      <Button addVoteDeal = {this.addVoteDeal} voteDeal = {this.state.voteDeal}/>

      </div>
    )
  }
}


export default App
