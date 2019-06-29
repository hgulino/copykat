import { connect } from 'react-redux'

import { setAppMetadataPath } from '../actions/settings'
import Settings from '../components/pages/Settings'

const mapStateToProps = (state) => {
  return state
}

const mapDispatchToProps = {
  setAppMetadataPath,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Settings)
