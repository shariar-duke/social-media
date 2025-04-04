import { useReducer } from "react";
import { ProfileContext } from "../context";
import { initialState, profileReducer } from "../reducers/ProfileReducer";

const ProfileProvider = ({ Children }) => {
  const [state, dispatch] = useReducer(profileReducer, initialState);

  return (
    <ProfileContext.Provider value={{ state, dispatch }}>
      {Children}
    </ProfileContext.Provider>
  );
};

export default ProfileProvider;
