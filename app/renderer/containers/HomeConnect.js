import { connect } from 'react-redux';
import Home from '../components/Home';
import { setCurrentProject, addNewProject, toggleCreateProjectForm } from '../actions/project'
import { setAppMetadataPath } from '../actions/settings'
import { push } from 'connected-react-router'

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = {
  setCurrentProject,
  addNewProject,
  setAppMetadataPath,
  toggleCreateProjectForm,
  push
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
