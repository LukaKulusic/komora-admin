import { connect } from 'react-redux'
import AdvAdd from '../../components/advertisments/AdvAdd';
import { addAdv_request } from '../../actions/adv.action'

const mapStateToProps = state => ({
    advertisments: state.advReducer.advs
})

const mapDispatchToProps = dispatch => ({
    addAdv: (adv) => dispatch(addAdv_request(adv))
})

const AdvAddCnt = connect(
    mapStateToProps,
    mapDispatchToProps
)(AdvAdd)

export default AdvAddCnt