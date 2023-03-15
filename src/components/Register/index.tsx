import React from "react";
import { useState } from "react";
import { Button, TextInput,PasswordInput  } from "@mantine/core";
import axios from "axios";
import { useForm } from "@mantine/form";
import { AxiosInstance } from './../../config/axiosInstance';

type registerFormData = {
  fullName: string;
  userName: string;
  email: string;
  password: string;
  contact: number;
};

function RegisterForm() {

  const [error, setError] = React.useState<string>("");

  const form = useForm<registerFormData>({
    initialValues: {
      fullName: "",
      userName: "",
      email: "",
      password: '',
      contact: 0,
    },
  });

  const handleFormSubmit = async(data: registerFormData) => {
    try {
      console.log("Working");
      const response = await AxiosInstance.post("/user", data)
      console.log(response);
    } catch (error:any) {
      setError(error.response?.data?.msg ?? "Error Occurred");
      console.log(error);
    }

  };

  return (
    <form onSubmit={form.onSubmit(handleFormSubmit)}>
      <TextInput 
      label="User Name" 
      required
      {...form.getInputProps("userName")} />


      <PasswordInput 
      label="Password" 
      required
      {...form.getInputProps("password")} />


      <Button type="submit">
        Register
      </Button>
    </form>
  );
}

export default RegisterForm
