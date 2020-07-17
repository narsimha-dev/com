import React,{Component,Fragment} from 'react';
import './App.css';
import { MainContext } from './components/MainContext';
import {FirstFile} from './components/FirstFile';
import HOC from './components/HOC';
import StockList from './components/StockList';
import UserList from './components/UserList';

const StocksData = [ {id: 1, name: 'Samsung'}, {id: 2, name: 'HTC'}, {id: 3, name: 'Redmi'}];

const UsersData = [  {id: 1, name: 'Krunal'}, {id: 2, name: 'Ankit'}, {id: 3, name: 'Rushabh'}];

const Stocks = HOC(StockList,StocksData);
// console.log("object of Stocks:", Stocks);
const Users = HOC(UserList,UsersData);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message:"This is context app class..."
      }
  }
  render() { 
    return ( 
      <Fragment>
      <MainContext.Provider value={{message:this.state.message}}>
        <FirstFile/>
        </MainContext.Provider>
        <Users/>
        <p>=======================</p>
        <Stocks/>
        </Fragment>
      );
  }
}
 
export default App;
