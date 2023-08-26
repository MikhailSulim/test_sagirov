import './Header.css';
import { NavLink } from 'react-router-dom';
function Header() {
  return (
    <header className="header">
      <div className="header__content">
        {/* <div className="header__logo"/> */}
        <div className='header__corners'>
          <div className='header__logo'/>
        </div>
          
        <nav className="header__nav">
          <NavLink className="header__nav-item" to="/">
            Главная
          </NavLink>
          <NavLink className="header__nav-item" to="/">
            Технология
          </NavLink>
          <NavLink className="header__nav-item" to="/">
            График полётов
          </NavLink>
          <NavLink className="header__nav-item" to="/">
            Гарантии
          </NavLink>
          <NavLink className="header__nav-item" to="/">
            О компании
          </NavLink>
          <NavLink className="header__nav-item" to="/">
            Контакты
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Header;
