import React from 'react';
import { connect } from 'react-redux';
import NavigationWithoutProps from 'src/utils/NavigationWithoutProps';
import withProvider from 'src/components/HOC/withProvider';
import Stack from 'src/components/Navigator';

console.disableYellowBox = true;

const App = () => (
  <Stack ref={(navigatorRef) => {
    NavigationWithoutProps.setTopLevelNavigator(navigatorRef);
  }}
  />
);

const mapStateToProps = null;

const mapDispatchToProps = null;

export default withProvider(
  connect(mapStateToProps, mapDispatchToProps)(App),
);
