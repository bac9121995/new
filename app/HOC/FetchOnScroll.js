import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import _throttle from 'lodash.throttle';

const NUMBER_OF_PAGES = 5;

export default function (ComposedComponent) {
  class FetchOnScroll extends Component {
    constructor(props) {
      super(props);
      this.onScroll = this.onScroll.bind(this);
    }

    componentDidMount() {
      window.addEventListener('scroll', this.onScroll, false);
    }

    componentWillUnmount() {
      window.removeEventListener('scroll', this.onScroll, false);
    }

    onScroll() {
      // delay the scroll event

      _throttle(() => {
        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 200) {
        }
      }, 100)();
    }

    render() {
      return <ComposedComponent {...this.props} />;
    }
  }

  FetchOnScroll.propTypes = {
  };

  return connect((state) =>
  ({}),
  {})(FetchOnScroll);
}
