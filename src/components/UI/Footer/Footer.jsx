import React from 'react';
import classes from './Footer.module.scss';
import githubIcon from '../../../assets/githubIcon.png';

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <a href='https://github.com/ww-side' target='_blank'><img src={githubIcon} alt="github"/></a>
    </footer>
  );
};

export default Footer;