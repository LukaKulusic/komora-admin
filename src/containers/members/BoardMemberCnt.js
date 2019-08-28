import { connect } from 'react-redux'
import BoardMember from '../../components/singleComponents/BoardMember';
import { deleteBoardMember_success } from '../../actions/boardMember.action';

const mapStateToProps = state => ({
    members: state.memberReducer.members,
    boardMembers: state.boardMemberReducer.boardMembers
})

const mapDispatchToProps = dispatch => ({
    deleteFromBoard: (member) => dispatch(deleteBoardMember_success(member))
})

const BoardMemberCnt = connect(
    mapStateToProps,
    mapDispatchToProps
)(BoardMember)

export default BoardMemberCnt