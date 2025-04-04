import { useEffect } from "react";
import { actions } from "../actions";
import { useAuth } from "../hooks/useAuth";
import useAxios from "../hooks/useAxios";
import useProfile from "../hooks/useProfile";
export default function ProfilePage() {
  const { state, dispatch } = useProfile();
  const { api } = useAxios();
  const { auth } = useAuth();

  useEffect(() => {
    dispatch({ type: actions.profile.DATA_FETCHING });
    const fetchProfile = async () => {
      try {
        const response = await api.get(
          `${import.meta.env.VITE_SERVER_BASE_URL}/profile/${auth?.user.id}`
        );

        console.log("posts are", response?.data?.posts);
        if (response.status === 200) {
          dispatch({
            type: actions.profile.DATA_FETCHED,
            payload: response.data,
          });
        }
      } catch (error) {
        console.error(error);
        dispatch({
          type: actions.profile.DATA_FETCH_ERROR,
          error: error.message,
        });
      } finally {
        console.log("");
      }
    };

    fetchProfile();
  }, []);
  if (state?.loading) {
    return <p>Loading your user data </p>;
  }
  return <div>{state?.user?.firstName}</div>;
}
