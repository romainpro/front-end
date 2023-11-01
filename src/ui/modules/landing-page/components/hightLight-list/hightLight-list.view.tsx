import { Container } from "@/ui/components/container/container"
import { Typography } from "@/ui/design-system/typography/typography"
import Image from "next/image"
import { RiCheckboxCircleFill, RiCheckboxCircleLine } from "react-icons/ri"

export const HightlightListView = () =>{

    return(
        <Container className="py-24 sapce-y-10">
            <div className="flex justify-center gap-24">
                <div className="w-[520px] h-[350px] relative mt-10">
                    <Image fill src="/assets/svg/cake.svg" alt="cake"/>
                </div>
                <div className="max-w-md sapce-y-7">
                    <Typography variant="h3" component="h2">
                    De novice à développeur en un clin d'œil !
                    </Typography>
                    <div className="space-y-3">
                        <div className="flex items-center gap-2">
                            <RiCheckboxCircleLine size={24} className="mt-1 text-secondary"/>
                            <Typography variant="body-lg" component="span">
                            Progresse rapidement.
                                </Typography>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    )
}