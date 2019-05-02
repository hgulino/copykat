import { connect } from 'react-redux';
import Header from '../components/HeaderMenu';
import { projectOpened, projectClosed } from '../actions/project'

const mapStateToProps = (state) => {
  return state;
};

const actionCreators = {
  projectOpened,
  projectClosed
}

export default connect(
  mapStateToProps,
  actionCreators
)(Header);
