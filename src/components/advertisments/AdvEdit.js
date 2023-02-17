import React from 'react'
import { withRouter } from 'react-router-dom'
import Header from '../Header';
import Sidebar from '../Sidebar';

class AdvEdit extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            id: '',
            title: '',
            full_text: '',
            advDetails: ''
        }
    }

    componentDidMount() {
        this.props.getAdvDetails(parseInt(this.props.adv.id))
    }

    // componentWillReceiveProps(nextProps) {
    //     this.setState({
    //         id: nextProps.advDetails.id,
    //         title: nextProps.advDetails.title,
    //         full_text: nextProps.advDetails.full_text,
    //         phone: nextProps.advDetails.phone
    //     })
    // }

    static getDerivedStateFromProps(nextProps, prevProps) {
        if(nextProps.advDetails !== prevProps.advDetails) {
            return {
                id: nextProps.advDetails.id,
                title: nextProps.advDetails.title,
                full_text: nextProps.advDetails.full_text,
                phone: nextProps.advDetails.phone,
                advDetails: nextProps.advDetails
            }
        }
        return null
    }

    changeTitle = (e) => {
        this.setState({
            title: e.target.value
        })
    }

    changeText = (e) => {
        this.setState({
            full_text: e.target.value
        })
    }

    changePhone = (e) => {
        this.setState({
            phone: e.target.value
        })
    }

    submitForm = (e) => {
        e.preventDefault()

        let adv = {
            id: this.state.id,
            title: this.state.title,
            full_text: this.state.full_text,
            phone: this.state.phone
        }
        this.props.editAdv(adv)
        alert("Uspjesno ste promjenili oglas")
        // let path = '/oglasi'
        // this.props.history.push(path)
    }

    render() {
        return (
            <div>
                <Header />
                <div className="col-md-2">
                    <Sidebar />
                </div>

                <div className="col-md-10 mainContent">
                    <form name="editForm" onSubmit={this.submitForm}>
                        <div className="col-md-4 box">
                            <div className="box-header with-border">
                                <h3 className="box-title">Izmjeni oglas</h3>
                            </div>
                            <div className="box-body">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label>Naslov</label>
                                            <input type="text" className="form-control" placeholder="Unesite naslov oglasa" value={this.state.title || ""} onChange={this.changeTitle} required/>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label>Telefon</label>
                                            <input type="text" className="form-control" placeholder="Unesite broj telefona" value={this.state.phone || ""} onChange={this.changePhone} required/>
                                        </div>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <textarea className="textAreaNews" value={this.state.full_text || ""} onChange={this.changeText} ></textarea>
                                </div>
                            </div>
                            <div className="box-footer">
                                <button type="submit" className="btn btn-primary">Sačuvaj</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default withRouter(AdvEdit)