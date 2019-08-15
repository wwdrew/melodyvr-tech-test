/**
 * @format
 */

/* Two of the packages I use cause yellow box errors, I've disabled them for
  now so they're not distracting
*/

console.disableYellowBox = true;

import {AppRegistry} from 'react-native';
import App from './src/MelodyVRTest';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
