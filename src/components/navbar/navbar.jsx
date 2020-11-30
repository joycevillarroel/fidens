import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import BtNavbar from 'react-bootstrap/Navbar';
import { HashLink } from 'react-router-hash-link';
import './navbar.scss';
import logo from '../../images/logo.jpg';


class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      onTop: window.scrollY < 50,
      isMenuOpen: false,
    };
    this.onScroll = this.onScroll.bind(this);
    this.onToggle = this.onToggle.bind(this);
    this.logoutUser = this.logoutUser.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.onScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll);
  }

  onScroll() {
    this.setState({
      onTop: window.scrollY < 50,
    });
  }

  logoutUser() {
    this.props
      .logout();
  }

  onToggle(expanded) {
    this.setState({
      isMenuOpen: expanded,
    });
  }

  render() {
    const { isMenuOpen } = this.state;

    return (
      <div className={`Navbar home ${isMenuOpen ? 'menu-open' : ''}`}>
        <BtNavbar onToggle={this.onToggle} fixed="top" expand="lg" className="d-flex flex-row p-3 px-lg-4 mb-3 border-bottom shadow-sm">
          <NavLink className="d-flex align-items-center" to="/">
            <img src={logo} alt="Cat and Dog logo" className="logo mr-3" />
            <h5 className="my-0 mr-lg-auto font-weight-normal">COLÉGIO FIDENS</h5>
          </NavLink>

          <BtNavbar.Toggle aria-controls="basic-navbar-nav" />
          <BtNavbar.Collapse onAuxClick={this.menuClick} className="d-lg-flex flex-row justify-content-end" id="basic-navbar-nav">
            <nav className="d-flex flex-column flex-lg-row align-content-center my-2 my-lg-0 mr-lg-3" id="menu">
                <>
                <NavLink to="/#intro" className="p-2 text-dark"style={{ textDecoration: "none" }}>
                    HOME
                  </NavLink>
                  <NavLink to="/#intro" className="p-2 text-dark"style={{ textDecoration: "none" }}>
                  SOBRE
                </NavLink>
                  <NavLink to="/#intro" className="p-2 text-dark"style={{ textDecoration: "none" }}>
                    SEGMENTOS
                  </NavLink>
                  <HashLink to="/#about" className="p-2 text-dark" style={{ textDecoration: "none" }}>
                    BILÍNGUE
                  </HashLink>
                  <HashLink to="/#howItWorks" className="p-2 text-dark" style={{ textDecoration: "none" }}>
                    MATRÍCULAS
                  </HashLink>
                  <HashLink to="/#instructions" className="p-2 text-dark" style={{ textDecoration: "none" }}>
                    DEPOIMENTOS
                  </HashLink>
                  <HashLink to="/#depositions" className="p-2 text-dark" style={{ textDecoration: "none" }}>
                    CONTATO
                  </HashLink>
                </>
            </nav>
          </BtNavbar.Collapse>
        </BtNavbar>
      </div>
    );
  }
}

export default Navbar;