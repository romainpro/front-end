import { Button } from "@/ui/design-system/button/button";
import { footerSocialNetworksLinks } from "./app-links";
import { v4 as uuidv4 } from "uuid";
import { RiFacebookBoxFill } from "react-icons/ri";
import clsx from "clsx";

interface Props{
     className?:string;
}


export const SocialNetworksButton=({className}:Props)=>{

    const icoList = footerSocialNetworksLinks.map((socialNetworks)=>(
        <Button
        key={uuidv4()}
        variant="ico"
        iconTheme="gray"
        icon={{icon:RiFacebookBoxFill}}
        />
    ))

    return(
        <div className={clsx(className,"flex items-center gap-2.5")}>
            {icoList}
        </div>
    )
}