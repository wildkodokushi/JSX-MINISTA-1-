import Trust from "@/sections/About/Trust"
import Select from "@/sections/About/Select"
import Project from "@/sections/About/Project"
import './About.scss'

export default () => {
    return (
        <>
            <section className="about" id="about">
                <Trust/>
                <Select/>
                <Project/>
            </section>
        </>
    )
}