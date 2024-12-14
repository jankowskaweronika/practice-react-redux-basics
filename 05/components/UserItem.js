import React from 'react';
import { useDispatch } from 'react-redux';
import { removeUser } from '../actions/actions';



const UserItem = ({ name = 'Default Name', id = -1 }) => {
  const dispatch = useDispatch();
  return (
    <li>
      {name} <button onClick={() => dispatch(removeUser(id))}>usuń</button>
    </li>
  );
};
export default UserItem;