import { SubmitHandler, useForm } from "react-hook-form";
import { RegisterView } from "./register.view";
import { RegisterFormFielsType } from "@/types/forms";

export const RegisterContainer = () => {

  const isloading =false;

  const { 
    handleSubmit,
    control,
    formState:{errors},
    register,
    setError,
    reset,
   } = useForm<RegisterFormFielsType>();


const onSubmit: SubmitHandler<RegisterFormFielsType> = async (formData)=>{
  console.log('formData',formData)
}


  return (
    <>
<RegisterView
  form={{
    control,
    errors,
    register,
    handleSubmit,
    onSubmit,
    isloading,
  }}
/>

    </>
  );
};
