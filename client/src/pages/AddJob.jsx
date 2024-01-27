import { FormRow, FormRowSelect, SubmitBtn } from "../components";
import Wrapper from "../assets/wrappers/DashboardFormPage";
import {
  useOutletContext,
  Form,
  useNavigation,
  redirect,
} from "react-router-dom";
import { JOB_STATUS, JOB_TYPE } from "../../../utils/constants";
import { toast } from "react-toastify";
import customFetch from "../utils/customFetch";

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  try {
    console.log("sending job data");
    await customFetch.post("/jobs", data);
    console.log("sent job data");
    toast.success("job added");
    return redirect("/dashboard/all-jobs");
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
};

const AddJob = () => {
  // const { user } = useOutletContext();

  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  return (
    <Wrapper>
      <Form method="post" className="form">
        <h4 className="form-title">Add Job</h4>
        <div className="form-center">
          <FormRow type="text" name="position" />
          <FormRow type="text" name="company" />
          <FormRow
            type="text"
            name="location"
            labelText="job location"
            defaultValue=""
          />
          <FormRowSelect
            list={Object.values(JOB_STATUS)}
            name="status"
            labelText="job status"
            defaultValue={JOB_STATUS.PENDING}
          />
          <FormRowSelect
            list={Object.values(JOB_TYPE)}
            name="type"
            labelText="job type"
            defaultValue={JOB_TYPE.FULL_TIME}
          />

          <SubmitBtn formBtn />
        </div>
      </Form>
    </Wrapper>
  );
};
export default AddJob;
