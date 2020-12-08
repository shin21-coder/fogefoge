import React from "react"
import Title from "./Title"
import Project from "./Project"
import { Link } from "gatsby"
const Projects = ({projects,title,showLink}) => {
  return <section className="section projects">
    <Title title={title}/>
    <div className="section-center projects-center">
      {projects.map((project, index) => {
        return <Project key={project.id} index={index} {...project} />
        //projectの中身はオブジェクトなので、それを展開した状態でProjectにわたす
      })}
    </div>
    {
      //showLinkがtrueの場合のみリンクを表示させますよ
      showLink && <Link to="/projects" className="btn center-btn">
        showmore
      </Link>
    }
  </section>
}

export default Projects
