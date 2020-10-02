import React, { Component } from "react";

export default class FreeGateTable extends Component {
  constructor(props) {
    super(props);
    this.heightPage = null;
    this.heightLine = null;
    this.perPage = null;
    this.heightHeaderLine = null;

    this.state = {
      to: 1,
      from: 0,
      numberOfPages: 1,
      page: 1
    };
  }

  getTheNumberOfPages = () => {
    this.setState({
      numberOfPages: Math.ceil(
        Object.keys(this.props.data).length / this.perPage
      )
    });
    this.nextPage();
  };

  nextPage = () => {
    if (this.state.page < this.state.numberOfPages) {
      this.setState({
        page: this.state.page + 1
      });
    } else if (this.state.page === this.state.numberOfPages) {
      this.setState({
        page: 1
      });
    }
    //console.log("Page gate: " + this.state.page);
    this.expectNewToAndFrom();
  };

  expectNewToAndFrom = () => {
    this.setState({
      to: this.state.page * this.perPage,
      from: this.state.page * this.perPage - this.perPage
    });
  };

  componentDidMount() {
    this.heightPage = document.getElementById("container").clientHeight;
    this.heightLine = document.getElementById("field-height-free-gate").clientHeight;
    this.heightHeaderLine = document.getElementById("header-field-height-free-gate").clientHeight;
    this.perPage = Math.floor(this.heightPage / this.heightLine) - 1;
    if (this.heightHeaderLine + (this.heightLine)*this.perPage > this.heightPage){
      this.perPage--;
    }
    this.expectNewToAndFrom();
    this.timer = setInterval(
      () => this.getTheNumberOfPages(),
      this.props.scroll * 1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    return (
      <>
        <table className="table table-bordered m-0">
          <thead className="header">
            <tr className="header" id="header-field-height-free-gate">
              <th className="text-center header" scope="col">
                Свободные ворота
              </th>
            </tr>
          </thead>
          <tbody>
            {Object.values(this.props.data).map((value, index) =>
              index < this.state.to && index >= this.state.from ? (
                <tr key={index} id="field-height-free-gate">
                  <td className="text-center" key={index}>
                    {value}
                  </td>
                </tr>
              ) : null
            )}
          </tbody>
        </table>
      </>
    );
  }
}
