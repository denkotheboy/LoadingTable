import React, { Component } from "react";

export default class NineOrFractionsTable extends Component {
  constructor(props) {
    super(props);
    this.heightPage = null;
    this.heightLine = null;
    this.perPage = null;

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
    //console.log("Page: " + this.state.page);
    this.expectNewToAndFrom();
  };

  expectNewToAndFrom = () => {
    this.setState({
      to: this.state.page * this.perPage,
      from: this.state.page * this.perPage - this.perPage,
    });
  };

  sortByIncreasing = () => {
    let m = null;
    Object.keys(this.props.data).forEach(() => {
      Object.keys(this.props.data).forEach((line, id) => {
        if (
          Number(line) + 1 < this.props.data.length &&
          this.props.data.length > 1
        ) {
          if (
            this.props.data[line].document >
            this.props.data[Number(line) + 1].document
          ) {
            m = this.props.data[Number(line) + 1];
            this.props.data[Number(line) + 1] = this.props.data[line];
            this.props.data[line] = m;
          }
        }
      });
    });
  };

  componentDidMount() {
    try {
      this.heightPage = document.getElementById("container").clientHeight;
      this.heightLine = document.getElementById(
        "field-height-nine-or-fractions-table"
      ).clientHeight;
    } catch (e) {
      this.heightPage = null;
      this.heightLine = null;
    }
    if (this.heightPage !== null && this.heightLine !== null) {
      this.perPage = Math.floor(this.heightPage / this.heightLine);
      if (this.heightLine * this.perPage + 16 > this.heightPage) {
        this.perPage--;
      }
      this.expectNewToAndFrom();
      this.timer = setInterval(
        () => this.getTheNumberOfPages(),
        this.props.scroll * 1000
      );
    }
  }

  whatIsTheLineColor = (ready, id) => {
    if (ready && id % 2 === 0) {
      return "bg-green";
    } else if (ready && id % 2 !== 0) {
      return "bg-green-2";
    } else if (!ready && id % 2 === 0) {
      return "bg-blue";
    } else {
      return "bg-blue-2";
    }
  };

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    if (this.props.data.length > 0) {
      this.sortByIncreasing();
      return (
        <>
          <table className="table table-bordered table-striped table-success">
            <tbody>
              {Object.keys(this.props.data).map((line, id) =>
                id < this.state.to && id >= this.state.from ? (
                  <tr key={id} id="field-height-nine-or-fractions-table">
                    <td
                      className={
                        "text-size-vw w-75 align-middle " +
                        this.whatIsTheLineColor(
                          Object.values(this.props.data[line].ready),
                          id
                        )
                      }
                    >
                      <strong>
                        {Object.values(this.props.data[line].document)}
                      </strong>
                    </td>
                    <td
                      className={
                        "text-size-vw w-25 align-middle " +
                        this.whatIsTheLineColor(
                          Object.values(this.props.data[line].ready),
                          id
                        )
                      }
                    >
                      <strong>
                        {Object.values(this.props.data[line].gate)}
                      </strong>
                    </td>
                  </tr>
                ) : null
              )}
            </tbody>
          </table>
        </>
      );
    } else {
      return null;
    }
  }
}
