import React from 'react'
import { withRouter } from 'react-router-dom'

class Adv extends React.Component {

    editAdv = (id) => {
        let path = '/izmjeniOglas/'+id
        this.props.history.push(path)
    }

    render() {
        return(
        <tr>
            <td>{this.props.id}</td>
            <td>{this.props.title}</td>
            <td>{this.props.full_text.slice(0,120)}</td>
            <td>{this.props.phone}</td>
            <td>{this.props.date}</td>
            <td className="sortCursor">
                <span className="fa fa-pencil-square-o fa-md" title="Izmjeni oglas" 
                    onClick={() => this.editAdv(this.props.id)}></span>
                <span className="fa fa-trash-o fa-md iconsStyle" title="Obriši oglas" 
                    onClick={() => this.props.deleteAdv(this.props.id)}></span>
            </td>
        </tr>
        )
    }
}

export default withRouter(Adv)