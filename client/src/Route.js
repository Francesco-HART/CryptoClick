import React from "react";
import "./App.css";
import Home from "./components/Home";
import Game from "./components/Game";
import Sound from "react-sound";
import backgroundSound from "./sound/backgroundjazzy.mov";
import { Route, Routes } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "./services/stores/auth/useAuthContext";

const Router = () => {
  const navigation = useNavigate();
  function backHome() {
    navigation("/home");
  }

  const authContext = useAuthContext();

  return (
    <Routes>
      <Route path={`/`} exact={true} element={<Home />} />
      <Route
        path={`/game`}
        exact={true}
        element={
          <>
            <Sound
              url={backgroundSound}
              playStatus={Sound.status.PLAYING}
              volume={15}
              muted={false}
            />
            <Game returnHome={backHome} />
          </>
        }
      />
    </Routes>
  );
};

export default Router;
