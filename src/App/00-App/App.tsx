import { Outlet } from 'react-router-dom';
import './App.css';
import decotop from '../../assets/images/pattern-squiggly-line-top.svg';
import decolines from '../../assets/images/pattern-lines.svg';
import decobottom from '../../assets/images/pattern-squiggly-line-bottom-mobile-tablet.svg';
import logo from '../../assets/images/logo-full.svg';

const App = () => {
  return (
    <section className="App">
      <img className="deco-top" src={decotop} alt="decoration" />
      <div className="deco-lines">
        <img src={decolines} alt="decoration" />
      </div>
      <img className="deco-bottom" src={decobottom} alt="decoration" />
      <img className="mt-[2.1rem]" src={logo} alt="logo" />
      <Outlet />
    </section>
  );
};

export default App;
