import React, { useEffect } from "react";
import useWalletConnect from "../hooks/useWalletConnect";
import WalletConnect from "./WalletConnect";

const Login = ({ startGame }) => {
  const { connect, disconnect, account } = useWalletConnect();

  useEffect(() => {
    if (account) startGame();
  }, [account]);

  return (
    <div id="Login">
      <div id="formLogin" style={{ marginTop: 40 }}>
        <input className="input" value={account} disabled={true} type="text" />
        <button className="button" onClick={connect}>
          Connect with WalletConnect
        </button>
      </div>
      {/* <p id="or">or</p>
      <input
        id="signUp"
        value="Sign up"
        type="button"
        onClick={() => changePage("signUp")}
      /> */}
    </div>
  );
};
export default Login;
