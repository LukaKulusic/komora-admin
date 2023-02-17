import React from 'react'
import { withRouter } from 'react-router-dom'
import ImageUploader from 'react-images-upload'
import Header from '../Header';
import Sidebar from '../Sidebar';
import Select from 'react-select'

class MemberEdit extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            id: '',
            name: '',
            phone: '',
            email: '',
            city: '',
            address: '',
            company: '',
            newMember: '',
            errorName: '',
            errorCity: '',
            errorCompany: '',
            errorPhone: '',
            errorEmail: '',
            biography: '',
            memberDetails: []
        }
    }

    componentDidMount() {
        this.setup()
    }

    setup = () => {
        this.props.getMemberDetails(parseInt(this.props.member.id))
        this.resetErrors()
    }

    static getDerivedStateFromProps(nextProps, prevProps) {

            let _id, _name, _email, _phone, _city, _address,_company, _biography, _memberDetails = []
            if(nextProps.memberDetails !== prevProps.memberDetails) {
                _memberDetails = nextProps.memberDetails
                _id =  nextProps.memberDetails.id
                _name =  nextProps.memberDetails.name
                _email =  nextProps.memberDetails.email
                _phone =  nextProps.memberDetails.phone
                _city =  nextProps.memberDetails.city
                _address =  nextProps.memberDetails.address
                _company =  nextProps.memberDetails.company
                _biography =  nextProps.memberDetails.biography

                return {
                    id: _id,
                    name: _name,
                    email: _email,
                    phone: _phone,
                    // city: _city,
                    city: {
                        value: _city !== undefined ? _city.id : "",
                        label: _city !== undefined ? _city.name : ""
                    },
                    address: _address,
                    company: _company,
                    biography: _biography,
                    memberDetails: _memberDetails
                }
            }
            // else {
            //     console.log('2')

            //     _id =  prevProps.id
            //     _name =  prevProps.name
            //     _email =  prevProps.email
            //     _phone =  prevProps.phone
            //     _city =  prevProps.city
            //     _address =  nextProps.memberDetails.address
            //     _company =  prevProps.company
            //     _biography =  prevProps.biography
            //     _memberDetails = nextProps.memberDetails
            // }
           return null

        }
        
    changeName = (input) => {
        this.setState({
            name: input.target.value
        })
    }

    changeAddress = (input) => {
        this.setState({
            address: input.target.value
        })
    }

    changePhone = (input) => {
        this.setState({
            phone: input.target.value
        })
    }

    changeCity = (input) => {
        this.setState({
            city: input
        })
    }

    changeAddress = (input) => {
        this.setState({
            address: input.target.value
        })
    }

    changeCompany = (input) => {
        this.setState({
            company: input.target.value
        })
    }

    changeBiography = (input) => {
        this.setState({
            biography: input.target.value
        })
    }

    changeEmail = (input) => {
        this.setState({
            email: input.target.value
        })
    }


    resetErrors = () => {
        this.setState({
            errorName: '',
            errorCompany: '',
            errorCity: '',
            errorPhone: '',
            errorEmail: ''
        })
    }

    handleValidation = () => {
        // let errorName = this.state.errorName
        // let errorCompany = this.state.errorCompany
        // let errorCity = this.state.errorCity
        // let errorPhone = this.state.errorPhone
        // let errorEmail = this.state.errorEmail
        // let formIsValid = true
        // if(typeof this.state.name !== "undefined") {
        //     if(!this.state.name.match(/^[a-zA-Z]+$/)) {
        //         formIsValid = false
        //         errorName = "Polje za ime mora sadrzati samo slova!"
        //     } else {errorName=''}
        // }
        // if(typeof this.state.company !== 'undefined') {
        //     if(!this.state.company.match(/^[a-zA-Z]+$/)) {
        //         formIsValid = false
        //         errorCompany = "Polje za naziv ustanove mora sadrzati samo slova"
        //     } else {errorCompany=''}
        // }
        // if(typeof this.state.email !== 'undefined') {
        //     if(!this.state.email.match(/[^@]+@[^.]+\..+/)) {
        //         formIsValid = false
        //         errorEmail = "E-mail nije ispravnog formata"
        //     } else {errorEmail=''}
        // }
        // if(typeof this.state.city !== 'undefined') {
        //     if(!this.state.city.match(/^[a-zA-Z]+$/)) {
        //         formIsValid = false
        //         errorCity = "Polje za naziv grada mora sadrzati samo slova"
        //     } else {errorCity=''}
        // }
        // if(typeof this.state.phone !== 'undefined') {
        //     if(this.state.phone.length < 9){
        //         formIsValid = false
        //         errorPhone = "Broj telefona mora imati minimum 9 cifri"
        //     } else {errorPhone=''}
        // }
        // this.setState({
        //     errorName: errorName,
        //     errorCompany: errorCompany,
        //     errorCity: errorCity,
        //     errorPhone: errorPhone,
        //     errorEmail: errorEmail
        // })
        // return formIsValid
    }

    submitForm = (e) => {
        e.preventDefault()
        // if(this.handleValidation()) {
            let member = {
                id: this.state.id,
                name: this.state.name,
                email: this.state.email,
                phone: this.state.phone,
                city_id: this.state.city !== undefined ? this.state.city.value : "",
                address: this.state.address,
                company: this.state.company,
                biography: this.state.biography
            }

            this.props.editMember(member)
            alert("Uspješno ste promjenili podatke o članu komore")
            // let path = '/spisakClanova'
            // this.props.history.push(path)
        // } else {
        //     alert("Greska!")
        // }
    }

    render() {
        const options = [
            {
                "value": 1,
                "label": "Andrijevica"
            },
            {
                "value": 2,
                "label": "Bar"
            },
            {
                "value": 3,
                "label": "Berane"
            },
            {
                "value": 4,
                "label": "Bijelo Polje"
            },
            {
                "value": 5,
                "label": "Budva"
            },
            {
                "value": 6,
                "label": "Cetinje"
            },
            {
                "value": 7,
                "label": "Danilovgrad"
            },
            {
                "value": 8,
                "label": "Gusinje"
            },
            {
                "value": 9,
                "label": "Herceg Novi"
            },
            {
                "value": 10,
                "label": "Kolašin"
            },
            {
                "value": 11,
                "label": "Kotor"
            },
            {
                "value": 12,
                "label": "Mojkovac"
            },
            {
                "value": 13,
                "label": "Nikšić"
            },
            {
                "value": 14,
                "label": "Petnjica"
            },
            {
                "value": 15,
                "label": "Plav"
            },
            {
                "value": 16,
                "label": "Plužine"
            },
            {
                "value": 17,
                "label": "Pljevlja"
            },
            {
                "value": 18,
                "label": "Podgorica"
            },
            {
                "value": 19,
                "label": "Rožaje"
            },
            {
                "value": 20,
                "label": "Šavnik"
            },
            {
                "value": 21,
                "label": "Tivat"
            },
            {
                "value": 22,
                "label": "Tuzi"
            },
            {
                "value": 23,
                "label": "Ulcinj"
            },
            {
                "value": 24,
                "label": "Zeta"
            },
            {
                "value": 25,
                "label": "Žabljak"
            }
        ]
        return(
            <div>
                <Header />
                <div className="col-md-2">
                    <Sidebar />
                </div>

                <div className="col-md-10 mainContent">
                {/* addMemberMargin */}
                    <div className="row box">
                        <form name="editForm" onSubmit={this.submitForm}> 
                            <div className="col-md-6">
                                <div className="">
                                    <div className="box-header with-border">
                                        <h3 className="box-title">Izmjeni člana komore</h3>
                                    </div>
                                    <div className="box-body">
                                        <div className="form-group">
                                            <label>Ime i prezime</label>
                                            <input type="text" className="form-control" 
                                                placeholder="Unesite ime i prezime" 
                                                value={this.state.name || ""} 
                                                onChange={this.changeName} 
                                                required/>
                                            {/* <span style={{'color':'red'}}>{this.state.errorName}</span> */}
                                        </div>
                                        <div className="form-group">
                                            <label >Telefon</label>
                                            <input type="text" className="form-control" 
                                                placeholder="Unesite broj telefona" 
                                                value={this.state.phone || ""} 
                                                onChange={this.changePhone} required/>
                                            {/* <span style={{'color':'red'}}>{this.state.errorPhone}</span> */}
                                        </div>
                                        <div className="form-group">
                                            <label >E-mail</label>
                                            <input type="text" className="form-control" 
                                                placeholder="Unesite email" 
                                                value={this.state.email || ""} 
                                                onChange={this.changeEmail} required />
                                            {/* <span style={{'color':'red'}}>{this.state.errorEmail}</span> */}
                                        </div>
                                        <div className="form-group">
                                            <label >Grad</label>
                                            <Select options={options} placeholder="Izaberite grad" 
                                                onChange={this.changeCity}
                                                value={this.state.city}
                                                />
                                        </div>
                                        <div className="form-group">
                                            <label >Adresa</label>
                                            <input type="text" className="form-control" 
                                                placeholder="Unesite broj telefona" 
                                                value={this.state.address || ""} 
                                                onChange={this.changeAddress} required/>
                                            {/* <span style={{'color':'red'}}>{this.state.errorCity}</span> */}
                                        </div>
                                        <div className="form-group">
                                            <label >Naziv ustanove</label>
                                            <input type="text" className="form-control" 
                                                placeholder="Unesite naziv ustanove u kojoj je član zaposlen" 
                                                value={this.state.company || ""} 
                                                onChange={this.changeCompany} required/>
                                            <span style={{'color':'red'}}>{this.state.errorCompany}</span>
                                        </div>
                                    </div>

                                    <div className="box-footer">
                                        <button type="submit" className="btn btn-primary">Izmjeni</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group" style={{'paddingTop':'50px'}} >
                                    <label >Biografija:</label>
                                    <textarea type="text" className="form-control" 
                                        placeholder="Unesite biografiju za člana" 
                                        value={this.state.biography || ""} 
                                        onChange={this.changeBiography} rows="8"></textarea>
                                </div>
                                {/* IMAGE UPLOADER */}
                                <ImageUploader
                                    withPreview={true}
                                    withIcon={true}
                                    buttonText='Choose images'
                                    onChange={this.onDrop}
                                    imgExtension={['.jpg', '.gif', '.png', '.gif']}
                                    maxFileSize={5242880}
                                    singleImage={true}
                                    label='Odaberite sliku za korisnika'
                                />
                            </div>

                        </form>

                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(MemberEdit)