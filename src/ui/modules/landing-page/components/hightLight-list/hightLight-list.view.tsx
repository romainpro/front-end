import { Container } from "@/ui/components/container/container";
import { Button } from "@/ui/design-system/button/button";
import { Typography } from "@/ui/design-system/typography/typography";
import Image from "next/image";
import { RiArrowRightCircleLine, RiCheckboxCircleLine } from "react-icons/ri";

export const HightlightListView = () => {
  return (
    <Container className="py-24 sapce-y-10">
      <div className="flex justify-center gap-24">
        <div className="w-[520px] h-[350px] relative mt-10">
          <Image fill src="/assets/svg/cake.svg" alt="cake" />
        </div>
        <div className="max-w-md space-y-7">
          <Typography variant="h3" component="h2">
            De novice à développeur en un clin d'œil !
          </Typography>
         <ListPoint>Progresse rapidement.</ListPoint>
         <ListPoint>Inspire-toi.</ListPoint>
         <ListPoint>Gagne de l'assurance.</ListPoint>
        <div className="relative inline-block">
          <Button baseUrl="/#" icon={{icon: RiArrowRightCircleLine }} 
          iconPosition="right">
            Let's go
          </Button>
          <Image width={25} height={27} src="assets/svg/cursor.svg" alt="une curseur..." className="absolute right-7 -bottom-5"/>
        </div>
        </div>
      </div>
      <div className="flex flex-row-reverse justify-center gap-24">
        <div className="w-[520px] h-[350px] relative mt-10">
          <Image fill src="/assets/svg/top.svg" alt="cake" />
        </div>
        <div className="max-w-md space-y-7">
          <Typography variant="h3" component="h2">
          Booste ta carrière de développeur          </Typography>
         <ListPoint>Partage tes projets, obtiens des feedbacks..</ListPoint>
         <ListPoint>Connecte-toi, élargis ton réseau pro!</ListPoint>
         <ListPoint>Reste inspiré, motivé avec notre communauté.</ListPoint>
        <div className="relative inline-block">
          <Button variant="secondary" baseUrl="/#" icon={{icon: RiArrowRightCircleLine }} 
          iconPosition="right">
            Démarrer
          </Button>
        </div>
        </div>
      </div>
    </Container>
  );
};

interface Props{
  children:React.ReactNode
}


const ListPoint =({children}:Props)=>{

  return(
    <div className="space-y-3">
    <div className="flex items-center gap-2">
      <RiCheckboxCircleLine size={24} className="mt-1 text-secondary" />
      <Typography variant="body-lg" component="span">
       {children}
      </Typography>
    </div>
  </div>
  )
}