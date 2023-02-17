import { connect } from 'react-redux'
import Login from '../components/Login'
import { login_request } from '../actions/login.action';

const mapStateToProps = state => ({
    user: state.loginReducer.user,
    error: state.loginReducer.error
})

const mapDispatchToProps = dispatch => ({
    login: (credentials) => dispatch(login_request(credentials))
})

const LoginCnt = connect(
    mapStateToProps,
    mapDispatchToProps
)(Login)

export default LoginCnt