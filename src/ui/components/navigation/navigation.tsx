import { Logo } from "@/ui/design-system/logo/logo";
import { Container } from "../container/container";
import { Typography } from "@/ui/design-system/typography/typography";
import { Button } from "@/ui/design-system/button/button";
import Link from "next/link";
import { ActiveLink } from "./active-link";

interface NavigationProps {}

export const Navigation = ({}: NavigationProps) => {
  return (
    <div className="border-b-2 border-gray-400">
      <Container className=" flex items-center justify-between py-1.5 gap-7">
        <Link href="/">
        <div className="flex items-center gap-2.5">
          <Logo size="small" />
          <div className="flex flex-col" >
            <div className="text-gray font-extrabold text-[24px] ">
              Coders Romain
            </div>
            <Typography variant="caption4" component="span" theme="gray">
              Trouve de l inspiration & reçois des feedbacks !
            </Typography>
          </div>
        </div>
        </Link>
        <div>
            <div className=" flex items-center gap-7">
                <Typography variant="caption3" component="div" className="flex items-center gap-7" >
                  <ActiveLink href="/design-system">Design system</ActiveLink>
                   <ActiveLink href="/projets">Projets</ActiveLink>
                   <ActiveLink href="/formation">Formation</ActiveLink>
                   <ActiveLink href="contact">Contacts</ActiveLink>
                </Typography>
        
                <div className="flex items-center gap-2">
                    <Button baseUrl="/connexion" size="small">Conexion</Button>
                    <Button  baseUrl="/connexion/insription" size="small" variant="secondary">Rejoindre</Button>
                    
                </div>
            </div>
        </div>
      </Container>
    </div>
  );
};
