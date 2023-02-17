import { connect } from 'react-redux'
import { deleteParticipans_request, getCongressParticipas_request, payment_request } from '../actions/congress.action'
import Congress from '../components/Congress'

const mapStateToProps = state => ({
    participans: state.congressReducer.participans
})

const mapDispatchToProps = dispatch => ({
    getParticipans: () => dispatch(getCongressParticipas_request()),
    payment: (details) => dispatch(payment_request(details)),
    deleteParticipans: (details) => dispatch(deleteParticipans_request(details))
})

const CongressCnt = connect(
    mapStateToProps,
    mapDispatchToProps
)(Congress)

export default CongressCnt