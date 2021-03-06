import React, { Component } from "react";

export default class LoadingQueueTable extends Component {
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
      page: 1,
    };
  }

  getTheNumberOfPages = () => {
    this.setState({
      numberOfPages: Math.ceil(
        Object.keys(this.props.data).length / this.perPage
      ),
    });
    this.nextPage();
  };

  nextPage = () => {
    if (this.state.page < this.state.numberOfPages) {
      this.setState({
        page: this.state.page + 1,
      });
    } else if (this.state.page === this.state.numberOfPages) {
      this.setState({
        page: 1,
      });
    }
    console.log("Page queue: " + this.state.page);
    this.expectNewToAndFrom();
  };

  expectNewToAndFrom = () => {
    this.setState({
      to: this.state.page * this.perPage,
      from: this.state.page * this.perPage - this.perPage,
    });
  };

  resize = () => {
    try {
      this.heightPage = document.getElementById("container").clientHeight;
      this.heightLine = document.getElementById(
        "field-height-loading-queue"
      ).clientHeight;
    } catch (e) {
      this.heightPage = null;
      this.heightLine = null;
    }
    if (this.heightPage !== null && this.heightLine !== null) {

      this.heightHeaderLine = document.getElementById(
        "header-field-height-loading-queue"
      ).clientHeight;
      this.perPage = Math.floor(this.heightPage / this.heightLine) - 1;
      if (
        this.heightHeaderLine + this.heightLine * this.perPage > this.heightPage
      ) {
        this.perPage--;
      }
      this.expectNewToAndFrom();
      clearInterval(this.timer);
      this.timer = setInterval(
        () => this.getTheNumberOfPages(),
        this.props.scroll * 1000
      );
    }
  };

  componentDidMount() {
    this.resize();
    window.addEventListener(`resize`, event => {
      this.resize();
    }, false);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    return (
      <>
        <table className="table table-bordered m-0">
          <thead className="header">
            <tr className="header" id="header-field-height-loading-queue">
              <th className="text-center header" scope="col">
                Маршрутный лист
              </th>
              <th className="text-center header" scope="col">
                Машина
              </th>
              <th className="text-center header" scope="col">
                Статус
              </th>
              <th className="text-center header" scope="col">
                Коробок погружено
              </th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(this.props.data).map((line, id) =>
              id < this.state.to && id >= this.state.from ? (
                <tr key={id} id="field-height-loading-queue">
                  <td className="text-center">
                    {Object.values(this.props.data[line].document)}
                  </td>
                  <td className="text-center">
                    {Object.values(this.props.data[line].number_auto)}
                  </td>
                  <td className="text-center">
                    {Object.values(this.props.data[line].status)}
                  </td>
                  <td className="text-center">
                    {Object.values(this.props.data[line].info_count_boxs)}
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
