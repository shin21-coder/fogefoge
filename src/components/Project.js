import React from "react"
import PropTypes from "prop-types"
import Image from "gatsby-image"
import { FaGithubSquare, FaShareSquare } from "react-icons/fa"
const Project = ({ description, title, github, stack, url, image, index }) => {
  console.log({ title, url, github, image });
  //...Projectで渡されたものをオブジェクトとして受け取っている
  return <article className="project">
    {image && 
      <Image fluid={image.childImageSharp.fluid} className="project-img" />
      //もしイメージがあったらイメージをだしてね。そうすればデーターをこわすことなく表示できるよ、あとコンソールでいろいろ見れるよ（PropTypesのおかげで）
    }
    <div className="project-info">
      <span className="project-number">0{index + 1}.</span>
      <h2>{title || 'default-title'}</h2>
      <p className="project-desc">
        {description}
      </p>
      <div className="project-stack">
        {stack.map((item) => {
          return <span key={item.id}>{item.title}</span>
        })}
        {/* //stackは配列なのでmapしている */}
      </div>
      <div className="project-links">
        <a href={github}>
          <FaGithubSquare className="project-icon" />
            </a>
        <a href={url}>
          <FaGithubSquare className="project-icon" />
            </a>
      </div>
    </div>
    
  </article>
}

Project.propTypes = {
  //入ってくる方のタイプを定義している
  title: PropTypes.string.isRequired,
  github:PropTypes.string.isRequired,
  url:PropTypes.string.isRequired,
  description:PropTypes.string.isRequired,
  image: PropTypes.object.isRequired,
  //imageはオブジェクトだったよね
  stack: PropTypes.arrayOf(PropTypes.object).isRequired,
  //配列の中のオブジェクトだったよね
}

export default Project
