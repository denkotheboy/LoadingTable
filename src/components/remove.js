import React, { Component } from "react";

export default class Remove extends Component {
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
    //console.log("Page: " + this.state.page);
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
    this.heightLine = document.getElementById("field-height-remove-table").clientHeight;
    this.perPage = Math.floor(this.heightPage / this.heightLine);
    if (this.heightLine * this.perPage + 16 > this.heightPage){
      this.perPage--;
    }
    this.expectNewToAndFrom();
    this.timer = setInterval(
      () => this.getTheNumberOfPages(),
      this.props.scroll * 1000
    );
  }

  whatIsTheLineColor = (ready, id) => {
    if (ready ){
      if (id % 2 === 0) return "bg-green"; else return "bg-green-2";
    }else{
      if (id % 2 === 0) return "bg-blue"; else return "bg-grey";
    }
  };

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    return (
      <>
        <table className="table table-bordered table-striped table-success m-0 p-0">
          <tbody>
            {Object.keys(this.props.data).map((line, id) =>
              id < this.state.to && id >= this.state.from ? (
                <tr key={id} id="field-height-remove-table">
                  <td width="15%" className={"remove-text-size-vw align-middle "+this.whatIsTheLineColor(null, id)}>
                    <strong>{Object.values(this.props.data[line].number)}</strong>
                  </td>
                  <td width="15%" className={"remove-text-size-vw align-middle "+this.whatIsTheLineColor(null, id)}>
                    <strong>{Object.values(this.props.data[line].date)}</strong>
                  </td>
                  <td width="40%" className={"remove-text-size-vw align-middle "+this.whatIsTheLineColor(null, id)}>
                    <strong>{Object.values(this.props.data[line].route)}</strong>
                  </td>
                  <td width="10%" className={"remove-text-size-vw align-middle "+this.whatIsTheLineColor(null, id)}>
                    <strong>{this.props.data[line].count_collect}</strong>
                  </td>
                  <td width="10%" className={"remove-text-size-vw w-auto align-middle "+this.whatIsTheLineColor(null, id)}>
                    <strong>{this.props.data[line].count_pack}</strong>
                  </td>
                  <td width="10%" className={"remove-text-size-vw w-auto align-middle "+this.whatIsTheLineColor(null, id)}>
                    <strong>{this.props.data[line].count_pack_theme}</strong>
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
