import React, {Component} from 'react';
import '../App.css'
import {ProjectContext} from '../context/Context'
import ProjectGrid from './ProjectGrid'

export default class Projects extends Component {
  static contextType = ProjectContext
  render() {
    const projects = this.context
    // console.log(projects)
    return (
      <section className="section">
        <div className="banner"><h2>Our Best Projects</h2></div>
        <div className="grid">
          {projects.map(item => {
            if(item.fields.featured) {
              return (
              <ProjectGrid
                key={item.sys.id}
                title={item.fields.title}
              />
            )}
          })}
        </div>
      </section>
    );
  }
}





