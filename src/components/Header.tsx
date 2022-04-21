import Logo from '../img/logo.png';
import Bookmark from './icons/Bookmark';
import Edit from './icons/Edit';
import SearchIcon from './icons/SearchIcon';

const Header: React.FC = () => {
  return (
    <header className="header">
      <img src={Logo} alt="Logo" className="header__logo" />
      <form className="search">
        <input
          type="text"
          className="search__field"
          placeholder="Search over 1,000,000 recipes..."
        />
        <button className="btn search__btn">
          <SearchIcon />
          <span>Search</span>
        </button>
      </form>

      <nav className="nav">
        <ul className="nav__list">
          <li className="nav__item">
            <button className="nav__btn nav__btn--add-recipe">
              <Edit />
              <span>Add recipe</span>
            </button>
          </li>
          <li className="nav__item">
            <button className="nav__btn nav__btn--bookmarks">
              <Bookmark />
              <span>Bookmarks</span>
            </button>
            <div className="bookmarks">
              <ul className="bookmarks__list">
                <div className="message">
                  <div>
                    <svg>
                      <use href="src/img/icons.svg#icon-smile"></use>
                    </svg>
                  </div>
                  <p>No bookmarks yet. Find a nice recipe and bookmark it :)</p>
                </div>

                {/* <li className="preview">
              <a className="preview__link" href="#23456">
                <figure className="preview__fig">
                  <img src="src/img/test-1.jpg" alt="Test" />
                </figure>
                <div className="preview__data">
                  <h4 className="preview__name">
                    Pasta with Tomato Cream ...
                  </h4>
                  <p className="preview__publisher">The Pioneer Woman</p>
                </div>
              </a>
            </li> */}
              </ul>
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
