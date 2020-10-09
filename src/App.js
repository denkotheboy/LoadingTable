import React, { Component } from "react";
import "./styles.css";
import LadaLoadingQueueTable from "./components/loading-queue-table";
import LadaFreeGateTable from "./components/free-gate-table";
import NineOrFractionsTable from "./components/nine-or-fractions-table";
import Remove from "./components/remove";
import Sixteen from "./components/sixteen";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      error: null,
      isLoaded: false,
      data: null,
      free_gate: null,
      scroll_frequency: 5,
      update_frequency: 10,
    };
  }

  getURLVar = (key) => {
    var vars = window.location.search
      .substr(1)
      .split("&")
      .reduce(function (res, a) {
        var t = a.split("=");
        res[decodeURIComponent(t[0])] =
          t.length === 1 ? null : decodeURIComponent(t[1]);
        return res;
      }, {});
    return vars[key] ? vars[key] : "";
  };

  updateTheData = () => {
    if (!this.state.isLoaded) {
      //fetch("./data?warehouse=Lada")
      fetch("./?warehouse=" + this.getURLVar("warehouse"))
        .then((res) => res.json())
        .then(
          (result) => {
            this.setState({
              isLoaded: true,
              data: result.data,
              free_gate: result.free_gate,
              scroll_frequency:
                result.scroll_frequency !== undefined
                  ? result.scroll_frequency
                  : 5,
              update_frequency:
                result.update_frequency !== undefined
                  ? result.update_frequency
                  : 15,
            });
          },
          (error) => {
            this.setState({
              isLoaded: true,
              error: error,
            });
            console.log(error);
          }
        );
    }
  };

  componentDidMount() {
    this.updateTheData();
    this.timer = setInterval(() => {
      this.setState({ isLoaded: false });
      this.updateTheData();
    }, this.state.update_frequency * 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    if (this.state.data !== null) {
      return (
        <div className="container-fluid full-page-height m-0" id="container">
          {this.getURLVar("warehouse") === "Lada" ? (
            <div className="row justify-content-between">
              <div className="col-10 p-0 pr-2">
                <LadaLoadingQueueTable
                  data={this.state.data}
                  scroll={this.state.scroll_frequency}
                />
              </div>
              <div className="col-2 p-0">
                <LadaFreeGateTable
                  data={this.state.free_gate}
                  scroll={this.state.scroll_frequency}
                />
              </div>
            </div>
          ) : this.getURLVar("warehouse") === "nine" ||
            this.getURLVar("warehouse") === "fractions" ? (
            <div className="row p-0">
              <div className="col-12 pt-2 pr-2 pl-2">
                <NineOrFractionsTable
                  data={this.state.data}
                  scroll={this.state.scroll_frequency}
                />
              </div>
            </div>
          ) : this.getURLVar("warehouse") === "remove" ? (
            <div className="row">
              <div className="col-12 p-2">
                <Remove
                  data={this.state.data}
                  scroll={this.state.scroll_frequency}
                />
              </div>
            </div>
          ) : this.getURLVar("warehouse") === "sixteen" ? (
            <div className="row">
              <div className="col-12 pl-1 pr-1 pt-1 pb-0">
                <Sixteen data={this.state.data} />
              </div>
            </div>
          ) : null}
        </div>
      );
    } else {
      return <>loading...</>;
    }
  }
}
