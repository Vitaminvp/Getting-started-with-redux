import React from "react";
import Link from "./Link";
// import PropTypes from "prop-types";
// import Context from "../redux/context";
import { connect } from "react-redux";
import { setFilter } from "../actionCreators";

class FilterLink extends React.Component {
  //static contextType = Context;
  componentDidMount() {
    // const store = this.context;
    // this.unsubscribe = store.subscribe(() => {
    //   this.forceUpdate();
    // });
  }
  componentWillUnmount() {
    // this.unsubscribe();
  }

  render() {
    // const store = this.context;
    // const { children, filter } = this.props;
    // const { visibilityFilter } = store.getState();
    return (
      <Link active={this.props.active} onClick={this.props.onClick}>
        {this.props.children}
      </Link>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  active: state.visibilityFilter === ownProps.filter
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick() {
    dispatch(setFilter(ownProps.filter));
  }
});

// FilterLink.contextType = Context;
// FilterLink.propsTypes = {
//     store: PropTypes.object
// };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FilterLink);
