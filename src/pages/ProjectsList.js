import React, { Component } from 'react';
import {ProjectContext} from '../Context'
import SingleProject from '../components/SingleProject'

export default class ProjectList extends Component {
  static contextType = ProjectContext
  render() {
    const projects = this.context    
    return (
      <section className="roomslist">
        <div className="roomslist-center">
          {projects.map(item=>{
            return <SingleProject key={item.id} info={item.name}/>
          })}
        </div>
      </section>
    );
  }
}
