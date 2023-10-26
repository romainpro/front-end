import { Button } from "@/ui/design-system/button/button";
import { Spinner } from "@/ui/design-system/spinner/spinner";
import { Typography } from "@/ui/design-system/typography/typography";
import{ RiUser2Fill,}from "react-icons/ri"

export default function Home() {
  return ( 
<>
  <div className="flex items-center gap-4 p-10">
      <Spinner size="small"/>
      <Spinner/>
      <Spinner size="large"/>
      <Button size="small" variant="accent"> Accent </Button>
      <Button size="small" variant="secondary"> Accent </Button>
      <Button size="small" variant="outline"> Accent </Button>
      <Button size="small" variant="disabled"> Accent </Button>
      <Button size="small" variant="ico" icon={{icon:RiUser2Fill}} />
      <Button size="small" icon={{icon:RiUser2Fill}}> Accent </Button>
      <Button size="small" icon={{icon:RiUser2Fill}} iconPosition="left"> Accent </Button>
    
  </div>
  <div className="flex items-center gap-4 p-10">
      <Button  variant="accent"> Accent </Button>
      <Button  variant="secondary"> Accent </Button>
      <Button  variant="outline"> Accent </Button>
      <Button  variant="disabled"> Accent </Button>
      <Button  variant="ico" icon={{icon:RiUser2Fill}} />
    
  </div>
  <div className="flex items-center gap-4 p-10">
      <Button size="large" variant="accent"> Accent </Button>
      <Button size="large" variant="secondary"> Accent </Button>
      <Button size="large" variant="outline"> Accent </Button>
      <Button size="large" variant="disabled"> Accent </Button>
      <Button size="large" variant="ico" icon={{icon:RiUser2Fill}}  />
      <Button size="large" variant="ico" icon={{icon:RiUser2Fill}} iconTheme="secondary"/>
      <Button size="large" variant="ico" icon={{icon:RiUser2Fill}} iconTheme="gray"/>
    


    
  </div>
  <div className="flex items-center gap-4 p-10">
      <Button isLoading size="large" variant="accent"> Accent </Button>
      <Button isLoading size="large" variant="secondary"> Accent </Button>
      <Button isLoading size="large" variant="outline"> Accent </Button>
      <Button isLoading size="large" variant="disabled"> Accent </Button>
      <Button isLoading size="large" variant="ico" icon={{icon:RiUser2Fill}}  />
      <Button isLoading size="large" variant="ico" icon={{icon:RiUser2Fill}} iconTheme="secondary"/>
      <Button isLoading size="large" variant="ico" icon={{icon:RiUser2Fill}} iconTheme="gray"/>
    


    
  </div>
</>
  // <div className="space-y-5">
  
  // <Typography variant="display" component="div">
  //   coders Romain
  // </Typography>
  // <Typography  theme="primary" variant="body-lg" component="h1">
  //   coders Romain
  // </Typography>
  // <Typography theme="secondary" variant="lead" component="div">
  //   coders Romain
  // </Typography>
  // <Typography variant="body-sm" component="div">
  //   coders Romain
  // </Typography>
  // <Typography variant="caption4" weight="medium" component="div">
  //   coders Romain
  // </Typography>
  // </div>
  );
}
