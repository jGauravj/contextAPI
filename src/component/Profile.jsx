import UserContext from "../context/UserContext";
import { useContext } from "react";

const Profile = () => {
  const { user } = useContext(UserContext);

  if (!user) return <div className="text-center font-semibold text-red-800 mt-3">Please login</div>;

  return <div className="text-center font-semibold mt-3">Welcome {user.name} </div>;
};

export default Profile;
