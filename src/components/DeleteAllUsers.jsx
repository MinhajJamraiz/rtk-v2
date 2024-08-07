import React from "react";
import { useDispatch } from "react-redux";
import { clearAllUsers } from "./../Slices/UserSlice";
import styled from "styled-components";

const DeleteAllUsers = () => {
  const dispatch = useDispatch();
  const handleDeleteAllUsers = () => {
    dispatch(clearAllUsers());
  };
  return (
    <Wrapper>
      <div>
        <button
          className='btn clear-btn'
          onClick={() => handleDeleteAllUsers()}
        >
          Delete All Users
        </button>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  .clear-btn {
    margin-top: 2rem;
  }
`;

export default DeleteAllUsers;
