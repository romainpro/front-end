import { Typography } from "@/ui/design-system/typography/typography";
import clsx from "clsx";
import { useRouter } from "next/router"
import { v4 as uuidv4 } from "uuid";

export const Breadcrumbs=()=>{
    const router =useRouter();
    const asPath=router.asPath;
    const segments =asPath.split("/")
    const lastSegments = segments[segments.length - 1]
    segments[0] = "accueil"
    console.log("asPhat",lastSegments)
    const view = segments.map((path,)=>(
        <div key={uuidv4()}>
            <Typography 
                variant="caption3"
                component="span"
                className={clsx(
                    path !== lastSegments ? "text-gray-600" : "text-gray",
                    "capitalize hover:text-gray animate"
                )}
            >
                {path}
            </Typography>
            </div>
    ))

    return(
        <>
        {view}
        </>
    )
}