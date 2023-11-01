import { CodersMonkeusSlackView } from "./components/coders-monkeys-slack/coders-monkeys-slack.view"
import { CurrentCourseCtaView } from "./components/current-course-cta/current-course-cta.view"
import { Featured } from "./components/featured/featured.view"
import { HeroTopView } from "./components/hero-top/hero-top.view"
import { HightlightListView } from "./components/hightLight-list/hightLight-list.view"

export const LandingPageView=()=>{
    return <>
    <HeroTopView/>
    <Featured/>
    <CodersMonkeusSlackView/>
    <CurrentCourseCtaView/>
    <HightlightListView/>
    </>
}