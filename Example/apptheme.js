'use strict';

import React, {
  Component,
} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import theme, {styles, Example} from 'react-native-theme';
import DefaultTheme from './theme/default';
import RedTheme from './theme/red';
import ThemeExample from './ThemeExample';
import RedExample from './RedExample';

// Setup Themes
theme.add(DefaultTheme);
// theme.addComponents({Example: require('./ThemeExample')});
theme.addComponents({Example: ThemeExample});

// theme.add(require('./theme/red'), 'red');
theme.add(RedTheme, 'red');
// theme.addComponents({Example: require('./RedExample')}, 'red');
theme.addComponents({Example: RedExample}, 'red');

const App = React.createClass({
  getInitialState() {
    theme.setRoot(this);
    return null;
  },
  _defaultTheme() {
    if (theme.name !== 'default') {
      theme.active();
    }
  },
  _redTheme() {
    if (theme.name !== 'red') {
      theme.active('red');
    }
  },
  render() {
    return (
      <View style={styles.container}>
        <Example />
        <TouchableOpacity>
          <View style={styles.button}>
            <Text style={styles.label}>BUTTON TEST</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={this._defaultTheme}>
          <View class="button default">
            <Text class="label">DEFAULT THEME</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={this._redTheme}>
          {/*<View class="button red">*/}
          <View style={[styles.button, styles.red]}>
            <Text class="label">RED THEME</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
});

module.exports = App;