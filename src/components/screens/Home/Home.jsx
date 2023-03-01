import React from 'react';
import classes from './Home.module.scss'
import titlePicture from '../../../assets/titlePicture.png'
import person from '../../../assets/personLarry.png';
import Footer from "../../UI/Footer/Footer";

const Home = () => {
  return (
    <div>
      <div className={classes.container}>
        <div className={classes.titleWrapper}>
          <div className={classes.title}>
            <h1>My ToDo’s</h1>
            <div className={classes.subtitle}>
              Write your tasks and <span>completed</span> them
            </div>
          </div>
          <img src={titlePicture} alt='todoList'/>
        </div>
        <div className={classes.startRightNow}>
          <h2>Start right now</h2>
        </div>
        <div className={classes.description}>
          <img src={person} alt='personLarry'/>
          <div className={classes.descriptionItem}>
            <p>Simple interface to use and plan your
              tasks</p>
            <p>“Never leave that till tomorrow which
              you can do today”</p>
            <span>–said Benjamin Franklin</span>
          </div>
        </div>
        <div className={classes.formBlock}>
          <h2>Do you want to leave a message?</h2>
          <div className={classes.form}>
            <div className={classes.formContainer}>
              <form action="">
                <div className={classes.fieldWithInput}>
                  <div className={classes.fieldWithInputItem}>
                    <label htmlFor='inputName'>Name</label>
                    <input id='inputName' type="text"/>
                  </div>
                  <div className={classes.fieldWithInputItem}>
                    <label htmlFor='inputEmail'>Email</label>
                    <input id='inputEmail' type="email"/>
                  </div>
                </div>
                <div className={classes.textareaMessage}>
                  <label htmlFor='textarea'>Message</label>
                  <textarea id='textarea' cols='30' rows='10'></textarea>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Home;