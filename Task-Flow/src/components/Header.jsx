function Header() {
  return (
    <header className="header">
      <div className="container">
        <h1>TaskFlow</h1>

        <nav>
          <a href="#tasks">Tasks</a>
          <a href="#stats">Stats</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;