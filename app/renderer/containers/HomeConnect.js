import { connect } from 'react-redux';
import Home from '../components/Home';
import { getDirectoryProjects } from '../actions/project'

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = {
  getDirectoryProjects
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
