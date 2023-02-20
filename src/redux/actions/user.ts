import axios from 'axios';
import {Dispatch} from 'react';
import {setUser} from '../slices/userSlice';

export const fetchUserDetails = () => async (dispatch: Dispatch) => {
  axios
    .get('https://dummy.restapiexample.com/api/v1/employees')
    .then(function (response) {
      // handle success
      dispatch(setUser(response?.data?.data));
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    });
};
