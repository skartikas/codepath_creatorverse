const Header = () => {
  return (
    <div className="hero" data-theme="dark">
      <header className="container center-div">
        <hgroup className="center-div">
          <h1 className="main-heading">Creators</h1>
          <h2>Check out these creators!</h2>
        </hgroup>
        <p>
          <a href="/" role="button" onClick="event.preventDefault()">
            Show All Creators
          </a>
          <a
            href="/creators/add"
            role="button"
            onClick="event.preventDefault()"
          >
            Add A Creator
          </a>
        </p>
      </header>
    </div>
  );
};

export default Header;
