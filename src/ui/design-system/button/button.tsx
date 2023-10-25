import clsx from "clsx";

interface Props{
    size?: "small"| "medium"|"large"
    variant?: "accent"|"secondary"|"outline"|"disabled"|"ico";
    icon?: any;
    iconTheme?: "accent"|"secondary"|"gray";
    iconPosition?: "left"|"right";
    disabled?: boolean;
    isLoading?: boolean;
    children?: React.ReactNode;

}


export const Button=({
    size = "medium",
    variant = "accent",
    icon,
    iconTheme ="accent",
    iconPosition ="right",
    disabled,
    isLoading,
    children,

}:Props)=>{

    let variantStyles:string = "",
    sizeStyles:string = "", 
    icoSize:number= 0;

    switch (variant) {
        case "accent"://DEFAULT
            variantStyles = "bg-primary hover:bg-primary-400 text-white rounded";
            break;
        case "secondary":
            variantStyles = "bg-primary-200 hover:bg-primary-300/50 text-primary rounded";
            break;
        case "outline":
            variantStyles = "bg-white hover:bg-gray-400/50 boder boder-gray-500 text-gray-900 rounded";
            break;
        case "disabled":
            variantStyles = "bg-gray-400 border border-gray-500 text-gray-600 rounded cursor-not-allowed";
            break;
        case "ico":
            variantStyles = "";
            break;
    }

    switch (size) {
        case "small":
            sizeStyles="text-caption3 font-meduim px-[14px] py-[12px]";
            break;
        case "medium"://DEFAULT
            sizeStyles="text-caption2 font-meduim px-[18px] py-[15px]";
            break;
        case "large":
            sizeStyles="text-caption1 font-meduim px-[22px] py-[18px]";
            break;

    }

    return(
        <>
            <button
                type="button"
                className={clsx(variantStyles,icoSize,sizeStyles, "")} 
                onClick={()=>console.log("click")} 
                disabled={disabled}
            >
                {children}
            </button>
        </>
    );
};