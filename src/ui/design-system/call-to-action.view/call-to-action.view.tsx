import { Container } from "@/ui/components/container/container"
import { Typography } from "../typography/typography"
import { Button } from "../button/button"
import { LinkTypes } from "@/lib/link-types"

export const CallToActionView =()=>{
    return(
        <div className="relative overflow-hidden bg-primary">
            <Container className="py-20">
                <div>
                    <Typography variant="h2" theme="white" component="h2">
                    N'attend pas pour développer tes compétences...
                    </Typography>
                    <Button variant="success" baseUrl="/#" linktype={LinkTypes.EXTERNAL}>
                    Formations React.js gratuite
                    </Button>
                </div>

            </Container>
        </div>
    )
}