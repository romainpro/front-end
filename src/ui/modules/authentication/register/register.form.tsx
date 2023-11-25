import { FormType } from "@/types/forms";

interface Props {
  form: FormType;
}

export const RegisterFrom = ({ form }: Props) => {
  
    const { control, onsubmit, errors, isLoading, register, handleSubmit } = form;

  
  return <>
  <form onSubmit={handleSubmit(onsubmit)}>
    <input defaultValue="test" {...register("example")} />

    <input placeholder="test 2" {...register("exampleRequided",{required:true})}/>

    {errors.exampleRequided && <span> This field is required</span>}

    <input type="submit" />

  </form>
  </>;
};
