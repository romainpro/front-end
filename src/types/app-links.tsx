export interface AppLinks{
    label:string;
    baseUrl:string;
    type:string; //@todo refactor this
}
export interface FooterLinks{
    label:string;
    links: AppLinks[];
};