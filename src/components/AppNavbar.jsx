import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import tranquilmindss from '../assets/tranquilmindss.jpg';
import '../App.css'
// import female from '../assets/female.png'

const AppNavbar = () => {

  const [isOpen, setIsOpen] = useState(false);
  const [dropdown1Open, setDropdown1Open] = useState(false);
  const [dropdown2Open, setDropdown2Open] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown1 = () => {
    setDropdown1Open(!dropdown1Open);
  };

  const toggleDropdown2 = () => {
    setDropdown2Open(!dropdown2Open);
  };

  return (
    <div className='smallNav'>
    <Navbar className="" expand="md">
      <NavbarBrand href="/"><img src={tranquilmindss} class="h-0 mr-3 outline" alt="Tranquil Logo"/></NavbarBrand>
      <NavbarToggler onClick={toggleNavbar} className='toggle' />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="ml-auto smallNav" navbar>
          {/* <NavItem>
            <NavLink href="/"><img src={tranquilmindss} class="h-10 mr-3" alt="Tranquil Logo"/></NavLink>
          </NavItem> */}
          <NavItem>
            <NavLink href="/About" className='navlink'>About</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/Faq" className='navlink'>Faq</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/Reviews" className='navlink'>Reviews</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/ContactUs" className='navlink'>ContactUs</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/LogIn" className='navlink'>LogIn</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/GetStarted" className='navlink'>Getstarted</NavLink>
          </NavItem>
          {/* <Dropdown nav isOpen={dropdown1Open} toggle={toggleDropdown1}>
            <DropdownToggle nav caret>
            Help
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem>Option 1</DropdownItem>
              <DropdownItem>Option 2</DropdownItem>
              <DropdownItem>Option 3</DropdownItem>
            </DropdownMenu>
          </Dropdown>
          <Dropdown  nav isOpen={dropdown2Open} toggle={toggleDropdown2}>
            <DropdownToggle nav >
            <img src={female} className="w-8 h-8 rounded-full" alt="female" />
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem>Option A</DropdownItem>
              <DropdownItem>Option B</DropdownItem>
              <DropdownItem>Option C</DropdownItem>
            </DropdownMenu>
          </Dropdown> */}
        </Nav>
      </Collapse>
    </Navbar>
    </div>
  );
};

export default AppNavbar;
