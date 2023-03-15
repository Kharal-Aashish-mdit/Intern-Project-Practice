import React from "react";
import { useForm } from "@mantine/form";
import { useCookies } from "react-cookie";
import { Button, TextInput, PasswordInput } from "@mantine/core";

import { AxiosInstance, AxiosInstanceAuth } from "../../config/axiosInstance";

export type LoginData = {
  userName: string;
  password: string;
};

function LoginForm() {
  const [cookies, setCookie] = useCookies();
  const [error, setError] = React.useState<string>("");
  const form = useForm<LoginData>({
    initialValues: {
      userName: "",
      password: "",
    },
  });

  React.useEffect(()=> {
    console.log("Updated",cookies)
  },[cookies])

  const handleFormSubmit = async (data: LoginData) => {
    try {
      console.log("Working");
      const response = await AxiosInstance.post("/user/login", data);
      const token = (response?.data?.token)
      // document.cookie = token
      console.log(token)
      setCookie('token', token);
    } catch (error:any) {
      setError(error.response?.data?.msg ?? "Error Occurred");
      console.log(error)
    }
  };
  return (
    <form onSubmit={form.onSubmit(handleFormSubmit)}>
      <TextInput
        label="Email"
        placeholder="Enter Registered Email"
        required
        {...form.getInputProps("userName")}
      />

      <PasswordInput
        label="Password"
        placeholder="Enter Password"
        required
        {...form.getInputProps("password")}
      />
      {error ? <p>{error}</p> : null}
      <Button type="submit">Login</Button>
    </form>
  );
}

export default LoginForm;
