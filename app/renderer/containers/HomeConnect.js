import { connect } from 'react-redux';
import Home from '../components/Home';
import { addNewProject } from '../actions/project'
import { setAppMetadataPath } from '../actions/settings'

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = {
  addNewProject,
  setAppMetadataPath
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
