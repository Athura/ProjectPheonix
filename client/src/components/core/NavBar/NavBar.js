import React, { Component } from 'react';
import { StyledNavBar, NavSeperator, NavLink, StyledImages, StyledToggle } from '../../../styles/_navbar';

class NavBar extends Component {
  render() {
    return (
      <div>
        <StyledNavBar>
          <NavSeperator left>
            <StyledImages src={`/assets/logo.svg`} />
            <StyledToggle>
              <i className="fas fa-bars"></i>
            </StyledToggle>
            <NavLink>
              Link
            </NavLink>
            <NavLink>
              Link
            </NavLink>
            <NavLink>
              Link
            </NavLink>
          </NavSeperator>
          
          <NavSeperator right>
            <NavLink>
              Link
            </NavLink>
            <NavLink>
              Link
            </NavLink>
          </NavSeperator>
        </StyledNavBar>
      </div>
    )
  }
}

export default NavBar;