import React from "react";
import { useSelector } from "react-redux";
import classes from './App.module.css';
import Counter from "./components/Counter";
import Auth from '../src/components/Auth';
import Header from '../src/components/Header';
import UserProfile from "./components/UserProfile";
function App(){
  const isAuth = useSelector(state =>state.auth.isAuthenticated);

  return(
    <React.Fragment className={classes.App}>
      <Header/>
      {!isAuth && <Auth/>}
      {isAuth && <UserProfile/>}
      <Counter/>
    </React.Fragment>
  );
};

export default App;