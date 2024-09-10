import React, { Component } from "react";
import { connect } from "react-redux";

class DemoReduxMini extends Component {
  render() {
    console.log(this.props);    
    return <div>DemoReduxMini</div>;
  }
}

let mapStateToProps = (state) => {
  // lấy data từ redux về và truyền thành props của component
  return {
    number: state.number,
  };
};

export default connect(mapStateToProps)(DemoReduxMini);
