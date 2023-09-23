import { useState } from "react";
import { useAuthContext } from "./useAuthContext";

export const useContact = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const { dispatch } = useAuthContext();

  const contact = async (email, phone_number, first_name, message) => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(
        " https://backend.getlinked.ai/hackathon/contact-form",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email,
            phone_number,
            first_name,
            message,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Data could not be fetch");
      }

      const result = await response.json();

      if (response.ok) {
        localStorage.setItem("user", JSON.stringify(result));

        dispatch({ type: "CONTACT", payload: result });
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { contact, error, loading };
};
