import { useParams } from "react-router-dom";

const User = () => {
  const { id } = useParams();
  return <div>User id is {id}</div>;
};

export default User;
