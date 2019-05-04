import { connect } from 'react-redux';
import Home from '../components/Home';
import { scanDirectoryProjects } from '../actions/project'

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = {
  scanDirectoryProjects
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
