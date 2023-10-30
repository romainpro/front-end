import { Container } from "@/ui/components/container/container"
import Image from "next/image"


export const HeroTopView=()=>{
    return(
        <Container className="relative pt-40  pb-52 overflow-hidden " >
            <div>

            </div>
            <Image
            src="/assets/svg/rocket.svg"
            alt="rocket" 
            width={811}
            height={596}
            className="absolute top-0 right-0 z-0 "
            />
            
        </Container>
    )
}