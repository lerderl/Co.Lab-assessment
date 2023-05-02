import { Link } from 'react-router-dom';

import './App.css';
import Joseph from './images/joseph.jpg';

function App() {
  return (
    <>
      {/* The navbar */}
      <nav className='navbar sticky-top navbar-expand-lg navbar_background'>
        <section className='container-fluid content_margin'>
          <Link className='navbar-brand' to='/'>
            <img src={Joseph} alt='My profile thumbnail' width='60' height='48' />
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <section class="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link class="nav-link color_text" to='/'>About</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link color_text" to='/'>Projects</Link>
              </li>
            </ul>
          </section>
        </section>
      </nav>
    </>
  );
}

export default App;
