import React from 'react';

class IconLink extends React.Component {
  constructor() {
      super();
      this.state = {
          isVisible: false
      };
  }

  toggleVisibility = () => {
      this.setState(prevstate => ({ isVisible: !prevstate.isVisible}));
  }

  render() {
      if(this.props.type === "nav"){
        return (
          <div className="nav-link-wrap" onMouseEnter={() => {this.toggleVisibility()}} onMouseLeave={() => {this.toggleVisibility()}}>    
            <i className={this.state.isVisible ? "hidden" : this.props.classes }></i>
            <a className={this.state.isVisible ? "nav-link" : "hidden"} href={this.props.link}>{this.props.name}</a>
          </div>
        )
      }
      return (
        <div>
          <i href={this.props.link} className={this.props.classes}></i>
        </div>
      )
  }
}

function Navbar() {
  return (
    <nav className="navbar">
        <div className="top-line-right">
        <div className="filler"></div>
        <div className="line"></div>
        <div className="filler"></div>
      </div>
      <div className="navbar-wrap">
      <IconLink 
        type="nav"
        name="Home"
        link="#Home"
        classes="nav-icon fa-solid fa-house"
      />
      <IconLink 
        type="nav"
        name="About"
        ink="#AboutMe"
        classes="nav-icon fa-solid fa-user"
      />
      <IconLink 
        type="nav"
        name="Experience"
        link="#Experience"
        classes="nav-icon fa-solid fa-briefcase"
      />
      <IconLink
        type="nav"
        name="Projects"
        link="#Projects"
        classes="nav-icon fa-solid fa-laptop-code"
      />
      </div>
      <div className="bottom-line-right">
        <div className="filler"></div>
        <div className="line"></div>
        <div className="filler"></div>
      </div>
    </nav>
  )
};

function SocialBar() {
  return (
    <aside className="social-bar">
      <div className="top-line-left">
        <div className="filler"></div>
        <div className="line"></div>
        <div className="filler"></div>
      </div>
      <IconLink 
        type="social"
        name="LinkedIn"
        link="#"
        classes="fa-brands fa-linkedin-in"
      />
      <IconLink 
        type="social"
        name="Github"
        ink="#"
        classes="fa-brands fa-github"
      />
      <IconLink
        type="social"
        name="CodePen"
        link="#"
        classes="fa-brands fa-codepen"
      />
      <div className="bottom-line-left">
        <div className="filler"></div>
        <div className="line"></div>
        <div className="filler"></div>
      </div>
    </aside>
  )
};

function Menus() {
  return (
    <div>
      <Navbar />
      <SocialBar />
    </div>
  )
};

export default Menus;