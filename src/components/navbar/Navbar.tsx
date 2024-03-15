import "./navbar.scss"

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <span>ERP System</span>
      </div>
      <div className="icons">
        <div className="icon">
          <img src="/search.svg" alt="search" />
          <img src="/app.svg" alt="app" />
        </div>
        <div className="notification">
          <img src="/notifications.svg" />
          <span>1</span>
        </div>
        <div className="userData">
          <img src="https://randomuser.me/api/portraits/men/15.jpg" alt="" />
          <span>Rohit Panchal</span>
        </div>
      </div>
    </div>
  )
}

export default Navbar