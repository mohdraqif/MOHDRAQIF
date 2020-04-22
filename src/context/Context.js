import React, { Component } from 'react';
import client from '../Contentful'


const ProjectContext = React.createContext()

class ProjectProvider extends Component {
  state={
    project: []
  }
  // contentful data fetch
  getData = async () => {
    try {
      let response = await client.getEntries({
        content_type: 'mohdraqifcontent'
      })
      this.setState({
        project: response.items
      })
      console.log(response.items)
    } catch (error) {
      console.log(error)
    }
  }

  componentDidMount() {
    this.getData()
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
