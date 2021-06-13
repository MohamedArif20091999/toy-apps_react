import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { signIn, signOut } from "../actions";

const googleAuth = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          clientId: process.env.REACT_APP_CLIENT_ID,
          scope: "email",
        })
        .then(() => {
          const auth = window.gapi.auth2.getAuthInstance();
          onAuthChange(auth.currentUser.get().getId());
          auth.isSignedIn.listen(onAuthChange);
        });
    });
  }, []);

  const isSignedIn = useSelector((state) => state.auth.isSignedIn);
  const onAuthChange = (isSignedIn) => {
    if (isSignedIn) {
      dispatch(signIn(isSignedIn));
    } else {
      dispatch(signOut());
    }
  };

  const onSignInClick = () => {
    dispatch(signIn());
  };
  const onSignOutClick = () => {
    dispatch(signOut());
  };

  const renderAuthButton = () => {
    if (isSignedIn === null) {
      return null;
    } else if (isSignedIn) {
      return (
        <button onClick={onSignOutClick} className="ui red google button">
          <i className="google icon" />
          Sign Out
        </button>
      );
    } else {
      return (
        <button onClick={onSignInClick} className="ui red google button">
          <i className="google icon" />
          Sign In with Google
        </button>
      );
    }
  };

  return <div>{renderAuthButton()}</div>;
};

export default googleAuth;
