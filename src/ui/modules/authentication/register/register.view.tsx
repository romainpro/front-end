import { Container } from "@/ui/components/container/container";
import { Box } from "@/ui/design-system/box/box";
import { Typography } from "@/ui/design-system/typography/typography";
import Image from "next/image";
import Link from "next/link";
import { RegisterFrom } from "./register.form";

export const RegisterView = () => {
  return (
    <Container className="grid grid-cols-2 gap-20 mb-32">
      <div className=" flex items-center">
        <div className="relative w-full h-[531px]">
          <Image
            fill
            src="/assets/svg/charater-1.svg"
            alt="register"
            className="object-scale-down"
          />
        </div>
      </div>
      <div className="flex items-center">
        <Box padding_y="py-5">
          <div className="flex items-center justify-between">
            <Typography variant="h5" component="h1">
              Inscription
            </Typography>
            <div className="flex items-center gap-2 ">
              <Typography variant="caption4" component="span" theme="gray">
                tu a deja un compte ?
              </Typography>
              <Typography variant="caption4" component="span" theme="primary">
                <Link href="/connexion">connexion</Link>
              </Typography>
            </div>
          </div>
          <RegisterFrom/>
        </Box>
      </div>
    </Container>
  );
};
