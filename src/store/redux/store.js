import { configureStore } from '@reduxjs/toolkit';
import usersReducer from './users';
import meetingReducer from './meeting';
import voiceUsersReducer from './voice-users';
import pollsReducer from './polls';
import currentPollReducer from './current-poll';
import currentUserReducer from './current-user';
import externalVideoMeetingsReducer from './external-video-meetings';

export const store = configureStore({
  reducer: {
    meetingCollection: meetingReducer,
    usersCollection: usersReducer,
    voiceUsersCollection: voiceUsersReducer,
    pollsCollection: pollsReducer,
    currentPollCollection: currentPollReducer,
    currentUserCollection: currentUserReducer,
    externalVideoMeetingsCollection: externalVideoMeetingsReducer,
    // ...other collections
  },
});