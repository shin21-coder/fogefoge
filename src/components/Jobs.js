import React from "react"
import Title from "./Title"
import { FaAngleDoubleRight, FaAlignRight } from "react-icons/fa"
import { graphql, useStaticQuery } from "gatsby"
import { Link } from "gatsby"

const query = graphql`
{
  allStrapiWorks(sort:{fields:strapiId,order:DESC}) {
    nodes{
      strapiId
      company
      date
      position
      job_description{
        id
        name
      }
    }
  }
}
`

const Jobs = () => {
  const data = useStaticQuery(query)
  const { allStrapiWorks: { nodes: works } } = data
  //allStrapiJobs野中のnodeの中のjobs
  const [value, setValue] = React.useState(0)
  //valueという名前のstateを宣言、初期値0を宣言
  const { company, position, date, job_description } = works[value];
  //jobsオブジェクトの名前を｛｝でくくっているだけそうするとオブジェクト名から値を参照できる
  works.map((item, index) => { console.log(item.id); })
  console.log(data);
  return <section className="section jobs">
    <Title title="expierence" />
    <div className="jobs-center">
      <div className="btn-container">
        {works.map((item, index) => {
          return <button key={item.strapiId}
          
            onClick={() => setValue(index)}
            className={`job-btn ${(index === value &&
              'active-btn')}`}>
            {item.company}
          </button>
        })}
      </div>
      <article className="job-info">
        <h3>{position}</h3>
        <h4>{company}</h4>
        <p className="job-date">{date}</p>
        {
          job_description.map((item) => {
            return <div key={item.id}>
              <FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight>
              <p>{item.name}</p>
            </div>
          })
        }
</article>
    </div>
    <Link to="/about" className="btn center-btn">
      もっと情報頂戴
    </Link>
  </section>

}

export default Jobs

