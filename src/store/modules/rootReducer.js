import { combineReducers } from 'redux';

import album from './album/reducer';
import track from './track/reducer';

export default combineReducers({
  album,
  track,
});
