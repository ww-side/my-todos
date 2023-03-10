import classes from './HeaderNav.module.scss';
import {Link} from 'react-router-dom';
import logo from '../../../assets/logo.png';
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai';
import {useState} from 'react';

const HeaderNav = () => {
  const [nav, setNav] = useState(false);

  const lockHtml = () => {
    document.querySelector('html').classList.toggle(classes.lock);
  }

  const openBurgerMenu = () => {
    setNav(!nav);
    lockHtml();
  }

  return (
    <header className={classes.header}>
      <div className={classes.container}>
        <div>
          <Link to='/home'><img className={classes.logoItem} src={logo} alt='logo'/></Link>
        </div>
        <ul className={nav ? [classes.menu, classes.active].join(' ') : [classes.menu]}>
          <li>
            <Link className={classes.links} to='/home' onClick={() => setNav(!nav)}>Home</Link>
          </li>
          <li>
            <Link className={classes.links} to='/todo' onClick={() => setNav(!nav)}>Todo</Link>
          </li>
        </ul>
        <div onClick={openBurgerMenu} className={classes.mobileBtn}>
          {nav ? <AiOutlineClose size={50}/> : <AiOutlineMenu size={50}/>}
        </div>
      </div>
    </header>
  );
};

export default HeaderNav;