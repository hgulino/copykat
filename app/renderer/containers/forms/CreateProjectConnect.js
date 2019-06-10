import { connect } from 'react-redux'

import { addNewProject } from '../../actions/project'
import NewProjectForm from '../../components/forms/CreateProject'

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
