import React, { Component } from 'react';
import {data} from './data'

const ProjectContext = React.createContext()

class ProjectProvider extends Component {
  state={
    'project': data
  }
  render() {
    return (
      <ProjectContext.Provider value={this.state.project}>
        {this.props.children}
      </ProjectContext.Provider>
    );
  }
}
const ProjectConsumer = ProjectContext.Consumer

export {ProjectContext, ProjectProvider, ProjectConsumer}
