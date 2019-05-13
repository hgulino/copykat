import { connect } from 'react-redux';
import NewProjectForm from '../../components/forms/ProjectTest';

import { updateNewProjectForm, addNewProject } from '../../actions/project'

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = {
  updateNewProjectForm,
  addNewProject
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewProjectForm);
