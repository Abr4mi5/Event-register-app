import { useState } from "react";
import axios from "axios";
import { API } from "../../api/const";
import styles from "./FormComponent.module.scss";
const FormComponent = () => {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    age: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(formData);
      await axios.post(`${API}/clients`, formData);

      console.log("Form submitted successfully");
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className={styles.formContainer}>
      <div className={styles.formTitle}>New Client</div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="fullname"
          value={formData.fullName}
          onChange={handleChange}
          placeholder="Full Name"
          className={styles.fullWidth}
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          className={styles.fullWidth}
        />
        <input
          type="number"
          name="age"
          value={formData.age}
          onChange={handleChange}
          placeholder="Age"
          className={styles.fullWidth}
        />
        <button type="submit" className={styles.loginButton}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default FormComponent;
