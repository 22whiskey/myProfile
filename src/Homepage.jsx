import { Nav } from "./component/homepageNav"
import { Profile } from "./component/homepageProfile"
import { History } from "./component/homepageHistory"
import { Footer } from "./component/homepageFooter"
import { Project } from "./component/homepageProject"
import './App.css'
export function Homepage() {

    return (
        <>
            <Nav />
            <Profile />
            <History />
            <Project />
            <Footer />
        </>

    )
}