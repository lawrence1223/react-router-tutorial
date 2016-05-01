import React from 'react'
import { IndexLink, Link } from 'react-router'
import NavLink from './NavLink'

export default React.createClass({
  render() {
    return (
      <div>
        <h1>Ghettohub Issues</h1>
        <ul role='nav'>
        {/*<li><NavLink to='/' onlyActiveOnIndex={true}>Home</NavLink></li>*/}
        <li><IndexLink to='/' activeStyle={{color: 'red'}}>Home</IndexLink></li>
          <li><NavLink to='/about'>About</NavLink></li>
          <li><NavLink to='/repos'>Repos</NavLink></li>
        </ul>

        {this.props.children}
        </div>
    );
  }
})
