import { useForm } from "react-hook-form";
import { useSignup } from "./useSignup";
import Form from "../../components/Form";
import FormRow from "../../components/FormRow";

function SignupForm() {
  const { signup, isLoading } = useSignup();
  const {
    register,
    formState: { errors },
    getValues,
    handleSubmit,
    reset,
  } = useForm();

  function onSubmit({ username, email, password }) {
    signup(
      {
        username,
        email,
        password,
      },
      {
        onSettled: reset(),
      },
    );
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormRow label="Username" error={errors?.username?.message}>
        <input
          className="rounded-sm border border-slate-300 bg-slate-50 px-5 py-3 shadow-sm"
          type="text"
          id="username"
          disabled={isLoading}
          {...register("username", { required: "This field is required" })}
        />
      </FormRow>

      <FormRow label="Email address" error={errors?.email?.message}>
        <input
          className="rounded-sm border border-slate-300 bg-slate-50 px-5 py-3 shadow-sm"
          type="email"
          id="email"
          disabled={isLoading}
          {...register("email", {
            required: "This field is required",
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "Provide a valid email address",
            },
          })}
        />
      </FormRow>
      <FormRow
        label="Password (min 8 characters)"
        error={errors?.password?.message}
      >
        <input
          className="rounded-sm border border-slate-300 bg-slate-50 px-5 py-3 shadow-sm"
          type="password"
          id="password"
          disabled={isLoading}
          {...register("password", {
            required: "This field is required",
            minLength: {
              value: 8,
              message: "Password requires minimum of 8 characters",
            },
          })}
        />
      </FormRow>

      <FormRow label="Repeat password" error={errors?.passwordConfirm?.message}>
        <input
          className="rounded-sm border border-slate-300 bg-slate-50 px-5 py-3 shadow-sm"
          type="password"
          id="passwordConfirm"
          disabled={isLoading}
          {...register("passwordConfirm", {
            required: "This field is required",
            validate: (value) =>
              value === getValues().password || "Passwords need to match",
          })}
        />
      </FormRow>

      <FormRow>
        <button type="reset" onClick={reset} disabled={isLoading}>
          Cancel
        </button>
        <button disabled={isLoading}>Create Account</button>
      </FormRow>
    </Form>
  );
}

export default SignupForm;
