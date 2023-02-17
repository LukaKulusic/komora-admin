import { connect } from 'react-redux'
import { getMembers_request, deleteMember_request } from '../../actions/member.actions';
import { addBoardMember_success } from '../../actions/boardMember.action'
import MemberList from '../../components/members/MemberList';

const mapStateToProps = state => ({
    members: state.memberReducer.members
})

const mapDispatchToProps = dispatch => ({
    getMembers: () => dispatch(getMembers_request()),
    deleteMember: (id) => dispatch(deleteMember_request(id)),
    addToBoard: (member) => dispatch(addBoardMember_success(member))
})

const MemberListCnt = connect (
    mapStateToProps,
    mapDispatchToProps
)(MemberList)

export default MemberListCnt