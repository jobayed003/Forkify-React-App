import Logo from '../img/logo.png';
import LeftArrow from './icons/LeftArrow';
import RightArrow from './icons/RightArrow';

const SearchResults: React.FC = () => {
  return (
    <div className="search-results">
      <ul className="results">
        <li className="preview">
          <a className="preview__link preview__link--active" href="#23456">
            <figure className="preview__fig">
              <img src={Logo} alt="Test" />
            </figure>
            <div className="preview__data">
              <h4 className="preview__title">Pasta with Tomato Cream ...</h4>
              <p className="preview__publisher">The Pioneer Woman</p>
              <div className="preview__user-generated">
                <svg>
                  <use href="src/img/icons.svg#icon-user"></use>
                </svg>
              </div>
            </div>
          </a>
        </li>
      </ul>

      <div className="pagination">
        <button className="btn--inline pagination__btn--prev">
          <LeftArrow />
          <span>Page 1</span>
        </button>
        <button className="btn--inline pagination__btn--next">
          <span>Page 3</span>
          <RightArrow />
        </button>
      </div>

      <p className="copyright">
        &copy; Copyright by{' '}
        <a
          rel="noreferrer"
          className="twitter-link"
          target="_blank"
          href="https://twitter.com/jobayed003"
        >
          Jobayed Hossain
        </a>
      </p>
    </div>
  );
};

export default SearchResults;
