import React from 'react'
import { withRouter } from 'react-router-dom'
import Header from './Header';
import Sidebar from './Sidebar';

class HomePage extends React.Component {
    constructor(props) {
        super(props) 
        this.state = {
            id: '',
            goal: '',
            licence: '',
            about: '', 
            titleh1: '',
            titleMembers: '',
            titleMember: '',
            titleMemberH: '',
            content: ''
        }
    }

    componentDidMount() {
        this.props.getContent()
    }

    // componentWillReceiveProps(nextProps) {
    //     this.setState({
    //         id: nextProps.content.id,
    //         goal: nextProps.content.goal,
    //         licence: nextProps.content.licence,
    //         about: nextProps.content.about,
    //         titleh1: nextProps.content.titleh1,
    //         titleMembers: nextProps.content.titleMembers,
    //         titleMember: nextProps.content.titleMember,
    //         titleMemberH: nextProps.content.titleMemberH
    //     })
    // }

    static getDerivedStateFromProps(nextProps, prevProps) {
        if(nextProps.content !== prevProps.content) {
            return {
                id: nextProps.content.id,
                goal: nextProps.content.goal,
                licence: nextProps.content.licence,
                about: nextProps.content.about,
                titleh1: nextProps.content.titleh1,
                titleMembers: nextProps.content.titleMembers,
                titleMember: nextProps.content.titleMember,
                titleMemberH: nextProps.content.titleMemberH,
                content: nextProps.content
            }
        }
        return null
    }


    changeGoal = (event) => {
        console.log('click');
        this.setState({
            goal: event.target.value
        })
    }

    changeLicence = (e) => {
        this.setState({
            licence: e.target.value
        })
    }

    changeAbout = (e) => {
        this.setState({
            about: e.target.value
        })
    }

    changeTitleh1 = (e) => {
        this.setState({
            titleh1: e.target.value
        })
    }

    changeTitleMembers = (e) => {
        this.setState({
            titleMembers: e.target.value
        })
    }

    changeTitleMember = (e) => {
        this.setState({
            titleMember: e.target.value
        })
    }

    changeTitleMemberH = (e) => {
        this.setState({
            titleMemberH: e.target.value
        })
    }

    submitForm = (e) => {
        e.preventDefault()

        let content = {
            id: this.state.id,
            goal: this.state.goal,
            licence: this.state.licence,
            about: this.state.about,
            titleh1: this.state.titleh1,
            titleMembers: this.state.titleMembers,
            titleMember: this.state.titleMember,
            titleMemberH: this.state.titleMemberH
        }
        this.props.editContent(content)
        alert("Uspješno ste promjenili podatke o početnoj stranici!")
    }

    render(){
        return (
            <div>
                <Header />
                <div className="col-md-2">
                    <Sidebar />
                </div>

                <div className="col-md-10 mainContent">
                    <div className="box addMemberMargin">
                        <form name="homePageForm" onSubmit={this.submitForm}>
                            <div className="contactForm">
                                <div className="box-header with-border">
                                    <h3 className="box-title">Početna stranica:</h3>
                                </div>
                                <div className="box-body">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label>Cilj komore:</label>
                                                <textarea type="text" rows="6" className="form-control" 
                                                    value={this.state.goal || ""} 
                                                    onChange={this.changeGoal} 
                                                    required>
                                                </textarea>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label>Obrasci</label>
                                                <textarea type="text" rows="6" className="form-control" value={this.state.licence} onChange={this.changeLicence} required></textarea>
                                            </div>
                                        </div>          
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label>O komori</label>
                                                <textarea type="text" rows="6" className="form-control" value={this.state.about} onChange={this.changeAbout} required></textarea>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label>Naslov</label>
                                                <textarea type="text" rows="6" className="form-control" value={this.state.titleh1} onChange={this.changeTitleh1} required></textarea>
                                            </div>
                                        </div> 
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label>Članovi komore</label>
                                                <textarea type="text" rows="6" className="form-control" value={this.state.titleMembers} onChange={this.changeTitleMembers} required></textarea>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label>Vijesti</label>
                                                <textarea type="text" rows="6" className="form-control" value={this.state.titleMember} onChange={this.changeTitleMember} required></textarea>
                                            </div>
                                        </div> 
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label>Počastni članovi</label>
                                                <textarea type="text" rows="6" className="form-control" value={this.state.titleMemberH} onChange={this.changeTitleMemberH} required></textarea>
                                            </div>
                                        </div>
                                        <div className="col-md-6"></div> 
                                    </div>
                                </div>

                                <div className="box-footer">
                                    <button type="submit" className="btn btn-primary">Sačuvaj</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(HomePage)