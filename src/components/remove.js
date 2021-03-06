import React, { Component } from "react";
import 'antd/dist/antd.css';
import { Pagination } from "antd";

export default class Remove extends Component {
  constructor(props) {
    super(props);
    this.heightPage = null;
    this.heightLine = null;
    this.perPage = null;
    this.heightHeaderLine = null;
    this.numberOfPages = 1;
    this.page = 1;

    this.timerAFK = null;
    //this.paginationShow = false;

    this.state = {
      to: 1,
      from: 0,
      paginationShow: false
    };
  }

  getTheNumberOfPages = () => {
    this.numberOfPages = Math.ceil(
      Object.keys(this.props.data).length / this.perPage
    );
  };

  nextPage = () => {
    this.getTheNumberOfPages();
    if (this.page < this.numberOfPages) {
      this.page = this.page + 1;
    } else if (this.page === this.numberOfPages) {
      this.page = 1;
    }
    //console.log("Page: " + this.page);
    this.expectNewToAndFrom();
  };

  goToPage = (page) => {
    this.getTheNumberOfPages();
    if (page !== null && page > 0 && page <= this.numberOfPages) {
      this.page = page;
      //console.log("Page: " + page);
    }
    this.expectNewToAndFrom();
  };

  expectNewToAndFrom = () => {
    this.setState({
      to: this.page * this.perPage,
      from: this.page * this.perPage - this.perPage,
    });
  };

  resize = () => {
    try {
      this.heightPage = document.getElementById("container").clientHeight;
      this.heightLine = document.getElementById("field-height-remove-table").clientHeight;
      this.heightSwitchingMen = document.getElementById("page-switching-menu").clientHeight;
    } catch (e) {
      this.heightPage = null;
      this.heightLine = null;
    }
    if (this.heightPage !== null && this.heightLine !== null) {
      this.perPage = Math.floor(this.heightPage / this.heightLine);
      if (this.heightLine * this.perPage + 16 + this.heightSwitchingMen > this.heightPage) {
        this.perPage--;
      }
      this.expectNewToAndFrom();
      clearInterval(this.timer);
      this.timerScroll();
    }
  };

  afkMode = () => {
    if (!this.state.paginationShow){
      clearInterval(this.timer);
      this.setState({
        paginationShow: true
      });
    }
    clearInterval(this.timerAFK);
    this.timerAFK = setInterval(() => {
      this.setState({
        paginationShow: false
      });
      this.timerScroll();
      this.nextPage();
    }, 10000);
  };

  timerScroll = () => {
    clearInterval(this.timer);
    this.timer = setInterval(
      () => this.nextPage(),
      this.props.scroll * 1000
    );
  };

  componentDidMount() {
    this.resize();
    window.addEventListener(`resize`, event => {
      this.resize();
    }, false);
    window.addEventListener('mousemove', event => {
      this.afkMode();
    }, false);
  }

  whatIsTheLineColor = (count_collect, count_pack, count_pack_theme, id) => {
    if (count_collect + count_pack + count_pack_theme === 0) {
      if (id % 2 === 0) return "bg-green";
      else return "bg-green-2";
    } else {
      if (id % 2 === 0) return "bg-blue";
      else return "bg-grey";
    }
  };

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    if (this.props.data.length > 0) {
      return (
        <>
          <table className="table table-bordered table-striped table-success m-0 p-0 mb-2">
            <tbody>
              {Object.keys(this.props.data).map((line, id) =>
                id < this.state.to && id >= this.state.from ? (
                  <tr key={id} id="field-height-remove-table">
                    <td
                      width="15%"
                      className={
                        "remove-text-size-vw align-middle " +
                        this.whatIsTheLineColor(
                          this.props.data[line].count_collect,
                          this.props.data[line].count_pack,
                          this.props.data[line].count_pack_theme,
                          id
                        )
                      }
                    >
                      <strong>
                        {Object.values(this.props.data[line].number)}
                      </strong>
                    </td>
                    <td
                      width="15%"
                      className={
                        "remove-text-size-vw align-middle " +
                        this.whatIsTheLineColor(
                          this.props.data[line].count_collect,
                          this.props.data[line].count_pack,
                          this.props.data[line].count_pack_theme,
                          id
                        )
                      }
                    >
                      <strong>
                        {Object.values(this.props.data[line].date)}
                      </strong>
                    </td>
                    <td
                      width="40%"
                      className={
                        "remove-text-size-vw align-middle " +
                        this.whatIsTheLineColor(
                          this.props.data[line].count_collect,
                          this.props.data[line].count_pack,
                          this.props.data[line].count_pack_theme,
                          id
                        )
                      }
                    >
                      <strong>
                        {Object.values(this.props.data[line].route)}
                      </strong>
                    </td>
                    <td
                      width="10%"
                      className={
                        "remove-text-size-vw align-middle " +
                        this.whatIsTheLineColor(
                          this.props.data[line].count_collect,
                          this.props.data[line].count_pack,
                          this.props.data[line].count_pack_theme,
                          id
                        )
                      }
                    >
                      <strong>{this.props.data[line].count_collect}</strong>
                    </td>
                    <td
                      width="10%"
                      className={
                        "remove-text-size-vw w-auto align-middle " +
                        this.whatIsTheLineColor(
                          this.props.data[line].count_collect,
                          this.props.data[line].count_pack,
                          this.props.data[line].count_pack_theme,
                          id
                        )
                      }
                    >
                      <strong>{this.props.data[line].count_pack}</strong>
                    </td>
                    <td
                      width="10%"
                      className={
                        "remove-text-size-vw w-auto align-middle " +
                        this.whatIsTheLineColor(
                          this.props.data[line].count_collect,
                          this.props.data[line].count_pack,
                          this.props.data[line].count_pack_theme,
                          id
                        )
                      }
                    >
                      <strong>{this.props.data[line].count_pack_theme}</strong>
                    </td>
                  </tr>
                ) : null
              )}
            </tbody>
          </table>
            <nav className="nav justify-content-center" style={{visibility: this.state.paginationShow ? 'visible' : 'hidden' }} aria-label="Page navigation" id="page-switching-menu">
              <Pagination defaultCurrent={this.page} total={this.props.data.length} pageSize={this.perPage} onChange={this.goToPage} showSizeChanger={false}/>
            </nav>
        </>
      );
    } else {
      return null;
    }
  }
}
