import { useState, useEffect } from "react";
import axios from "axios";
import { API } from "../../api/const";
import styles from "./UserTable.module.scss";

const UserTable = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(`${API}/clients`);
        setUsers(response.data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  const handleEdit = async (user) => {
    setSelectedUser(user);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedUser(null);
    setIsModalOpen(false);
  };
  const handleChange = (e) => {
    setSelectedUser({ ...selectedUser, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { _id, ...user } = selectedUser;
      await axios.put(`${API}/clients/${_id}`, user);
      setIsModalOpen(false);
      const response = await axios.get(`${API}/clients`);
      setUsers(response.data);
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      try {
        await axios.delete(`${API}/clients/${id}`);
        setUsers(users.filter((user) => user._id !== id));
      } catch (error) {
        console.error("Error deleting user:", error);
      }
    }
  };

  return (
    <div>
      <table className={styles.usertable}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Age</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id}>
              <td>{user.fullname}</td>
              <td>{user.email}</td>
              <td>{user.age}</td>
              <td>
                <button
                  className={styles.edit}
                  onClick={() => handleEdit(user)}
                >
                  Edit
                </button>
                <button
                  className={styles.delete}
                  onClick={() => handleDelete(user._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {isModalOpen && (
        <div>
          <div className={styles.usertable}>
            <span className="close" onClick={handleCloseModal}>
              &times;
            </span>
            <h2>Edit User</h2>
            <form onSubmit={handleSubmit}>
              <label htmlFor="fullname">Full Name:</label>
              <input
                type="text"
                id="fullname"
                name="fullname"
                value={selectedUser.fullname || ""}
                onChange={handleChange}
                className={styles.input}
              />
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={selectedUser.email || ""}
                onChange={handleChange}
                className={styles.input}
              />
              <label htmlFor="age">Age:</label>
              <input
                type="number"
                id="age"
                name="age"
                value={selectedUser.age || ""}
                onChange={handleChange}
                className={styles.input}
              />
              <button className={styles.edit} type="submit">
                Save
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserTable;
