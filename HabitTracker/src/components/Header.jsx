function Header() {
  return (
    <header className="header">
      <div className="container header-inner">
        <a href="#" className="logo">
          <span className="logo-mark">H</span>
          <span>HabitTrack</span>
        </a>

        <nav className="nav">
          <a href="#habits">Habits</a>
          <a href="#stats">Stats</a>
        </nav>

        <button className="header-button">
          Get Started
        </button>
      </div>
    </header>
  );
}

export default Header;