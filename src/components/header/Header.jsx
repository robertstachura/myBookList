import Slider from "./slider/Slider"
import "./header.scss"
import UpcomingReleases from "./upcomingReleases/UpcomingReleases"

export default function Header() {
    return(
        <header>
            <Slider />
            <UpcomingReleases />

        </header>
    )
}