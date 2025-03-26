import FrontEnd from '../../molecules/frontend/FrontEnd'
import BackEnd from '../../molecules/backend/BackEnd'
import Architecture from '../../molecules/architecture/Architecture'
import Tooling from '../../molecules/tooling/Tooling'

const Skills = () => {
  return (
    <section className="skills section" id="skills">
        <h2 className="section-title">Skills</h2>
        <span className="section-subtitle">My technical level</span>

        <div className="skills-container container grid">
            <FrontEnd />
            <BackEnd />
            <Architecture />
            <Tooling />
        </div>
    </section>
  )
}

export default Skills