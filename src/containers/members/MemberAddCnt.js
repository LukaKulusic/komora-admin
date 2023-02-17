import { connect } from 'react-redux'
import MemberAdd from '../../components/members/MemberAdd';
import {addMember_request } from '../../actions/member.actions';

const mapStateToProps = state => ({
    members: state.memberReducer.members
})

const mapDispatchToProps = dispatch => ({
    addMember: (user) => dispatch(addMember_request(user))
})

const MemberAddCnt = connect (
    mapStateToProps,
    mapDispatchToProps
)(MemberAdd)

export default MemberAddCnt