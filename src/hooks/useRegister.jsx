import { useState } from "react";
import { useAuthContext } from "./useAuthContext";

export const useRegister = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const { dispatch } = useAuthContext();

  const register = async (
    email,
    phone_number,
    team_name,
    group_size,
    project_topic,
    category,
    privacy_poclicy_accepted
  ) => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(
        " https://backend.getlinked.ai/hackathon/registration",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email,
            phone_number,
            team_name,
            group_size,
            project_topic,
            category,
            privacy_poclicy_accepted,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Data could not be fetch");
      }

      const result = await response.json();

      if (response.ok) {
        // localStorage.setItem("user", JSON.stringify(result));

        dispatch({ type: "LOGIN", payload: result });
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { register, error, loading };
};
