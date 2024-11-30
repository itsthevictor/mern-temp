import { FormRow, SubmitBtn, Loading } from "../components";
import Wrapper from "../assets/wrappers/DashboardFormPage";
import { useOutletContext } from "react-router-dom";
import { useNavigation, Form } from "react-router-dom";
import customFetch from "../utils/customFetch";
import { toast } from "react-toastify";
import { useState } from "react";

const sendData = async (e) => {
  e.preventDefault();
  var data = new FormData(e.currentTarget);
  let formObject = Object.fromEntries(data);
  console.log(formObject);

  const file = formObject.avatar;
  if (file && file.size > 500000) {
    toast.error("file size too  large");
    return null;
  }
  try {
    await customFetch.patch("/users/update-user", formObject, {
      headers: {
        "Content-type": "multipart/form-data",
      },
    });
    toast.success("profile updated successfully");
    window.location.reload();
  } catch (error) {
    console.log(error);
    toast.error(error?.response?.data?.msg);
  }
};

const Profile = () => {
  const { user } = useOutletContext();
  const { name, lastName, email, location } = user;

  return (
    <Wrapper>
      <form method="post" className="form" onSubmit={sendData}>
        <h4 className="form-title">profile</h4>
        <div className="form-center">
          <div className="form-row">
            <label htmlFor="avatar" className="form-label">
              Select an image file (max 0.5MB)
            </label>
            <input
              type="file"
              id="avatar"
              name="avatar"
              className="form-input"
              accept="image/*"
            />
          </div>
          <FormRow type="text" name="name" defaultValue={name} />
          <FormRow
            type="text"
            name="lastName"
            labelText="last name"
            defaultValue={lastName}
          />
          <FormRow type="email" name="email" defaultValue={email} />
          <FormRow type="text" name="location" defaultValue={location} />

          <SubmitBtn formBtn />
        </div>
      </form>
      {/* )} */}
    </Wrapper>
  );
};
export default Profile;
