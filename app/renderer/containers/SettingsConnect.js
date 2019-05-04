import { connect } from 'react-redux';
import Settings from '../components/Settings';
import { setDirectoryPath } from '../actions/project'

const mapStateToProps = (state) => {
    return state;
};

const mapDispatchToProps = {
    setDirectoryPath
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Settings);
