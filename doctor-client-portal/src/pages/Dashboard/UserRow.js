import React from "react";
import { toast } from "react-toastify";

const UserRow = ({ user, refetch ,index}) => {
  const { email, role } = user;

  const removeUser =()=>{
    fetch(`https://secret-ravine-18127.herokuapp.com/user/${email}`,{
      method: 'DELETE',
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
    .then(res => res.json())
    .then(data =>{
      if(data.deletedCount){
        toast.success(`user: ${email} is deleted`);
        refetch();
      }
    });
  };
  const makeAdmin = () => {
    fetch(`https://secret-ravine-18127.herokuapp.com/user/admin/${email}`, {
      method: "PUT",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => {
        if (res.status === 403) {
          toast.error("Failed to Make an admin");
        }
        return res.json();
      })
      .then((data) => {
        if (data.modifiedCount > 0) {
          refetch();
          toast.success(`Successfully made an admin`);
        }
      });
  };
  return (
    <tr>
      <th>{index+ 1}</th>
      <td>{email}</td>
      <td>
        {role !== "admin" && (
          <button onClick={makeAdmin} className="btn btn-xs">
            Make Admin
          </button>
        )}
      </td>
      <td><button onClick={removeUser} className="btn btn-xs">Remove User</button></td>
    </tr>
  );
};

export default UserRow;
