import React, { Component } from "react";
import "./styles.css";
import LoadingQueueTable from "./components/loading-queue-table";
import FreeGateTable from "./components/free-gate-table";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      error: null,
      isLoaded: false,
      data: null,
      free_gate: null,
      scroll_frequency: 5,
      update_frequency: 10
    };
  }

  updateTheData = () => {
    if (!this.state.isLoaded) {
      fetch("https://run.mocky.io/v3/29736be2-ed9e-4cd7-bd53-3c25ef84d920")
        .then((res) => res.json())
        .then(
          (result) => {
            this.setState({
              isLoaded: true,
              data: result.data,
              free_gate: result.free_gate,
              scroll_frequency: result.scroll_frequency,
              update_frequency: result.update_frequency
            });
          },
          (error) => {
            this.setState({
              isLoaded: true,
              error: error
            });
            console.log(error);
          }
        );
    }
  };

  componentDidMount() {
    this.updateTheData();
    this.timer = setInterval(() => {
      this.updateTheData();
    }, this.state.update_frequency * 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    if (this.state.data !== null && this.state.free_gate !== null) {
      return (
        <div className="container-fluid full-page-height" id="container">
          <div className="row justify-content-between">
            <div className="col-10 overflow-auto">
              <LoadingQueueTable
                data={this.state.data}
                scroll={this.state.scroll_frequency}
              />
            </div>
            <div className="col-2 overflow-auto">
              <FreeGateTable
                data={this.state.free_gate}
                scroll={this.state.scroll_frequency}
              />
            </div>
          </div>
        </div>
      );
    } else {
      return <>loading...</>;
    }
  }
}
