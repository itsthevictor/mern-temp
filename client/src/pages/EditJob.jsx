import { FormRow, FormRowSelect, SubmitBtn } from "../components";
import Wrapper from "../assets/wrappers/DashboardFormPage";
import {
  useLoaderData,
  Form,
  useNavigation,
  redirect,
  useParams,
} from "react-router-dom";
import { JOB_STATUS, JOB_TYPE } from "../../../utils/constants";
import { toast } from "react-toastify";
import customFetch from "../utils/customFetch";
import axios from "axios";
import { useState, useEffect } from "react";

export const loader = async ({ params }) => {
  // const { id } = params;
  // console.log(id);

  // try {
  //   const { data } = await customFetch.get(`api/v1/jobs/${id}`);
  //   console.log(`this is the response: ${data}`);
  //   return response;
  // } catch (error) {
  //   toast.error(error?.response?.data?.msg);
  //   // return redirect("/dashboard/all-jobs");
  return null;
  // }
};

export const action = async ({ params, request }) => {
  console.log("action started");
  const { id } = params;
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  try {
    console.log(data);
    await customFetch.patch(`/jobs/${id}`, data);
    console.log("sent job data");
    toast.success("job updated");
    return redirect("/dashboard/all-jobs");
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
};

const EditJob = () => {
  const { id } = useParams();
  const [jobData, setJobData] = useState(null);
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const { data } = await customFetch.get(`/jobs/${id}`, {
        withCredentials: true,
      });
      const { job } = data;
      console.log(job);
      setJobData(job);
    } catch (error) {
      console.log(error);
      toast.error(error?.response?.data?.msg);
      return redirect("/dashboard/all-jobs");
    }
  };

  return (
    <Wrapper>
      <Form method="post" className="form">
        <h4 className="form-title">edit job</h4>
        <div className="form-center">
          <FormRow
            type="text"
            name="position"
            defaultValue={jobData ? jobData.position : ""}
          />
          <FormRow
            type="text"
            name="company"
            defaultValue={jobData ? jobData.company : ""}
          />
          <FormRow
            type="text"
            name="location"
            labelText="job location"
            defaultValue={jobData ? jobData.location : ""}
          />
          <FormRowSelect
            type="select"
            name="status"
            labelText="job status"
            defaultValue={jobData ? jobData.status : ""}
            list={Object.values(JOB_STATUS)}
          />
          <FormRowSelect
            type="select"
            name="type"
            labelText="job type"
            defaultValue={jobData ? jobData.type : ""}
            list={Object.values(JOB_TYPE)}
          />
          <SubmitBtn formBtn />
        </div>
      </Form>
    </Wrapper>
  );
};
export default EditJob;
