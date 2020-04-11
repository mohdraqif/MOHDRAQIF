import React, { Component } from 'react';
import {ProjectContext} from '../context/Context'
import SingleProject from '../components/SingleProject'

export default class ProjectList extends Component {
  static contextType = ProjectContext
  render() {
    const projects = this.context  
    // console.log(projects); 
    return (
      <div className="project-container">
        <div className="banner"><h2>Search All Projects</h2></div>
        {projects.map(item=>{
          return (
            <SingleProject 
              key={item.sys.id} 
              title={item.fields.title}
              demo={item.fields.demo}
              code={item.fields.code}
              desc={item.fields.description}
              class={item.fields.class}
              img={item.fields.image.fields.file.url}
            />)
        })}
      </div>
    )
  }
}
