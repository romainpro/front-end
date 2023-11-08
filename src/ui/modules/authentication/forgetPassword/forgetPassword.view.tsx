import { Container } from "@/ui/components/container/container";
import { Box } from "@/ui/design-system/box/box";
import { Typography } from "@/ui/design-system/typography/typography";
import Link from "next/link";
import Image from "next/image";
import { ForGetPasswordForm } from "./forget-passeword";

export const ForgetPasswordView = () => {
  return (
    <Container className="grid grid-cols-2 gap-20 mb-32">
      <div className=" flex items-center">
        <div className="relative w-full h-[531px]">
          <Image
            fill
            src="/assets/images/charatére-3.png"
            alt="register"
            className="object-scale-down"
          />
        </div>
      </div>
      <div className="flex items-center">
        <Box padding_y="py-5">
          <div className="flex items-center justify-between">
            <Typography variant="h5" component="h1">
              mot de passe perdu
            </Typography>

            <Typography variant="caption4" component="span" theme="primary">
              <Link href="/connexion/inscription">connexion</Link>
            </Typography>
          </div>
          <ForGetPasswordForm/>
        </Box>
      </div>
    </Container>
  );
};
