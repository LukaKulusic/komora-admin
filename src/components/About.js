import React from 'react'
import { withRouter } from 'react-router-dom'
import Header from './Header';
import Sidebar from './Sidebar';

class About extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            id: '',
            aboutTitle: '',
            aboutContent: '',
            parliamentContent: '',
            content: ''
        }
    }

    componentDidMount() {
        this.props.getContent()
    }

    static getDerivedStateFromProps(nextProps, prevProps) {
        if(nextProps.content !== prevProps.content) {
            return {
                id: nextProps.content.id,
                aboutTitle: nextProps.content.aboutTitle,
                aboutContent: nextProps.content.aboutContent,
                parliamentContent: nextProps.content.parliamentContent,
                content: nextProps.content
            }
        }
    }

    chageAboutTitle = (e) => {
        this.setState({aboutTitle: e.target.value})
    }

    changeAboutContent = (e) => {
        this.setState({aboutContent: e.target.value})
    }

    changeParliamentContent = (e) => {
        this.setState({parliamentContent: e.target.value})
    }

    submitForm = (e) => {
        e.preventDefault()

        let details = {
            id: this.state.id,
            aboutTitle: this.state.aboutTitle,
            aboutContent: this.state.aboutContent,
            parliamentContent: this.state.parliamentContent
        }
        this.props.editContent(details)
        alert("Uspjesno ste promjenili podatke na stranici o nama")
    }

    render() {
        return (
            <div>
                <Header />
                <div className="col-md-2">
                    <Sidebar />
                </div>

                <div className="col-md-10 mainContent">
                    <div className="box addMemberMargin">
                        <form name="aboutForm" onSubmit={this.submitForm}>
                            <div className="contactForm">
                                <div className="box-header with-border">
                                    <h3 className="box-title">O nama:</h3>
                                </div>
                                <div className="box-body">
                                    <div className="form-group">
                                        <label>About - naslov:</label>
                                        <textarea type="text" rows="6" className="form-control"  placeholder="Unesite adresu" value={this.state.aboutTitle} onChange={this.chageAboutTitle} required></textarea>
                                    </div>
                                    <div className="form-group">
                                        <label>About - sadržaj</label>
                                        <textarea type="text" rows="6" className="form-control" placeholder="Unesite broj telefona1" value={this.state.aboutContent} onChange={this.changeAboutContent} required></textarea>
                                    </div>
                                    <div className="form-group">
                                        <label>Skupština - sadržaj</label>
                                        <textarea type="text" rows="6" className="form-control" placeholder="Unesite broj telefona2" value={this.state.parliamentContent} onChange={this.changeParliamentContent} required></textarea>
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


export default withRouter(About)