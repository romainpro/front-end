import clsx from "clsx";

interface Props{
    isLoading:boolean;
    placeholder:string;
    type?:"text"|"email"|"password";
    register:any;
    errors:any;
    errorMsg?:string;
    id:string;
    resuired?:boolean;
    isAutocompleted?:boolean
}



export const Input=({
    isLoading,
    placeholder,
    type="text",
    register,
    errors,
    errorMsg ="tu doit renseigner ce champ",
    id,
    resuired=true,
    isAutocompleted=false,
}:Props)=>{
    return (
        <input type={type}
        placeholder={placeholder}
        className={clsx(
            "w-full p-4 font-light border boreder-gray-400 rounded focus:outline-none focus:ring-1 focus:ring-primary"
        )}
        disabled={isLoading} 
        {...register(id,{
            required:{
                value:resuired , message:{errorMsg}}})}
         autoComplete={isAutocompleted ? "on" :"off"}
        />
    )
}