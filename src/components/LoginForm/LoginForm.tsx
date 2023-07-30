import { Controller, useForm } from "react-hook-form";

import CustomInput from "components/ui/CustomInput";
import { useAuth } from "hooks";
import { useNavigate } from "react-router-dom";
import { LoginFormType } from "types/types";
import { ErrorMsg, Form, LoginButton } from "./LoginForm.styles";
import { authenticate } from "utils/db";
import { useState } from "react";

const LoginForm = () => {
  const navigate = useNavigate();
  const [errorMsgLogin, seterrorMsgLogin] = useState<string>("");
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: "",
      password: "",
    },
  });
  const { signIn } = useAuth();

  const login = async (data: LoginFormType) => {
    authenticate(data)
      .then((res) => signIn(res, () => navigate("/")))
      .catch((err) => seterrorMsgLogin(err.msg));
  };
  return (
    <Form onSubmit={handleSubmit(login)}>
      <h1>Welcome back</h1>
      <h4 style={{ color: "gray" }}>Welcome back! Please enter your details</h4>
      <Controller
        name="username"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <CustomInput
            label="Username"
            placeholder="Enter your username"
            value={field.value}
            onChange={field.onChange}
            control={control}
          />
        )}
      />
      <Controller
        name="password"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <CustomInput
            label="Password"
            type="password"
            placeholder="Enter your password"
            value={field.value}
            onChange={field.onChange}
            control={control}
          />
        )}
      />
      <LoginButton type="submit" disabled={false}>
        Sign in
      </LoginButton>
      {errorMsgLogin && <ErrorMsg>{errorMsgLogin}</ErrorMsg>}
    </Form>
  );
};

export default LoginForm;
