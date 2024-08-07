import React from "react";
import DeleteAllUsers from "./DeleteAllUsers";
import styled from "styled-components";
import { fakeUserData } from "../api";
import { useDispatch, useSelector } from "react-redux";
import { addUser, deleteUser, editUser } from "../Slices/UserSlice";
import { MdDeleteForever } from "react-icons/md";

const UserDetails = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);
  const handleAddUser = (fakeUserData) => {
    dispatch(addUser(fakeUserData()));
  };
  const handleDeleteUser = (index) => {
    dispatch(deleteUser(index));
  };
  const handleEditUser = (index) => {
    const newName = fakeUserData();
    const payload = {
      id: index,
      name: newName,
    };
    dispatch(editUser({ id: index, name: newName }));
  };
  return (
    <Wrapper>
      <div className='content'>
        <div className='admin-table'>
          <div className='admin-subtitle'>List of User Details</div>
          <button
            onClick={() => {
              handleAddUser(fakeUserData);
            }}
            className='btn add-btn'
          >
            Add New User
          </button>
        </div>
        <ul>
          {users.map((user, index) => (
            <li>
              <div key={index}>{user} </div>
              <div>
                <button
                  onClick={() => {
                    handleEditUser(index);
                  }}
                  className='btn'
                >
                  Edit
                </button>
                <button
                  className='delete-btn'
                  onClick={() => {
                    handleDeleteUser(index);
                  }}
                >
                  <MdDeleteForever className='delete-icon' />
                </button>
              </div>
            </li>
          ))}
        </ul>
        <hr />
        <DeleteAllUsers />
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  margin: 1rem 3.2rem;

  .content ul {
    list-style-type: none !important;
    display: flex;
    flex-direction: column;
  }
  li {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
  }

  h3 {
    margin: 0;
  }

  .admin-table {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin: 4rem 0;
  }

  .admin-subtitle {
    font-size: 3.2rem;
  }

  .delete-btn {
    background-color: transparent;
    border: none;
    margin-left: 10px;
  }

  .delete-icon {
    font-size: 2.6rem;
    color: #f12711;
    filter: drop-shadow(0.2rem 0.2rem 0.5rem rgb(255 0 0 / 0.2));
    cursor: pointer;
  }
  @media screen and (max-width: 998px) {
    .admin-subtitle {
      margin-bottom: 1.6rem;
    }
  }
`;

export default UserDetails;
