import React from "react";
import Link from "./Link";
import { ACTIONS_TYPE } from "../reducers";
// import PropTypes from "prop-types";
import Context from "../redux/context";

class FilterLink extends React.Component {
  static contextType = Context;
  componentDidMount() {
    const store = this.context;
    this.unsubscribe = store.subscribe(() => {
      this.forceUpdate();
    });
  }
  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    const store = this.context;
    const { children, filter } = this.props;
    const { visibilityFilter } = store.getState();
    return (
      <Link
        active={visibilityFilter === filter}
        onClick={() => {
          store.dispatch({
            type: ACTIONS_TYPE.SET_VISIBILITY_FILTER,
            filter
          });
        }}
      >
        {children}
      </Link>
    );
  }
}

// FilterLink.contextType = Context;
// FilterLink.propsTypes = {
//     store: PropTypes.object
// };

export default FilterLink;
