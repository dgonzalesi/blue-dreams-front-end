/* eslint-disable import/no-extraneous-dependencies */
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import currUser from '../components/User';

export const useIsAuthenticated = () => !!localStorage.getItem('token');

export const useCurrentUser = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.user.data);

  useEffect(() => {
    dispatch(currUser());
  }, []);

  return currentUser;
};
