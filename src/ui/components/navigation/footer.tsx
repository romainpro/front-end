import { Typography } from "@/ui/design-system/typography/typography"
import { Container } from "../container/container"
import Image from "next/image"

export const Footer=()=>{
    return(
        <div className="bg-gray">
            <Container className="flex justify-between pt-16">
                <div className=" flex flex-col items-center gap-1">
                    <Typography 
                        variant="caption1"
                        theme="white"
                        weight="medium"
                    >
                        Formartion gratuites
                    </Typography>
                    <Typography
                        variant="caption3"
                        theme="gray"
                    >
                        Abonne-toi a la chaine !
                    </Typography>
                    <a href="https://youtube.com" target="_blank">
                        <Image
                            src="/assets/svg/YTB.svg"
                            width={229}
                            height={216}
                            alt="logo youtube"
                        />
                    </a>
                </div>
                <div className=""></div>
            </Container>
        </div>
    )
}