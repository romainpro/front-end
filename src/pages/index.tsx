import { Avatar } from "@/ui/design-system/avatar/avatar";
import { Button } from "@/ui/design-system/button/button";
import { Logo } from "@/ui/design-system/logo/logo";
import { Spinner } from "@/ui/design-system/spinner/spinner";
import { Typography } from "@/ui/design-system/typography/typography";
import { RiAccountBoxLine, RiUser2Fill } from "react-icons/ri";

export default function Home() {
  return (
    <>
      {/* Typography */}
      <div className="space-y-2">
        <Typography variant="caption2" weight="medium">
          Typography
        </Typography>
        <div className="flex flex-col gap-2 p-5 border-gray-400 divide-y-2 divide-gray-400 rounded">
          <Typography variant="caption3" weight="medium">
            display
          </Typography>
          <Typography variant="display">Nothing is impossible</Typography>
        </div>

        <div className="flex flex-col  gap-2 p-5 border-gray-400 divide-y-2 divide-gray-400 rounded">
          <Typography variant="h1" weight="medium">
            h1
          </Typography>
          <Typography variant="h1">
            Nothing is impossible,the word isself says,I m possible!
          </Typography>
        </div>
        <div className="flex flex-col  gap-2 p-5 border-gray-400 divide-y-2 divide-gray-400 rounded">
          <Typography variant="h2" weight="medium">
            h2
          </Typography>
          <Typography variant="h2">
            Nothing is impossible,the word isself says,I m possible!
          </Typography>
        </div>
        <div className="flex flex-col  gap-2 p-5 border-gray-400 divide-y-2 divide-gray-400 rounded">
          <Typography variant="h3" weight="medium">
            h3
          </Typography>
          <Typography variant="h3">
            Nothing is impossible,the word isself says,I m possible!
          </Typography>
        </div>
        <div className="flex flex-col  gap-2 p-5 border-gray-400 divide-y-2 divide-gray-400 rounded">
          <Typography variant="h4" weight="medium">
            h4
          </Typography>
          <Typography variant="h4">
            Nothing is impossible,the word isself says,I m possible!
          </Typography>
        </div>
        <div className="flex flex-col  gap-2 p-5 border-gray-400 divide-y-2 divide-gray-400 rounded">
          <Typography variant="body-lg" weight="medium">
            body-lg
          </Typography>
          <Typography variant="body-lg">
            Nothing is impossible,the word isself says,I m possible!
          </Typography>
        </div>
        <div className="flex flex-col  gap-2 p-5 border-gray-400 divide-y-2 divide-gray-400 rounded">
          <Typography variant="body-base" weight="medium">
            body-base
          </Typography>
          <Typography variant="body-base">
            Nothing is impossible,the word isself says,I m possible!
          </Typography>
        </div>
        <div className="flex flex-col  gap-2 p-5 border-gray-400 divide-y-2 divide-gray-400 rounded">
          <Typography variant="body-sm" weight="medium">
            body-sm
          </Typography>
          <Typography variant="body-sm">
            Nothing is impossible,the word isself says,I m possible!
          </Typography>
        </div>
        <div className="flex flex-col  gap-2 p-5 border-gray-400 divide-y-2 divide-gray-400 rounded">
          <Typography variant="caption1" weight="medium">
            caption1
          </Typography>
          <Typography variant="caption1">
            Nothing is impossible,the word isself says,I m possible!
          </Typography>
        </div>
        <div className="flex flex-col  gap-2 p-5 border-gray-400 divide-y-2 divide-gray-400 rounded">
          <Typography variant="caption2" weight="medium">
            caption2
          </Typography>
          <Typography variant="caption2">
            Nothing is impossible,the word isself says,I m possible!
          </Typography>
        </div>
        <div className="flex flex-col  gap-2 p-5 border-gray-400 divide-y-2 divide-gray-400 rounded">
          <Typography variant="caption3" weight="medium">
            caption3
          </Typography>
          <Typography variant="caption3">
            Nothing is impossible,the word isself says,I m possible!
          </Typography>
        </div>
        <div className="flex flex-col  gap-2 p-5 border-gray-400 divide-y-2 divide-gray-400 rounded">
          <Typography variant="caption4" weight="medium">
            caption4
          </Typography>
          <Typography variant="caption4">
            Nothing is impossible,the word isself says,I m possible!
          </Typography>
        </div>
      </div>

      <div className="flex items-start gap-7">
        <div>
          {/* Spinner */}
          <Typography variant="caption2" weight="medium">
            Spinners
          </Typography>
          <div className=" flex items-center gap-2 p-5 border border-gray-400 rounded">
            <Spinner size="small" />
            <Spinner />
            <Spinner size="large" />
          </div>
        </div>
      </div>
      {/*Button */}
      <div className="space-y-2">
        <Typography variant="caption2" weight="medium">
          Buttons
        </Typography>
        <div className=" flex items-center gap-2 p-5 border border-gray-400 rounded">
          <div className="space-y-2">
            <Typography variant="caption3" weight="medium">
              Small
            </Typography>
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Button isLoading size="small">
                  Accent
                </Button>
                <Button isLoading size="small" icon={{ icon: RiUser2Fill }}>
                  Accent
                </Button>
                <Button isLoading size="small" variant="secondary">
                  Accent
                </Button>
                <Button isLoading size="small" variant="ico">
                  Accent
                </Button>
                <Button
                  isLoading
                  size="small"
                  variant="accent"
                  icon={{ icon: RiUser2Fill }}
                >
                  Accent
                </Button>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Button size="medium">Accent</Button>
                <Button size="medium" icon={{ icon: RiUser2Fill }}>
                  Accent
                </Button>
                <Button size="medium" variant="secondary">
                  Accent
                </Button>
                <Button size="medium" variant="ico">
                  Accent
                </Button>
                <Button
                  size="medium"
                  variant="accent"
                  icon={{ icon: RiUser2Fill }}
                >
                  Accent
                </Button>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Button size="large">Accent</Button>
                <Button size="large" icon={{ icon: RiUser2Fill }}>
                  Accent
                </Button>
                <Button size="large" variant="secondary">
                  Accent
                </Button>
                <Button size="large" variant="ico">
                  Accent
                </Button>
                <Button
                  size="large"
                  variant="accent"
                  icon={{ icon: RiUser2Fill }}
                >
                  Accent
                </Button>
              </div>
              {/* logo */}
              <div>
                <Typography variant="caption2" weight="medium">
                  Logo
                </Typography>
                <div className=" flex items-center gap-2 p-5 border border-gray-400 rounded">
                  <Logo size="very-small" />
                  <Logo size="small" />
                  <Logo />
                  <Logo size="large" />
                </div>
              </div>
              {/* Avatar */}
              <div className=" space-y-2 ">
                <Typography variant="caption2" weight="medium">
                  Avatar
                </Typography>
                <div className=" flex items-center gap-2 p-5 border border-gray-400 rounded">
                  <Avatar size="small" src="/assets/images/avatar.png" alt="Avatar des Daniel Lincoln" />
                  <Avatar src="/assets/images/avatar.png" alt="Avatar des Daniel Lincoln" />
                  <Avatar size="large" src="/assets/images/avatar.png" alt="Avatar des Daniel Lincoln" />
                </div>
              </div>
              <div className=" space-y-2 ">
                <Typography variant="caption2" weight="medium">
                  Avatar
                </Typography>
                <div className=" flex items-center gap-2 p-5 border border-gray-400 rounded">
                  <Avatar size="small" src="/assets/images/michael-dam-mEZ3PoFGs_k-unsplash.jpg" alt="Avatar des Daniel Lincoln" />
                  <Avatar src="/assets/images/michael-dam-mEZ3PoFGs_k-unsplash.jpg" alt="Avatar des Daniel Lincoln" />
                  <Avatar size="large" src="/assets/images/michael-dam-mEZ3PoFGs_k-unsplash.jpg" alt="Avatar des Daniel Lincoln" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
