const Header = () => {
  return (
    <header className="navbar navbar-expand-lg navbar-light bg-light">
      <a href="/" className="navbar-brand ms-4">AlloMovie</a>
      <button className="navbar-toggler me-2">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav ms-auto me-2">
          <li className="nav-item active">
            <a href="/" className="nav-link">Home</a>
          </li>
          <li className="nav-item">
            <a href="/" className="nav-link">Favorites</a>
          </li>
        </ul>
      </div>
    </header>
  )
}


export default Header
