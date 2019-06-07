import { push } from 'connected-react-router'
import { connect } from 'react-redux'

import { addNewProject, setCurrentProject, toggleCreateProjectForm } from '../actions/project'
import { setAppMetadataPath } from '../actions/settings'
import Home from '../components/Home'

const mapStateToProps = (state) => {
  return state
}

const mapDispatchToProps = {
  setCurrentProject,
  addNewProject,
  setAppMetadataPath,
  toggleCreateProjectForm,
  push,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home)
