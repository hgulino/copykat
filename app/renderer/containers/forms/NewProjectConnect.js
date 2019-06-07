import { connect } from 'react-redux'

import { addNewProject } from '../../actions/project'
import NewProjectForm from '../../components/forms/ProjectTest'

const mapStateToProps = (state) => {
  return state
}

const mapDispatchToProps = {
  addNewProject,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NewProjectForm)
