import React, { Component } from "react";

export default class Sixteen extends Component {
  constructor(props) {
    super(props);
    this.heightPage = null;
    this.heightLine = null;
    this.perPage = null;
    this.heightHeaderLine = null;
    this.i = 0;
    this.refRow = React.createRef();

    this.state = {
      to: 1,
      from: 0,
      numberOfPages: 1,
      page: 1,
    };
  }

  componentDidMount() {
    try {
      this.heightPage = document.getElementById("container").clientHeight;
    } catch (e) {
      this.heightPage = null;
    }
    if (this.heightPage !== null) {
      this.refRow.current.style.height = this.heightPage - 16 + "px";
    }
  }

  getColor = (order_done, left, top, right, bottom) => {
    let style = "col flex-item text-center";
    if (order_done) {
      style += " bg-green";
    }
    if (left) {
      style += order_done ? " border-green-left" : " border-white-left";
    }
    if (top) {
      style += order_done ? " border-green-top" : " border-white-top";
    }
    if (right) {
      style += order_done ? " border-green-right" : " border-white-right";
    }
    if (bottom) {
      style += order_done ? " border-green-bottom" : " border-white-bottom";
    }
    return style;
  };

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    return (
      <div className="container-fluid" ref={this.refRow}>
        <div className="row row-height">
          <div className="col flex-item-empty"></div>
          <div
            className={this.getColor(
              this.props.data[0].order_done,
              false,
              false,
              true,
              false
            )}
          >
            {this.props.data[0].document_numder}
          </div>
          <div
            className={this.getColor(
              this.props.data[1].order_done,
              false,
              false,
              true,
              false
            )}
          >
            {this.props.data[1].document_numder}
          </div>
          <div
            className={this.getColor(
              this.props.data[2].order_done,
              false,
              false,
              true,
              false
            )}
          >
            {this.props.data[2].document_numder}
          </div>
          <div
            className={this.getColor(
              this.props.data[3].order_done,
              false,
              false,
              true,
              false
            )}
          >
            {this.props.data[3].document_numder}
          </div>
          <div
            className={this.getColor(
              this.props.data[4].order_done,
              false,
              false,
              true,
              false
            )}
          >
            {this.props.data[4].document_numder}
          </div>
          <div className={this.getColor(this.props.data[5].order_done)}>
            {this.props.data[5].document_numder}
          </div>
          <div className="col flex-item-empty"></div>
          <div className="col flex-item-empty"></div>
          <div className="col flex-item-empty"></div>
          <div className="col flex-item-empty"></div>
          <div className="col flex-item-empty"></div>
          <div className="col flex-item-empty"></div>
          <div className="col flex-item-empty"></div>
          <div className="col flex-item-empty"></div>
          <div className="col flex-item-empty"></div>
        </div>
        <div className="row row-height">
          <div className="col flex-item-empty"></div>
          <div className="col flex-item-empty"></div>
          <div className="col flex-item-empty"></div>
          <div
            className={this.getColor(
              this.props.data[6].order_done,
              false,
              true,
              true,
              false
            )}
          >
            {this.props.data[6].document_numder}
          </div>
          <div
            className={this.getColor(
              this.props.data[7].order_done,
              false,
              true,
              true,
              false
            )}
          >
            {this.props.data[7].document_numder}
          </div>
          <div
            className={this.getColor(
              this.props.data[8].order_done,
              false,
              true,
              true,
              false
            )}
          >
            {this.props.data[8].document_numder}
          </div>
          <div
            className={this.getColor(
              this.props.data[9].order_done,
              false,
              true,
              false,
              false
            )}
          >
            {this.props.data[9].document_numder}
          </div>
          <div
            className={this.getColor(
              this.props.data[10].order_done,
              true,
              false,
              false,
              false
            )}
          >
            {this.props.data[10].document_numder}
          </div>
          <div
            className={this.getColor(
              this.props.data[11].order_done,
              true,
              false,
              false,
              false
            )}
          >
            {this.props.data[11].document_numder}
          </div>
          <div
            className={this.getColor(
              this.props.data[12].order_done,
              true,
              false,
              false,
              false
            )}
          >
            {this.props.data[12].document_numder}
          </div>
          <div className="col flex-item-empty"></div>
          <div
            className={this.getColor(
              this.props.data[13].order_done,
              false,
              false,
              true,
              false
            )}
          >
            {this.props.data[13].document_numder}
          </div>
          <div
            className={this.getColor(
              this.props.data[14].order_done,
              false,
              false,
              true,
              false
            )}
          >
            {this.props.data[14].document_numder}
          </div>
          <div
            className={this.getColor(
              this.props.data[15].order_done,
              false,
              false,
              false,
              false
            )}
          >
            {this.props.data[15].document_numder}
          </div>
          <div
            className={this.getColor(
              this.props.data[16].order_done,
              true,
              false,
              false,
              false
            )}
          >
            {this.props.data[16].document_numder}
          </div>
          <div className="col flex-item-empty"></div>
        </div>
        <div className="row row-height">
          <div className="col flex-item-empty"></div>
          <div className="col flex-item-empty"></div>
          <div className="col flex-item-empty"></div>
          <div
            className={this.getColor(
              this.props.data[17].order_done,
              false,
              true,
              true,
              true
            )}
          >
            {this.props.data[17].document_numder}
          </div>
          <div
            className={this.getColor(
              this.props.data[18].order_done,
              false,
              true,
              true,
              false
            )}
          >
            {this.props.data[18].document_numder}
          </div>
          <div
            className={this.getColor(
              this.props.data[19].order_done,
              false,
              true,
              true,
              false
            )}
          >
            {this.props.data[19].document_numder}
          </div>
          <div
            className={this.getColor(
              this.props.data[20].order_done,
              false,
              true,
              false,
              false
            )}
          >
            {this.props.data[20].document_numder}
          </div>
          <div
            className={this.getColor(
              this.props.data[21].order_done,
              true,
              true,
              false,
              false
            )}
          >
            {this.props.data[21].document_numder}
          </div>
          <div
            className={this.getColor(
              this.props.data[22].order_done,
              true,
              true,
              false,
              false
            )}
          >
            {this.props.data[22].document_numder}
          </div>
          <div className="col flex-item-empty"></div>
          <div className="col flex-item-empty"></div>
          <div
            className={this.getColor(
              this.props.data[23].order_done,
              false,
              true,
              true,
              false
            )}
          >
            {this.props.data[23].document_numder}
          </div>
          <div
            className={this.getColor(
              this.props.data[24].order_done,
              false,
              true,
              true,
              false
            )}
          >
            {this.props.data[24].document_numder}
          </div>
          <div
            className={this.getColor(
              this.props.data[25].order_done,
              false,
              true,
              false,
              false
            )}
          >
            {this.props.data[25].document_numder}
          </div>
          <div className="col flex-item-empty"></div>
          <div className="col flex-item-empty"></div>
        </div>
        <div className="row row-height">
          <div className="col flex-item-empty"></div>
          <div
            className={this.getColor(
              this.props.data[26].order_done,
              false,
              false,
              false,
              false
            )}
          >
            {this.props.data[26].document_numder}
          </div>
          <div
            className={this.getColor(
              this.props.data[27].order_done,
              true,
              false,
              true,
              false
            )}
          >
            {this.props.data[27].document_numder}
          </div>
          <div
            className={this.getColor(
              this.props.data[28].order_done,
              false,
              false,
              false,
              false
            )}
          >
            {this.props.data[28].document_numder}
          </div>
          <div className="col flex-item-empty"></div>
          <div className="col flex-item-empty"></div>
          <div className="col flex-item-empty"></div>
          <div className="col flex-item-empty"></div>
          <div className="col flex-item-empty"></div>
          <div className="col flex-item-empty"></div>
          <div className="col flex-item-empty"></div>
          <div className="col flex-item-empty"></div>
          <div className="col flex-item-empty"></div>
          <div className="col flex-item-empty"></div>
          <div className="col flex-item-empty"></div>
          <div className="col flex-item-empty"></div>
        </div>
        <div className="row row-height">
          <div className="col flex-item-empty"></div>
          <div className="col flex-item-empty"></div>
          <div className="col flex-item-empty"></div>
          <div className="col flex-item-empty"></div>
          <div className="col flex-item-empty"></div>
          <div className="col flex-item-empty"></div>
          <div className="col flex-item-empty"></div>
          <div className="col flex-item-empty"></div>
          <div className="col flex-item-empty"></div>
          <div className="col flex-item-empty"></div>
          <div className="col flex-item-empty"></div>
          <div className="col flex-item-empty"></div>
          <div className="col flex-item-empty"></div>
          <div className="col flex-item-empty"></div>
          <div className="col flex-item-empty"></div>
          <div className="col flex-item-empty"></div>
        </div>
        <div className="row row-height">
          <div className="col flex-item-empty"></div>
          <div className="col flex-item-empty"></div>
          <div className={this.getColor(this.props.data[29].order_done)}>
            {this.props.data[29].document_numder}
          </div>
          <div
            className={this.getColor(
              this.props.data[30].order_done,
              true,
              false,
              false,
              false
            )}
          >
            {this.props.data[30].document_numder}
          </div>
          <div className="col flex-item-empty"></div>
          <div className={this.getColor(this.props.data[31].order_done)}>
            {this.props.data[31].document_numder}
          </div>
          <div
            className={this.getColor(
              this.props.data[32].order_done,
              true,
              false,
              false,
              false
            )}
          >
            {this.props.data[32].document_numder}
          </div>
          <div
            className={this.getColor(
              this.props.data[33].order_done,
              true,
              false,
              false,
              false
            )}
          >
            {this.props.data[33].document_numder}
          </div>
          <div
            className={this.getColor(
              this.props.data[34].order_done,
              true,
              false,
              false,
              false
            )}
          >
            {this.props.data[34].document_numder}
          </div>
          <div
            className={this.getColor(
              this.props.data[35].order_done,
              true,
              false,
              false,
              false
            )}
          >
            {this.props.data[35].document_numder}
          </div>
          <div className="col flex-item-empty"></div>
          <div className={this.getColor(this.props.data[36].order_done)}>
            {this.props.data[36].document_numder}
          </div>
          <div
            className={this.getColor(
              this.props.data[37].order_done,
              true,
              false,
              false,
              false
            )}
          >
            {this.props.data[37].document_numder}
          </div>
          <div
            className={this.getColor(
              this.props.data[38].order_done,
              true,
              false,
              false,
              false
            )}
          >
            {this.props.data[38].document_numder}
          </div>
          <div
            className={this.getColor(
              this.props.data[39].order_done,
              true,
              false,
              false,
              false
            )}
          >
            {this.props.data[39].document_numder}
          </div>
          <div
            className={this.getColor(
              this.props.data[40].order_done,
              true,
              false,
              false,
              false
            )}
          >
            {this.props.data[40].document_numder}
          </div>
        </div>
        <div className="row row-height">
          <div className="col flex-item-empty"></div>
          <div className="col flex-item-empty"></div>
          <div
            className={this.getColor(
              this.props.data[41].order_done,
              false,
              true,
              false,
              false
            )}
          >
            {this.props.data[41].document_numder}
          </div>
          <div
            className={this.getColor(
              this.props.data[42].order_done,
              true,
              true,
              false,
              false
            )}
          >
            {this.props.data[42].document_numder}
          </div>
          <div className="col flex-item-empty"></div>
          <div
            className={this.getColor(
              this.props.data[43].order_done,
              false,
              true,
              false,
              false
            )}
          >
            {this.props.data[43].document_numder}
          </div>
          <div
            className={this.getColor(
              this.props.data[44].order_done,
              true,
              true,
              false,
              false
            )}
          >
            {this.props.data[44].document_numder}
          </div>
          <div
            className={this.getColor(
              this.props.data[45].order_done,
              true,
              true,
              false,
              false
            )}
          >
            {this.props.data[45].document_numder}
          </div>
          <div
            className={this.getColor(
              this.props.data[46].order_done,
              true,
              true,
              false,
              false
            )}
          >
            {this.props.data[46].document_numder}
          </div>
          <div
            className={this.getColor(
              this.props.data[47].order_done,
              true,
              true,
              false,
              false
            )}
          >
            {this.props.data[47].document_numder}
          </div>
          <div className="col flex-item-empty"></div>
          <div
            className={this.getColor(
              this.props.data[48].order_done,
              false,
              true,
              false,
              false
            )}
          >
            {this.props.data[48].document_numder}
          </div>
          <div
            className={this.getColor(
              this.props.data[49].order_done,
              true,
              true,
              false,
              false
            )}
          >
            {this.props.data[49].document_numder}
          </div>
          <div
            className={this.getColor(
              this.props.data[50].order_done,
              true,
              true,
              false,
              false
            )}
          >
            {this.props.data[50].document_numder}
          </div>
          <div
            className={this.getColor(
              this.props.data[51].order_done,
              true,
              true,
              false,
              false
            )}
          >
            {this.props.data[51].document_numder}
          </div>
          <div
            className={this.getColor(
              this.props.data[52].order_done,
              true,
              true,
              false,
              false
            )}
          >
            {this.props.data[52].document_numder}
          </div>
        </div>
        <div className="row row-height">
          <div className="col flex-item-empty"></div>
          <div className="col flex-item-empty"></div>
          <div className="col flex-item-empty"></div>
          <div className="col flex-item-empty"></div>
          <div className="col flex-item-empty"></div>
          <div className="col flex-item-empty"></div>
          <div className="col flex-item-empty"></div>
          <div className="col flex-item-empty"></div>
          <div className="col flex-item-empty"></div>
          <div className="col flex-item-empty"></div>
          <div className="col flex-item-empty"></div>
          <div className="col flex-item-empty"></div>
          <div className="col flex-item-empty"></div>
          <div className="col flex-item-empty"></div>
          <div className="col flex-item-empty"></div>
          <div className="col flex-item-empty"></div>
        </div>
        <div className="row row-height">
          <div className={this.getColor(this.props.data[53].order_done)}>
            {this.props.data[53].document_numder}
          </div>
          <div
            className={this.getColor(
              this.props.data[54].order_done,
              true,
              false,
              false,
              false
            )}
          >
            {this.props.data[54].document_numder}
          </div>
          <div className="col flex-item-empty"></div>
          <div className="col flex-item-empty"></div>
          <div className="col flex-item-empty"></div>
          <div className="col flex-item-empty"></div>
          <div className="col flex-item-empty"></div>
          <div className="col flex-item-empty"></div>
          <div className="col flex-item-empty"></div>
          <div className="col flex-item-empty"></div>
          <div className="col flex-item-empty"></div>
          <div className={this.getColor(this.props.data[55].order_done)}>
            {this.props.data[55].document_numder}
          </div>
          <div
            className={this.getColor(
              this.props.data[56].order_done,
              true,
              false,
              false,
              false
            )}
          >
            {this.props.data[56].document_numder}
          </div>
          <div
            className={this.getColor(
              this.props.data[57].order_done,
              true,
              false,
              false,
              false
            )}
          >
            {this.props.data[57].document_numder}
          </div>
          <div
            className={this.getColor(
              this.props.data[58].order_done,
              true,
              false,
              false,
              false
            )}
          >
            {this.props.data[58].document_numder}
          </div>
          <div className="col flex-item-empty"></div>
        </div>
        <div className="row row-height">
          <div
            className={this.getColor(
              this.props.data[59].order_done,
              false,
              true,
              false,
              false
            )}
          >
            {this.props.data[59].document_numder}
          </div>
          <div
            className={this.getColor(
              this.props.data[60].order_done,
              true,
              true,
              false,
              false
            )}
          >
            {this.props.data[60].document_numder}
          </div>
          <div className="col flex-item-empty"></div>
          <div className="col flex-item-empty"></div>
          <div className="col flex-item-empty"></div>
          <div className="col flex-item-empty"></div>
          <div className="col flex-item-empty"></div>
          <div className="col flex-item-empty"></div>
          <div className="col flex-item-empty"></div>
          <div className="col flex-item-empty"></div>
          <div className="col flex-item-empty"></div>
          <div className="col flex-item-empty"></div>
          <div className="col flex-item-empty"></div>
          <div className="col flex-item-empty"></div>
          <div className="col flex-item-empty"></div>
          <div className="col flex-item-empty"></div>
        </div>
        <div className="row row-height">
          <div
            className={this.getColor(
              this.props.data[61].order_done,
              false,
              true,
              false,
              false
            )}
          >
            {this.props.data[61].document_numder}
          </div>
          <div
            className={this.getColor(
              this.props.data[62].order_done,
              true,
              true,
              false,
              false
            )}
          >
            {this.props.data[62].document_numder}
          </div>
          <div className="col flex-item-empty"></div>
          <div className="col flex-item-empty"></div>
          <div className="col flex-item-empty"></div>
          <div className="col flex-item-empty"></div>
          <div className="col flex-item-empty"></div>
          <div className={this.getColor(this.props.data[63].order_done)}>
            {this.props.data[63].document_numder}
          </div>
          <div
            className={this.getColor(
              this.props.data[64].order_done,
              true,
              false,
              false,
              false
            )}
          >
            {this.props.data[64].document_numder}
          </div>
          <div
            className={this.getColor(
              this.props.data[65].order_done,
              true,
              false,
              false,
              false
            )}
          >
            {this.props.data[65].document_numder}
          </div>
          <div
            className={this.getColor(
              this.props.data[66].order_done,
              true,
              false,
              false,
              false
            )}
          >
            {this.props.data[66].document_numder}
          </div>
          <div
            className={this.getColor(
              this.props.data[67].order_done,
              true,
              false,
              false,
              false
            )}
          >
            {this.props.data[67].document_numder}
          </div>
          <div
            className={this.getColor(
              this.props.data[68].order_done,
              true,
              false,
              false,
              false
            )}
          >
            {this.props.data[68].document_numder}
          </div>
          <div
            className={this.getColor(
              this.props.data[69].order_done,
              true,
              false,
              false,
              false
            )}
          >
            {this.props.data[69].document_numder}
          </div>
          <div
            className={this.getColor(
              this.props.data[70].order_done,
              true,
              false,
              false,
              false
            )}
          >
            {this.props.data[70].document_numder}
          </div>
          <div
            className={this.getColor(
              this.props.data[71].order_done,
              true,
              false,
              false,
              false
            )}
          >
            {this.props.data[71].document_numder}
          </div>
        </div>
        <div className="row row-height">
          <div className="col flex-item-empty"></div>
          <div className="col flex-item-empty"></div>
          <div className="col flex-item-empty"></div>
          <div className="col flex-item-empty"></div>
          <div className="col flex-item-empty"></div>
          <div className="col flex-item-empty"></div>
          <div className="col flex-item-empty"></div>
          <div className="col flex-item-empty"></div>
          <div className="col flex-item-empty"></div>
          <div className="col flex-item-empty"></div>
          <div className="col flex-item-empty"></div>
          <div className="col flex-item-empty"></div>
          <div className="col flex-item-empty"></div>
          <div className="col flex-item-empty"></div>
          <div className="col flex-item-empty"></div>
          <div className="col flex-item-empty"></div>
        </div>
        <div className="row row-height">
          <div className={this.getColor(this.props.data[72].order_done)}>
            {this.props.data[72].document_numder}
          </div>
          <div
            className={this.getColor(
              this.props.data[73].order_done,
              true,
              false,
              false,
              false
            )}
          >
            {this.props.data[73].document_numder}
          </div>
          <div className="col flex-item-empty"></div>
          <div className="col flex-item-empty"></div>
          <div className="col flex-item-empty"></div>
          <div className="col flex-item-empty"></div>
          <div className="col flex-item-empty"></div>
          <div className={this.getColor(this.props.data[74].order_done)}>
            {this.props.data[74].document_numder}
          </div>
          <div
            className={this.getColor(
              this.props.data[75].order_done,
              true,
              false,
              false,
              false
            )}
          >
            {this.props.data[75].document_numder}
          </div>
          <div
            className={this.getColor(
              this.props.data[76].order_done,
              true,
              false,
              false,
              false
            )}
          >
            {this.props.data[76].document_numder}
          </div>
          <div
            className={this.getColor(
              this.props.data[77].order_done,
              true,
              false,
              false,
              false
            )}
          >
            {this.props.data[77].document_numder}
          </div>
          <div
            className={this.getColor(
              this.props.data[78].order_done,
              true,
              false,
              false,
              false
            )}
          >
            {this.props.data[78].document_numder}
          </div>
          <div
            className={this.getColor(
              this.props.data[79].order_done,
              true,
              false,
              false,
              false
            )}
          >
            {this.props.data[79].document_numder}
          </div>
          <div
            className={this.getColor(
              this.props.data[80].order_done,
              true,
              false,
              false,
              false
            )}
          >
            {this.props.data[80].document_numder}
          </div>
          <div
            className={this.getColor(
              this.props.data[81].order_done,
              true,
              false,
              false,
              false
            )}
          >
            {this.props.data[81].document_numder}
          </div>
          <div
            className={this.getColor(
              this.props.data[82].order_done,
              true,
              false,
              false,
              false
            )}
          >
            {this.props.data[82].document_numder}
          </div>
        </div>
        <div className="row row-height">
          <div
            className={this.getColor(
              this.props.data[83].order_done,
              false,
              true,
              false,
              false
            )}
          >
            {this.props.data[83].document_numder}
          </div>
          <div
            className={this.getColor(
              this.props.data[84].order_done,
              true,
              true,
              false,
              false
            )}
          >
            {this.props.data[84].document_numder}
          </div>
          <div className="col flex-item-empty"></div>
          <div className="col flex-item-empty"></div>
          <div className="col flex-item-empty"></div>
          <div className="col flex-item-empty"></div>
          <div className="col flex-item-empty"></div>
          <div className="col flex-item-empty"></div>
          <div className="col flex-item-empty"></div>
          <div className="col flex-item-empty"></div>
          <div className="col flex-item-empty"></div>
          <div className="col flex-item-empty"></div>
          <div className="col flex-item-empty"></div>
          <div className="col flex-item-empty"></div>
          <div className="col flex-item-empty"></div>
          <div className="col flex-item-empty"></div>
        </div>
        <div className="row row-height">
          <div
            className={this.getColor(
              this.props.data[85].order_done,
              false,
              true,
              false,
              false
            )}
          >
            {this.props.data[85].document_numder}
          </div>
          <div
            className={this.getColor(
              this.props.data[86].order_done,
              true,
              true,
              false,
              false
            )}
          >
            {this.props.data[86].document_numder}
          </div>
          <div className="col flex-item-empty"></div>
          <div className="col flex-item-empty"></div>
          <div className="col flex-item-empty"></div>
          <div className="col flex-item-empty"></div>
          <div className="col flex-item-empty"></div>
          <div className="col flex-item-empty"></div>
          <div className="col flex-item-empty"></div>
          <div className="col flex-item-empty"></div>
          <div className="col flex-item-empty"></div>
          <div className="col flex-item-empty"></div>
          <div className="col flex-item-empty"></div>
          <div className="col flex-item-empty"></div>
          <div className="col flex-item-empty"></div>
          <div className="col flex-item-empty"></div>
        </div>
      </div>
    );
  }
}
