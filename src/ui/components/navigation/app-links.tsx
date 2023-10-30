import { AppLinks } from "@/types/app-links";
import { RiLinkedinFill, RiSlackFill, RiYoutubeFill } from "react-icons/ri";

 export const footerAppLinks:AppLinks[]=[
    {
        label:"Accueil",
        baseUrl:"/",
        type:"internal"
    },
    {
        label:"Projets",
        baseUrl:"/#",
        type:"internal"
    },
    {
        label:"Coders Romain",
        baseUrl:"/#",
        type:"internal"
    },
    {
        label:"Fromation",
        baseUrl:"/#",
        type:"external"
    },
];

export const footerUsersLinks: AppLinks[]=[
    {
        label:"Mon espace",
        baseUrl:"/#",
        type:"internal"
    },
    {
        label:"Connexion",
        baseUrl:"/#",
        type:"internal"
    },
    {
        label:"Inscription",
        baseUrl:"/#",
        type:"internal"
    },
    {
        label:"Mot de passe publié",
        baseUrl:"/#",
        type:"internal"
    },
];

 export const footerInformationLinks: AppLinks[]=[
    {
        label:"CGU",
        baseUrl:"/#",
        type:"internal",
    },
    {
        label:"Confidentialité",
        baseUrl:"/#",
        type:"internal",
    },
    {
        label:"A propos",
        baseUrl:"/#",
        type:"internal",
    },
    {
        label:"Contact",
        baseUrl:"/#",
        type:"internal",
    },
]

export const footerSocialNetworksLinks: AppLinks[]=[
    {
        label:"Youtube",
        baseUrl:"https://www.youtube.com",
        type:"external",
        icon: RiYoutubeFill,
    },
    {
        label:"Linkedin",
        baseUrl:"https://www.linkedin.com",
        type:"external",
        icon: RiLinkedinFill,
    },
    {
        label:"slack",
        baseUrl:"https://www.slack.com",
        type:"external",
        icon:RiSlackFill,
    },
];


 export const footerLinks = [
    {
        label:"App",
        links: footerAppLinks
    },
    {
        label:"utilisateurs",
        links: footerUsersLinks
    },
    {
        label:"Information",
        links: footerInformationLinks
    },
    {
        label:"Réseaux",
        links: footerSocialNetworksLinks
    },
] ;