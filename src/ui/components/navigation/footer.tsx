import { Typography } from "@/ui/design-system/typography/typography"
import { Container } from "../container/container"
import Image from "next/image"

export const Footer=()=>{

    const currentYear=new Date().getFullYear();

    const footerNavigationList = (
    <div>
        <ul>
            <li>t</li>
            <li>t</li>
            <li>t</li>
        </ul>
    </div>
    );

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
                    <a href="https://youtube.com" target="_blank" rel="noopener" aria-label="Youtube">
                        <Image
                            src="/assets/svg/YTB.svg"
                            width={229}
                            height={216}
                            alt="logo youtube"
                        />
                    </a>
                </div>
                <div className="">
                    {footerNavigationList}
                </div>
            </Container>
            <Container className="pt-9 pb-11 space-y-11">
                <hr className="text-gray-800"/>
                <div className="flex items-center justify-between">
                    <Typography variant="caption4" theme="gray">
                        {`Copyright © ${currentYear} | Propulsed by`} {""}
                        <a href="https://www.linkedin.com/in/romain-casagrande-9ba451271/" target="_blank" rel="noopener" aria-label="Linkedin" className="underline">
                            Romain casgrande
                        </a>
                        {`  - Remote Romain` }
                    </Typography>
                    <div className=""></div>
                </div>
            </Container>
        </div>
    )
}