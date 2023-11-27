import { FormType } from "@/types/forms";
import { Input } from "@/ui/design-system/Forms/input";
import { Button } from "@/ui/design-system/button/button";

interface Props {
  form: FormType;
}

export const RegisterFrom = ({ form }: Props) => {
  const { control, onsubmit, errors, isLoading, register, handleSubmit } = form;

  return (
  <form onSubmit={handleSubmit(onsubmit)}>

 
    <Input 
     isLoading={isLoading}
     placeholder="johnDoe@mail.com"
     type="email"
     register={register}
     errors={errors}
     errorMsg ="tu doit renseigner ce champ"
     id="email"
     isAutocompleted={false}
     />
    <Button isLoading={isLoading} type="submit" fullWith >S'incrire</Button>
  </form>
  );
};
