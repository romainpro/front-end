import { LinkTypes } from "@/lib/link-types";
import { Container } from "@/ui/components/container/container";
import { Button } from "@/ui/design-system/button/button";
import { Logo } from "@/ui/design-system/logo/logo";
import { Typography } from "@/ui/design-system/typography/typography";
import Image from "next/image";

export const CodersMonkeusSlackView = () => {
  return (
    <Container className="flex justify-between">
      <div className=" flex flex-col justify-center max-w-2xl space-y-5">
        <div className=" flex items-center gap-2">
          <Logo size="very-small" />
          <Typography variant="caption2" component="span" weight="medium">
            coders Romain
          </Typography>
        </div>
        <Typography variant="h2" component="h2">
          Rejoins-nous sur le Slack des Singes codeurs
        </Typography>
        <Typography variant="body-lg" component="p" theme="gray" className="max-w-lg">
        Rejoins-nous et obtiens de l'aide, des conseils et pourquoi pas des nouveaux potes !
        </Typography>
        <Button baseUrl="/#" linktype={LinkTypes.EXTERNAL}>
          Rejoindre le groupe d'aide
        </Button>
      </div>
      <div className="relative w-[600px] h-[600px]">
        <Image fill src={"assets/svg/ico_slack.svg"} alt="Group slack" />
      </div>
    </Container>
  );
};
