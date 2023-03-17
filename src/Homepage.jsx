import { Nav } from "./component/homepageNav"
import { Profile } from "./component/homepageProfile"
import { History } from "./component/homepageHistory"
import { Footer } from "./component/homepageFooter"
import './App.css'
export function Homepage() {

    return (
        <>
            <Nav />
            <Profile />
            <History />
            <Footer />
        </>

    )
}