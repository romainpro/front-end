import { AppLinks } from "@/types/app-links";

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

const footerInformationLinks: AppLinks[]=[
    {
        label:"CGU",
        baseUrl:"/#",
        type:"internal"
    },
    {
        label:"Confidentialité",
        baseUrl:"/#",
        type:"internal"
    },
    {
        label:"A propos",
        baseUrl:"/#",
        type:"internal"
    },
    {
        label:"Contact",
        baseUrl:"/#",
        type:"internal"
    },
]

const footerSocialNetworksLinks: AppLinks[]=[
    {
        label:"Youtube",
        baseUrl:"https://www.youtube.com",
        type:"external",
    },
    {
        label:"Linkedin",
        baseUrl:"https://www.linkedin.com",
        type:"external",
    },
    {
        label:"slack",
        baseUrl:"https://www.slack.com",
        type:"external",
    },
]


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
] 