import { connect } from 'react-redux';
import Header from '../components/Header';
// import { addNewProject, toggleCreateProjectForm } from '../actions/project'
// import { setAppMetadataPath } from '../actions/settings'

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = {
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
