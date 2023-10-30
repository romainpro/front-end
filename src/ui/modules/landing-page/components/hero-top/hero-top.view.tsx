import { Container } from "@/ui/components/container/container"
import Image from "next/image"


export const HeroTopView=()=>{
    return(
        <Container className="">
            <div>

            </div>
            <Image
            src="/assets/svg/rocket.svg"
            alt="rocket" 
            width={811}
            height={596}
            className=""
            />
            
        </Container>
    )
}