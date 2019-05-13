import { connect } from 'react-redux';
import Settings from '../components/Settings';
import { setAppMetadataPath } from '../actions/settings'

const mapStateToProps = (state) => {
    return state;
};

const mapDispatchToProps = {
    setAppMetadataPath
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Settings);
