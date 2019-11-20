import React from 'react';
import classes from '../../style/scss/Login.module.scss';
import Button from './Button';
import Input from './Input';

const login = (props) => {
  let error, errorCss, loader;
  const showHideClassName = props.show ? classes.displayBlock : classes.displayNone;
  const button = props.username ? 'secondary' : 'disabled';
  if (props.error !== 'none') {
    error = 'primaryError';
    errorCss = classes.loginBoxError;
  } else {
    error = 'primary';
    errorCss = classes.loginBoxErrorHide;
  }
  if (props.isSigningIn) loader = <div className={classes.loader}></div>;
  return (
    <div>
      <div onClick={props.closeLogin} className={showHideClassName}></div>
      <section className={classes.modalMain}>
        <div className={classes.loginBoxTitle}>LOGIN / SIGN UP</div>
        <div className={errorCss}>{props.error}</div>
        <div className={classes.loginBox}>
          <div className={classes.loginBoxUsernameText}>Username</div>
          <div className={classes.inputWidth}>
            <Input
              required={true}
              skin={error}
              onChange={props.handleChangeLogin}
              type='text'
              placeholder='hodlsohard'
              name='username'
            />
          </div>
        </div>
        <div className={classes.loginBox}>
          <div className={classes.loginBoxPasswordText}>Password</div>
          <div className={classes.inputWidth}>
            <Input
              required={true}
              skin={error}
              onChange={props.handleChangeLogin}
              type='password'
              placeholder=''
              name='pass'
            />
          </div>
        </div>
        <div className={classes.loginButton}>
          <Button text='ENTER' skin={button} onClick={props.login} />
        </div>
        <div className={classes.xOutButton}>
          <img onClick={(e) => props.closeLogin(e)} alt='X out Button' />
        </div>
      </section>
      {loader}
    </div>
  );
};

export default login;
