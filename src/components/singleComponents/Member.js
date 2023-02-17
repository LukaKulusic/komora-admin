import React from 'react'
import { withRouter } from 'react-router-dom'

class Member extends React.Component {

    addToBoard = (member) => {
        this.props.addToBoard(this.props.member)
        alert(`Uspješno ste dodali člana: "${this.props.name}" u izvršni odbor`)
    }

    editUser = (id) => {
        let path="/izmjeniClana/"+id
        this.props.history.push(path)
    }

    render() {
        return(
            <tr>
                <td> {this.props.id || ""} </td>
                <td> {this.props.name || ""} </td>
                <td> {this.props.phone || ""} </td>
                <td> {this.props.email || ""} </td>
                <td> {this.props.city.name || ""} </td>
                <td> {this.props.address || ""} </td>
                <td> {this.props.company || ""} </td>
                <td style={{'cursor':'pointer'}}>
                    <span className="fa fa-user-o fa-md" title="Izmjeni člana" onClick={() => this.editUser(this.props.id)}></span>
                    <span className="fa fa-address-card-o fa-md iconsStyle" title="Dodaj člana odbora" onClick={() => this.addToBoard(this.props.member)}></span>
                    <span className="fa fa-trash-o fa-md iconsStyle" title="Obriši člana" onClick={() => this.props.deleteMember(this.props.id)}></span>
                </td>
            </tr>
        )
    }
}

export default withRouter(Member)