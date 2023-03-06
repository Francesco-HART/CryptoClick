import React, { Component } from "react";
import Konami from "react-konami-code";
import Shop from "./Shop";
import PcUpgrade from "./PcUpgrade";
import InfoBar from "./InfoBar";
import Menu from "./Menu";
import About from "./About";
import Miner from "./Miner";
import Sound from "react-sound";
import img1 from "../img/BG1.jpg";
import img2 from "../img/BG2.jpg";
import img3 from "../img/BG3.png";
import img4 from "../img/BG4.png";
import img5 from "../img/BG5.png";
import img6 from "../img/BG6.png";
import mineSound from "../sound/ting.mov";
import buySound from "../sound/Buy.m4a";

export default class Game extends Component {
  constructor(props) {
    super(props);
    this.updateCoin = this.updateCoin.bind(this);
    this.upgrade = this.upgrade.bind(this);
    this.setPage = this.setPage.bind(this);
    this.startTimer = this.startTimer.bind(this);
    this.stopTime = this.stopTime.bind(this);
    this.changeBackground = this.changeBackground.bind(this);
    this.stopSound = this.stopSound.bind(this);
    this.konami = this.konami.bind(this);
    this.backGround = img1;
    this.state = {
      coin: 0,
      ppc: 1,
      page: "",
      upgradesPPC: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      upgradesPPS: [1, 1, 1, 1, 1, 1],
      pps: 0,
      secondes: 0,
      minutes: 0,
      heure: 0,
      interval: 0,
      level: 0,
      sound: Sound.status.STOP,
    };
  }

  konami() {
    this.setState({ level: 7 });
  }

  componentDidMount() {
    if ("PaIci" === "admin") {
      this.setState({ coin: 100000000000 });
    }
    this.startTimer();
    this.changeBackground();
  }

  changeBackground() {
    switch (this.state.level) {
      case 1:
        this.backGround = img1;
        break;
      case 2:
        this.backGround = img2;
        break;
      case 3:
        this.backGround = img3;
        break;
      case 4:
        this.backGround = img4;
        break;
      case 5:
        this.backGround = img5;
        break;
      case 6:
        this.backGround = img6;
        break;
      default:
    }
  }

  startTimer() {
    this.state.interval = setInterval(() => {
      this.setState((prevState) => ({
        coin: this.state.coin + this.state.pps,
        secondes: prevState.secondes + 1,
        minutes: Math.floor((this.state.secondes + 1) / 60),
        heure: Math.floor(this.state.secondes / 3600),
      }));
    }, 1000);
    this.setState({ page: "" });
  }

  stopTime() {
    clearInterval(this.state.interval);
  }

  updateCoin() {
    this.setState({
      coin: this.state.coin + this.state.ppc,
      sound: Sound.status.PLAYING,
    });
  }
  stopSound() {
    this.setState({ sound: Sound.status.Stop });
  }
  upgrade(price, nbP, id, type) {
    switch (type) {
      case "ppc":
        this.state.upgradesPPC[id] = this.state.upgradesPPC[id] + 1;
        this.setState({
          coin: this.state.coin - price,
          ppc: this.state.ppc + parseInt(nbP),
          sound: Sound.status.PLAYING,
        });
        break;
      case "pps":
        this.state.upgradesPPS[id] = this.state.upgradesPPS[id] + 1;
        this.setState({
          coin: this.state.coin - price,
          pps: this.state.pps + parseInt(nbP),
          sound: Sound.status.PLAYING,
        });
        if (this.state.level < parseInt(id) + 1) {
          this.setState({ level: parseInt(id) + 1 });
        }
        break;
      default:
    }
  }
  setPage(event) {
    if (this.state.page != event) {
      this.setState({ page: event });
    } else {
      this.setState({ page: "" });
    }
  }

  render() {
    switch (this.state.page) {
      case "pcUpgrade":
        this.changeBackground();
        return (
          <div className="App">
            <Sound
              url={buySound}
              playStatus={this.state.sound}
              onFinishedPlaying={this.stopSound}
              volume={30}
              muted={false}
            />
            <img id="imgBackground" src={this.backGround} />
            <div id="windows" draggable="false">
              <div id="desktop">
                <Menu stopTime={this.stopTime} clickFunction={this.setPage} />
                <PcUpgrade
                  deletePage={this.setPage}
                  upgradesPPS={this.state.upgradesPPS}
                  myCoin={this.state.coin}
                  gameFunction={this.upgrade}
                />
              </div>
            </div>
            <InfoBar
              id="infoBar"
              pps={this.state.pps}
              playerName={"PaIci"}
              coin={this.state.coin}
              ppc={this.state.ppc}
            />
          </div>
        );
        break;
      case "shop":
        return (
          <div className="App">
            <Konami action={this.konami}>{this.changeBackground()}</Konami>
            <Sound
              url={buySound}
              playStatus={this.state.sound}
              onFinishedPlaying={this.stopSound}
              volume={30}
              muted={false}
            />
            <img id="imgBackground" src={this.backGround} />
            <div id="windows" draggable="false">
              <div id="desktop">
                <Menu stopTime={this.stopTime} clickFunction={this.setPage} />
                <Shop
                  deletePage={this.setPage}
                  upgradesPPC={this.state.upgradesPPC}
                  myCoin={this.state.coin}
                  gameFunction={this.upgrade}
                />
              </div>
            </div>
            <InfoBar
              id="infoBar"
              pps={this.state.pps}
              playerName={"PaIci"}
              coin={this.state.coin}
              ppc={this.state.ppc}
            />
          </div>
        );
        break;
      case "about":
        return (
          <div className="App">
            <Konami action={this.konami}>{this.changeBackground()}</Konami>
            <img id="imgBackground" src={this.backGround} />
            <div id="windows" draggable="false">
              <div id="desktop">
                <Menu stopTime={this.stopTime} clickFunction={this.setPage} />
                <About time={this.state.secondes} deletePage={this.setPage} />
              </div>
            </div>
            <InfoBar
              id="infoBar"
              pps={this.state.pps}
              playerName={"PaIci"}
              coin={this.state.coin}
              ppc={this.state.ppc}
            />
          </div>
        );
        break;
      case "miner":
        return (
          <div className="App">
            <Konami action={this.konami}>{this.changeBackground()}</Konami>
            <Sound
              url={mineSound}
              playStatus={this.state.sound}
              onFinishedPlaying={this.stopSound}
              volume={100}
              muted={false}
            />
            <img id="imgBackground" src={this.backGround} />
            <div id="windows" src={require("../img/BG1.jpg")} draggable="false">
              <div id="desktop">
                <Menu stopTime={this.stopTime} clickFunction={this.setPage} />
                <Miner deletePage={this.setPage} coinMine={this.updateCoin} />
              </div>
            </div>
            <InfoBar
              id="infoBar"
              pps={this.state.pps}
              playerName={"PaIci"}
              coin={this.state.coin}
              ppc={this.state.ppc}
            />
          </div>
        );
        break;
      case "settings":
        return (
          <div id="resume" className="App">
            <a className="pauseText" onClick={this.startTimer}>
              Resume
            </a>
            <a className="pauseText" onClick={this.props.returnHome}>
              Quit game
            </a>
          </div>
        );
        break;
      case "":
        return (
          <div className="App">
            <Konami action={this.konami}>{this.changeBackground()}</Konami>
            <img id="imgBackground" src={this.backGround} />
            <div id="windows" src={require("../img/BG1.jpg")} draggable="false">
              <div id="desktop">
                <Menu stopTime={this.stopTime} clickFunction={this.setPage} />
              </div>
            </div>
            <InfoBar
              id="infoBar"
              pps={this.state.pps}
              playerName={"PaIci"}
              coin={this.state.coin}
              ppc={this.state.ppc}
            />
          </div>
        );
        break;
      default:
    }
  }
}
