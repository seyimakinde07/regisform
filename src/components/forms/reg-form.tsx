import React, { useState } from "react";
import "./form.css";



type Props = {};

const Regform = (props: any) => {
  const [visible, setVisible] = useState(false);
  const FormValidation = () => {
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      selection: ''
    });
    const [errors, setErrors] = useState({});
  
    const handleChange = (e:any) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };
  
    const handleSubmit = (e:any) => {
      e.preventDefault();
      const validationErrors = validateForm(formData);
      setErrors(validationErrors);
      if (Object.keys(validationErrors).length === 0) {
        // Form submission logic goes here
        console.log('Form submitted successfully');
      }
    };
  
    const validateForm = (data:any) => {
      const errors = {
        firstName: '',
        email: '',
        selection: ''

      };
      if (!data.name.trim()) {
        errors.firstName = 'Name is required';
      }
      if (!data.email.trim()) {
        errors.email = 'Email is required';
      } else if (!isValidEmail(data.email)) {
        errors.email = 'Invalid email format';
      }
      if (!data.selection) {
        errors.selection = 'Selection is required';
      }
      return errors;
    };
  
    const isValidEmail = (email:any) => {
      // Basic email validation regex
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    };
    };
 
    

  return (

    <div className="form-container">
      <h1 className="text-black form-label2"> Register</h1>
      <h4 className="text-black form-label2">
        Please fill your information below
      </h4>
      <form action="" method="post" px-5 >
        <div className="row"></div>

        <div className="row">
          <div className="col">
            <div className="mb-3">
              <label className="form-label1">First Name:</label>
              <input
                type="text"
                name="firstname"
                className="form-control custom-option"
                id="firstname"
                aria-describedby="emailHelp"
              />
            </div>
          </div>
          <div className="col">
            <div className="mb-3">
              <label className="form-label1">Last Name:</label>
              <input
                type="lastname"
                name="lastname"
                className="form-control custom-option"
                id="lastname"
                aria-describedby="emailHelp"
              />
            </div>
          </div>
        </div>

        <div className="mb-3">
          <label className="form-label1">Email address</label>
          <input
            type="email"
            name="email"
            className="form-control custom-option"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>

        <div className="row-col-mb-3">
          <label className="form-label1">Department:</label>
        </div>
        <div className="row custom-option">
          <select id="department" name="department">
            <option value="">Select your Department</option>
            <option value="choir">Choir</option>
            <option value="youth">Media</option>
            <option value="ushers">Ushers</option>
            <option value="greeters">Greeters</option>
          </select>
        </div>

        <div className="row-col-mb-3">
          <label className="form-label">Security Question1:</label>
        </div>

        <div className="row custom-option">
          <select id="department" name="department"  onClick={() => setVisible(true)}>
            <option value="">Select a question</option>
            <option value="">1</option>
            <option value="">2</option>
            <option value="">3</option>
            <option value="">4</option>
          </select>
        </div>

        {
          visible && (
            <div className="mb-3">
          <label className="form-label1">Answer</label>
          <input
            type="text"
            name="aws"
            className="form-control custom-option"
            id="exampleInputaws"
            aria-describedby="answer"
          />
        </div>
          )
        }

        <div className="col-md-2 .form-container ">
          <a href="#" className="submit-button form-label btn ">Register</a>
        </div>
      </form>
    </div>
  );
};

export default Regform;
