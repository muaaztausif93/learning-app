import {createSelector} from 'reselect';

const selectSubstate = (state: any) => state.users;

export const selectUser = createSelector(
  selectSubstate,
  substate => substate.currentUser,
);
