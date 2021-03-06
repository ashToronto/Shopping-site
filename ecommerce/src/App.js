import React, { Component } from 'react';
import Router from './Router'
import { NavLink } from 'react-router-dom'

const Navigation = () => <nav>
<ul>
<li><NavLink to='/'>Home</NavLink></li>
<li><NavLink to='/cart'>Cart</NavLink></li>
</ul>
</nav>

class App extends Component {
  render() {
    return <div className='page-container'>
      <h1>Shoes FC</h1>
      <Navigation />
    <Router />
    </div>
  }
}

export default App;
