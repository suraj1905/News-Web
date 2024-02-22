import './App.css';

import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import { Route,Routes, BrowserRouter as Router} from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';

export default class App extends Component {
  constructor(){
    super();
    this.state ={
        mode: 'light',
        category: '',
        progress:0
    }
  }

  componentDidMount(){
    this.setState({
      mode:'light',
      category: ''
    })
  }
  
  toggleMode = () =>{
    if(this.state.mode === 'light'){
      this.setState({
        mode: 'dark'
      })
      document.body.style.backgroundColor ='#1E1F20';
    } 
    else{
      this.setState({
        mode: 'light'
      })
      document.body.style.backgroundColor ='white';
    }
  }

  setProgress = (progress) =>{
    this.setState({
      progress:progress
    })
  }

  render() {
    return (
      <Router>
        <>
        <Navbar mode={this.state.mode} toggleMode={this.toggleMode}/>
        <LoadingBar
        color='#f11946'
        progress={this.state.progress}
        />
        <Routes>
          <Route exact path="/" element={
          <News setProgress={this.setProgress}  key="business" mode={this.state.mode} category=''/>}/>
          <Route exact path="/business" element={
          <News setProgress={this.setProgress}  mode={this.state.mode} category="business"/>}/>
          <Route exact path="/entertainment" element={
          <News setProgress={this.setProgress}  key="entertainment" mode={this.state.mode} category="entertainment"/>}/>
          <Route exact path="/technology" element={
          <News setProgress={this.setProgress}  key="technology" mode={this.state.mode} category="technology"/>}/>
          <Route exact path="/health" element={
          <News setProgress={this.setProgress}  key="health" mode={this.state.mode} category="health"/>}/>
          <Route exact path="/sports" element={
          <News setProgress={this.setProgress}  key="sports" mode={this.state.mode} category="sports"/>}/>
        </Routes>
        </>
      </Router>
    )
  }
}

