import { connect } from 'react-redux'
import Files from '../components/Files'
import { push } from 'connected-react-router'


const mapStateToProps = (state) => {
    return state;
};

const mapDispatchToProps = {
    push
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Files);
