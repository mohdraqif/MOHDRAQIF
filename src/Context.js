import React, { Component } from 'react';

const ProjectContext = React.createContext()

class ProjectProvider extends Component {
  state={
    'project': [
      {id:1, 'name': 'Tech Store'},
      {id:2, 'name': 'Vintage Tech'},
      {id:3, 'name': 'Beach Resort'}
    ]
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
