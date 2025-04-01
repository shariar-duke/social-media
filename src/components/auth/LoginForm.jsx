import axios from "axios";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import Field from "../common/Feild";

export default function LoginForm() {
  const navigate = useNavigate();
  const { setAuth } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm();
  const submitForm = async (formData) => {
    // Make Api Call
    try {
      console.log(
        "VITE_SERVER_BASE_URL:",
        import.meta.env.VITE_SERVER_BASE_URL
      );
      const response = await axios.post(
        `${import.meta.env.VITE_SERVER_BASE_URL}/auth/login`,

        formData
      );

      console.log(response);

      if (response.status === 200) {
        const { token, user } = response.data;
        if (token) {
          const authToken = token.token;
          const refreshToken = token.refreshToken;

          console.log(`Login time auth token ${authToken}`);
          console.log(`Login time refresh token ${refreshToken}`);

          setAuth({ user, authToken, refreshToken });
          navigate("/");
        }
      }
    } catch (error) {
      console.error(error);
      setError("root.random", {
        type: "random",
        message: `User with email ${formData.email} is not found`,
      });
    }
  };
  return (
    <form
      onSubmit={handleSubmit(submitForm)}
      className="border-b border-[#3F3F3F] pb-10 lg:pb-[60px]"
    >
      {/* Email Field with error prop */}
      <Field label="Email" error={errors.email}>
        <input
          {...register("email", { required: "Email ID is Required" })}
          type="email"
          name="email"
          id="email"
          className={`auth-input ${
            errors.email ? "border-red-500" : "border-gray-200"
          }`}
        />
      </Field>

      {/* Password Field */}
      <Field label="Password" error={errors.password}>
        <input
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 8,
              message: "Your password must be at least 8 characters",
            },
          })}
          className={`auth-input ${
            errors.password ? "border-red-500" : "border-gray-200"
          }`}
          type="password"
          name="password"
          id="password"
        />
      </Field>

      {/* Submit Button */}
      <Field>
        <p className="text-red-500 text-[14px]">
          {errors?.root?.random?.message}
        </p>
        <button
          className="auth-input bg-lwsGreen font-bold text-deepDark transition-all
hover:opacity-90"
        >
          Login
        </button>
      </Field>
    </form>
  );
}
