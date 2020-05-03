/* eslint-disable array-callback-return */
import React, {Component} from 'react';
import '../App.css'
import {ProjectContext} from '../context/Context'
import SingleProject from './SingleProject'

export default class Projects extends Component {
  static contextType = ProjectContext
  render() {
    const projects = this.context
    return (
      <section className="section" id="anchor">
        <div className="banner"><h2>My Best Projects</h2></div>
        <div className="grid">
          {projects.map(item => {
            if(item.fields.featured) {
              return (
              <SingleProject
                key={item.sys.id}
                title={item.fields.title}
                demo={item.fields.demo}
                code={item.fields.code}
                class={item.fields.class}
                img={item.fields.image.fields.file.url}
              />
            )}
          })}
        </div>
      </section>
    );
  }
}





