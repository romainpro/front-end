import { Typography } from "@/ui/design-system/typography/typography";
import { Container } from "../container/container";
import Image from "next/image";
import { footerLinks } from "./app-links";
import { v4 as uuidv4 } from "uuid";
import { ActiveLink } from "./active-link";
import { FooterLinks } from "@/types/app-links";
import { LinkTypes } from "@/lib/link-types";
import { SocialNetworksButton } from "./sacial-networks-button";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerNavigationList = footerLinks.map((colomnLinks) => (
    <FooterLink key={uuidv4()} data={colomnLinks} />
  ));

  return (
    <div className="bg-gray">
      <Container className="flex justify-evenly pt-16">
        <div className=" flex flex-col items-center gap-1">
          <Typography variant="caption1" theme="white" weight="medium">
            Formartion gratuites
          </Typography>
          <Typography variant="caption3" theme="gray">
            Abonne-toi a la chaine !
          </Typography>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener"
            aria-label="Youtube"
          >
            <Image
              src="/assets/svg/YTB.svg"
              width={229}
              height={216}
              alt="logo youtube"
            />
          </a>
        </div>
        <div className="flex gap-7">{footerNavigationList}</div>
      </Container>
      <Container className="pt-9 pb-11 space-y-11">
        <hr className="text-gray-800" />
        <div className="flex items-center justify-between">
          <Typography variant="caption4" theme="gray">
            {`Copyright © ${currentYear} | Propulsed by`} {""}
            <a
              href="https://www.linkedin.com/in/romain-casagrande-9ba451271/"
              target="_blank"
              rel="noopener"
              aria-label="Linkedin"
              className="underline"
            >
              Romain casgrande
            </a>
            {`  - Remote Romain`}
          </Typography>
          <div className="">
            <SocialNetworksButton />
          </div>
        </div>
      </Container>
    </div>
  );
};

interface footerLinkProps {
  data: FooterLinks;
}

const FooterLink = ({ data }: footerLinkProps) => {
  const LinksList = data.links.map((link) => (
    <div key={uuidv4()}>
      {link.type === LinkTypes.INTERNAL && (
        <ActiveLink key={uuidv4()} href={link.baseUrl}>
          {link.label}
        </ActiveLink>
      )}
      {link.type === LinkTypes.EXTERNAL && (
        <a href={link.baseUrl} target="_blank">
          {link.label}
        </a>
      )}
    </div>
  ));

  return (
    <div className="min-[190px]">
      <Typography
        theme="white"
        variant="caption2"
        weight="medium"
        className="pb-5"
      >
        {data.label}
      </Typography>
      <Typography theme="gray" variant="caption3" className="space-y-4">
        {LinksList}
      </Typography>
    </div>
  );
};
