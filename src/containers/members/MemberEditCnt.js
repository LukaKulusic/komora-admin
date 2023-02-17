import { connect } from 'react-redux'
import MemberEdit from '../../components/members/MemberEdit';
import { editMember_request, getMemberDetails_request } from '../../actions/member.actions';

const mapStateToProps = state => ({
    memberDetails: state.memberReducer.member
})

const mapDispatchToProps = dispatch => ({
    getMemberDetails: (id) => dispatch(getMemberDetails_request(id)),
    editMember: (member) => dispatch(editMember_request(member))
})

const MemberEditCnt = connect (
    mapStateToProps,
    mapDispatchToProps
)(MemberEdit)

export default MemberEditCnt