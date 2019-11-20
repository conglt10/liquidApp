import React from 'react';
import classes from '../style/scss/Header.module.scss';
import Button from './UI/Button';
import Login from './UI/Login';

const header = (props) => {
  let loginModal, loginButton;
  if (props.displayLogin) {
    loginModal = (
      <Login
        show={props.displayLogin}
        closeLogin={props.showHideLogin}
        login={props.login}
        logout={props.logout}
        handleChangeLogin={props.handleChangeLogin}
        error={props.error}
        username={props.username}
        isSigningIn={props.isSigningIn}
      />
    );
  }
  if (!props.isLoggedIn) {
    loginButton = (
      <div>
        <Button text='Login' skin='primary' onClick={props.showHideLogin} />
      </div>
    );
  } else {
    loginButton = (
      <div>
        <Button
          text={`Logged in as ${props.loginNameForm.username}`}
          skin='primary'
          onClick={props.logout}
        />
      </div>
    );
  }
  return (
    <div>
      <div className={classes.container}>{loginButton}</div>
      {loginModal}
    </div>
  );
};

export default header;
