import React from 'react'
import { withRouter } from 'react-router-dom'
import ImageUploader from 'react-images-upload'
import Header from '../Header';
import Sidebar from '../Sidebar';
import Select from 'react-select'

class MemberAdd extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            phone: '',
            city: '',
            email: '',
            address: '',
            company: '',
            errorName: '',
            errorCity: '',
            errorCompany: '',
            errorPhone: '',
            errorEmail: '',
            biography: '',
            images: []
        }
    }

    changeName = (input) => {   
        this.setState({
            name: input.target.value
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

    changeCompany = (input) => {
        this.setState({
            company: input.target.value
        })
    }

    changeEmail = (input) => {
        this.setState({
            email: input.target.value
        })
    }

    handleValidation = () => {
        let errorName = this.state.errorName
        let errorCompany = this.state.errorCompany
        let errorCity = this.state.errorCity
        let errorPhone = this.state.errorPhone
        let errorEmail = this.state.errorEmail
        let formIsValid = true
        if(typeof this.state.name !== "undefined") {
            if(!this.state.name.match(/[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/)) {
                formIsValid = false
                errorName = "Polje za ime mora sadrzati samo slova!"
            } else {errorName=''}
        }
        if(typeof this.state.company !== 'undefined') {
            if(!this.state.company.match(/[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/)) {
                formIsValid = false
                errorCompany = "Polje za naziv ustanove mora sadrzati samo slova"
            } else {errorCompany=''}
        }
        if(typeof this.state.city !== 'undefined') {
            if(!this.state.city.match(/[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/)) {
                formIsValid = false
                errorCity = "Polje za naziv grada mora sadrzati samo slova"
            } else {errorCity=''}
        }
        if(typeof this.state.email !== 'undefined') {
            if(!this.state.email.match(/[^@]+@[^.]+\..+/)) {
                formIsValid = false
                errorEmail = "E-mail nije ispravnog formata"
            } else {errorEmail=''}
        }
        if(typeof this.state.phone !== 'undefined') {
            if(this.state.phone.length < 9){
                formIsValid = false
                errorPhone = "Broj telefona mora imati minimum 9 cifri"
            } else {errorPhone=''}
        }
        this.setState({
            errorName: errorName,
            errorCompany: errorCompany,
            errorCity: errorCity,
            errorPhone: errorPhone,
            errorEmail: errorEmail
        })
        return formIsValid
    }

    changeBiography = (input) => {
        this.setState({
            biography: input.target.value
        })
    }
    changeAddress = (input) => {
        this.setState({
            address: input.target.value
        })
    }
    

    resetFields = () => {
        this.setState({
            name: '',
            phone: '',
            city_id: '',
            address: '',
            email: '',
            company: '',
            errorName: '',
            errorCity: '',
            errorCompany: '',
            errorPhone: '',
            errorEmail: '',
            biography: '',
            images: []
        })
    }


    submitForm = (e) => {
        e.preventDefault()

        // if(this.handleValidation()) {
            let member = {
                name: this.state.name,
                phone: this.state.phone,
                email: this.state.email,
                city_id: this.state.city.value,
                address: this.state.address,
                company: this.state.company,
                biography: this.state.biography,
                images: this.state.images
            }

            console.log('submit member = ', member)

            this.props.addMember(member)
            alert("Uspješno ste dodali člana")
            this.resetFields()
        // } else {
        //     alert("Greska!")
        // }
    }

    onDrop = (images) => {
        this.setState({
            images: this.state.images.concat(images)
        })
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
                    <div className="row box addMemberMargin">
                        <form name="addForm" onSubmit={this.submitForm}>
                            <div className="col-md-6">
                                    <div className="box-header with-border">
                                        <h3 className="box-title">Dodaj člana komore</h3>
                                    </div>
                                        <div className="box-body">
                                            <div className="form-group">
                                                <label>Ime i prezime</label>
                                                <input type="text" className="form-control"  placeholder="Unesite ime i prezime" value={this.state.name} onChange={this.changeName} required />
                                                {/* <span style={{'color':'red'}}>{this.state.errorName}</span> */}
                                            </div>
                                            <div className="form-group">
                                                <label >Telefon</label>
                                                <input type="number" className="form-control" placeholder="Unesite broj telefona" value={this.state.phone} onChange={this.changePhone} required />
                                                {/* <span style={{'color':'red'}}>{this.state.errorPhone}</span> */}
                                            </div>
                                            <div className="form-group">
                                                <label >E-mail</label>
                                                <input type="email" className="form-control" placeholder="Unesite email" value={this.state.email} onChange={this.changeEmail} required />
                                                {/* <span style={{'color':'red'}}>{this.state.errorEmail}</span> */}
                                            </div>
                                            <div className="form-group">
                                                <label >Grad</label>
                                                <Select options={options} placeholder="Izaberite grad" onChange={this.changeCity} required/>
                                            </div>
                                            <div className="form-group">
                                                <label >Adresa</label>
                                                <input type="text" className="form-control" placeholder="Unesite grad" value={this.state.address} onChange={this.changeAddress} required />
                                                {/* <span style={{'color':'red'}}>{this.state.errorCity}</span> */}
                                            </div>
                                            <div className="form-group">
                                                <label >Naziv ustanove</label>
                                                <input type="text" className="form-control" placeholder="Unesite naziv ustanove u kojoj je član zaposlen" value={this.state.company} onChange={this.changeCompany} required/>
                                                {/* <span style={{'color':'red'}}>{this.state.errorCompany}</span> */}
                                            </div>
                                        </div>

                                        <div className="box-footer">
                                            <button type="submit" className="btn btn-primary">Dodaj</button>
                                        </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group" style={{'paddingTop':'50px'}} >
                                    <label >Biografija:</label>
                                    <textarea type="text" className="form-control" placeholder="Unesite biografiju za člana" value={this.state.biography} onChange={this.changeBiography} rows="8"></textarea>
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

export default withRouter(MemberAdd)