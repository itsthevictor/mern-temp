import customFetch from "../utils/customFetch";
import {
  useLoaderData,
  Form,
  useNavigation,
  redirect,
  useParams,
} from "react-router-dom";

export const action = async ({ params }) => {
  console.log("delete job action");
  console.log(params);
  return null;
  // try {
  //   await customFetch.delete(`jobs/${id}`);
  //   toast.success("job deleted");
  //   return redirect("/dashboard/all-jobs");
  // } catch (error) {
  //   toast.error(error?.response?.data?.msg);
  //   return error;
  // }
};

const DeleteJob = () => {
  return <h1>delete job page</h1>;
};
export default DeleteJob;
