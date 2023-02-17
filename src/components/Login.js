import React from 'react'
import { withRouter } from 'react-router-dom'

class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
            errorEmail: '',
            loginError: '',
            token: ''
        }
    }

    componentDidMount() {
        if(localStorage.getItem('token')) {
            let path = '/pocetna'
            this.props.history.push(path)
        }
    }

    componentDidUpdate() {
        if(this.state.token !== undefined) {
            console.log(this.state.token);
            if(this.state.token.length > 0) {
                let path = '/pocetna'
                this.props.history.push(path)
            }
        }
    }
    // componentWillReceiveProps(nextProps) {
    //     let path
    //     if(nextProps.user.token) {
    //         path = '/pocetna'
    //         this.props.history.push(path)
    //     } 
    //     this.setState({
    //         loginError: nextProps.error
    //     })
    // }

    static getDerivedStateFromProps(nextProps, prevProps) {
        if(nextProps.user.token !== prevProps.token) {
            return {
                token: nextProps.user.token
            }
        } else {
            return {
                loginError: nextProps.error
            }
        }
    }

    changeEmail = (event) => {
        this.setState({
            email: event.target.value
        })
    }

    changePassword = (event) => {
        this.setState({
            password: event.target.value
        })
    }

    submitForm = (e) => {
        e.preventDefault()

        if(this.handleValidation()) {
            let details = {
                email: this.state.email,
                password: this.state.password
            }
            this.props.login(details)
            this.resetFields()
        } 
    }

    handleValidation = () => {
        let errorEmail = this.state.errorEmail
        let formIsValid = true
        if(typeof this.state.email !== 'undefined') {
            if(!this.state.email.match(/[^@]+@[^.]+\..+/)) {
                formIsValid = false
                errorEmail = "E-mail nije ispravnog formata"
            } else {errorEmail=''}
        }
        this.setState({
            errorEmail: errorEmail
        })
        return formIsValid
    }

    resetFields = () => {
        this.setState({
            email: '',
            password: ''
        })
    }

    render() {
        return(
            <div className="bimg">
                <div className="row">
                    <div className="col-md-5 col-md-offest-4 login">
                        {/* <div id="first"> */}
                            <div className="myform form">
                                <div className="logo mb-3">
                                    <div className="col-md-12 text-center">
                                        <h1>Login</h1>
                                        <h3>
                                            <span style={{'color':'red'}}>{this.state.loginError}</span>
                                        </h3>

                                    </div> 
                                </div>
                                <form name="login" onSubmit={this.submitForm}>
                                    <div className="form-group">
                                        <label>Email address</label>
                                        <input type="text" className="form-control" aria-describedby="emailHelp" placeholder="E-mail" 
                                            value={this.state.email} 
                                            onChange={this.changeEmail}/>
                                    </div>
                                    <div className="form-group">
                                        <label>Password</label>
                                        <input type="password" name="password" id="password" className="form-control" aria-describedby="emailHelp" placeholder="Password" 
                                            value={this.state.password} 
                                            onChange={this.changePassword}/>
                                    </div>
                                    <div className="col-md-12 text-center ">
                                        <button type="submit" className="btn btn-block mybtn btn-primary tx-tfm">Login</button>
                                    </div>
                                    <div className="col-md-12 ">
                                        <div className="login-or">
                                            <hr className="hr-or" />
                                            <span className="span-or">ili</span>
                                        </div>
                                        <div className="form-group">
                                            <p className="text-center">Zaboravili ste lozinku? <a href="/login" id="signup">Kliknite ovdje</a></p>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        {/* </div> */}
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(Login)