import { Button } from "@/ui/design-system/button/button";
import { footerSocialNetworksLinks } from "./app-links";
import { v4 as uuidv4 } from "uuid";
import clsx from "clsx";
import { RiFacebookBoxFill } from "react-icons/ri";
import { LinkTypes } from "@/lib/link-types";

interface Props {
  theme?:"gray"|"accent"|"secondary"
  className?: string;
}
  const actioon =()=>{
    console.log("hello world")
  }
export const SocialNetworksButton = ({ className , theme = "accent"}: Props) => {
  const icoList = footerSocialNetworksLinks.map((socialNetworks) => (
    <Button
      key={uuidv4()}
      variant="ico"
      iconTheme={theme}
      icon={{
        icon: socialNetworks.icon ? socialNetworks.icon : RiFacebookBoxFill,
      }} 
    action={actioon}
    />
  ));

  return (
    <div className={clsx(className, "flex items-center gap-2.5")}>
      {icoList}
    </div>
  );
};
