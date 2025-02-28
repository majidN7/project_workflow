 

import React, { PureComponent } from 'react';

import ErrorTab from './ErrorTab';
import MultiSheetTab from './MultiSheetTab';


export function createTab(tabName, providers) {

  class EditorTab extends PureComponent {

    static getDerivedStateFromError(error) {
      return {
        hasError: true
      };
    }

    constructor(props) {
      super(props);

      this.state = {};

      this.tabRef = React.createRef();
    }

    triggerAction(action, options) {
      return this.tabRef.current.triggerAction(action, options);
    }

    componentDidCatch(error, info) {
      this.props.onError(error, info);
    }

    componentDidMount() {
      this.props.onShown();
    }

    render() {
      const {
        tab,
        ...otherProps
      } = this.props;

      const {
        hasError
      } = this.state;

      const Tab = hasError ? ErrorTab : MultiSheetTab;

      return (
        <Tab
          id={ tab.id }
          tab={ tab }
          { ...otherProps }
          xml={ tab.file.contents }
          ref={ this.tabRef }
          providers={ providers }
        />
      );
    }

  }

  EditorTab.displayName = tabName;

  return EditorTab;
}