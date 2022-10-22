import "./header.css";
import logoImg from "../../images/Logo/logo.svg";

function headerNav() {
  return (
    <header className="header">
      <div className="container header__container">
        <div className="header__logo">
          <img src={logoImg} alt="Header logo" className="header__logo--img" />
        </div>
        <nav className="navbar">
          <ul className="navbar__list">
            <li className="header__item">
              <a href="#" className="header__item--linc">
                HOME
              </a>
            </li>

            <li className="header__item">
              <a href="#" className="header__item--linc">
                ABOUT US
              </a>
            </li>
            <li className="header__item">
              <a href="#" className="header__item--linc">
                Create your plan
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default headerNav;
