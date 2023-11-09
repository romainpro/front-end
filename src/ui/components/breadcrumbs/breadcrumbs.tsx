import { Typography } from "@/ui/design-system/typography/typography";
import clsx from "clsx";
import { useRouter } from "next/router";
import { RiHome2Fill } from "react-icons/ri";
import { v4 as uuidv4 } from "uuid";
import { Container } from "../container/container";
import Link from "next/link";

export const Breadcrumbs = () => {
  const router = useRouter();
  const asPath = router.asPath;
  const segments = asPath.split("/");
  const lastSegments = segments[segments.length - 1];
  segments[0] = "accueil";
  console.log("asPhat", lastSegments);
  const view = segments.map((path,index) => (
    <div key={uuidv4()}>
        <Link href={
            index > 0 ?`/${segments.slice(1,index + 1).join("/")}`:`/`
        }>
      <Typography
        variant="caption3"
        component="span"
        className={clsx(
          path !== lastSegments ? "text-gray-600" : "text-gray",
          "capitalize hover:text-gray animate"
        )}
      >
        {path !== "accueil" ? path.replace(/-/g," ") : <RiHome2Fill className="inline mt-3" />}
      </Typography>
      {
        path !== lastSegments &&(
            <Typography variant="caption2" component="span" className="ml-2 text-gray-600">
            /
          </Typography>
        )
      }
    </Link>
    </div>
  ));

  return (
    <Container className=" flex items-center gap-2 py-7">
        {view}
    </Container>
    );
};
