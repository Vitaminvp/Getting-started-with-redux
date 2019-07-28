/**
 * Legacy Context
 *
 * The legacy context API will be removed in
 * a future major version. Use the new context API introduced with version 16.3.
 * The legacy API will continue working for all 16.x releases.
 */

import React, { Component } from "react";

class Provider extends Component {
  getChildContext() {
    return {
      store: this.props.store
    };
  }
  render() {
    return this.props.children;
  }
}

Provider.childContextTypes = {
  store: React.PropTypes.object
};

export default Provider;
