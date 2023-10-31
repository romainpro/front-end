import { Container } from "@/ui/components/container/container";
import { Typography } from "@/ui/design-system/typography/typography";
import Image from "next/image";
import {v4 as uuidv4} from "uuid"

interface FeacturesListeInterface{
    imgePath:string,
    imageAlt:string,
    tiltle:string,
    description:string,
}

const featuresData=[
    {
        imagePath:"/assets/svg/Group 18.svg",
        imageAlt:"disquette",
        tiltle:"Ressources",
        description:"Consulte et partage des ressources pour les devs",
},
    {
        imagePath:"/assets/svg/gamepad.svg",
        imageAlt:"manette de jeux video",
        tiltle:"Entrainement",
        description:"Entraîne-toi à devenir meilleur et trouve de l’inspiration",
},
    {
        imagePath:"/assets/svg/speaker a.svg",
        
        imageAlt:"bousole",
        tiltle:"Visibilité",
        description:"Expose tes projets et crée toi des opportunités !",
},
    {
        imagePath:"/assets/svg/compass a.svg",
        imageAlt:"enceinte",
        tiltle:"Relations",
        description:"Connecte-toi avec des devs web et booste ta carrière !",
},

]


export const Featured=()=>{

    const featuredList=featuresData.map((feature)=>(
        <div key={uuidv4()} className="flex flex-col items-center justify-center bg-white rounded p-7">
            <div className= " relative w-[130px] h-[130px] rounded-full mb-6 p-10 bg-gray-400 ">
                <Image fill
                src={feature.imagePath}
                alt={feature.imageAlt}
                className="object-scale-down"/>

               
            </div>
            <Typography variant="lead" component="h3" weight="medium" className="text-center mb-2.5">
                {feature.tiltle}
            </Typography>
            <Typography variant="body-base" component="p" theme="gray" className="text-center">
                {feature.description}
            </Typography>
        </div>
    ))

    return(
        <div className="bg-gray-300">
            <Container className="grid grid-cols-12 gap-24 py-24">
                <div className=" grid  grid-cols-2 col-span-7 gap-7 ">{featuredList}</div>
                <div className=" col-span-5 "></div>
            </Container>
        </div>
    );
};