import React from 'react'
import { withRouter } from 'react-router-dom'

class Novelty extends React.Component {

    editNovelty = (id) => {
        let path = '/izmijeniVijest/'+id
        this.props.history.push(path)
    }

    render() {
        return(
        <tr>
            <td>{this.props.id}</td>
            <td>{this.props.title}</td>
            <td>{this.props.category_name}</td>
            <td>{this.props.content.slice(0,120)}</td>
            <td>{this.props.updated_at}</td>
            <td>{this.props.file}</td>
            <td className="sortCursor">
                <span className="fa fa-pencil-square-o fa-md" title="Izmjeni vijest" 
                    onClick={() => this.editNovelty(this.props.id)}></span>
                <span className="fa fa-trash-o fa-md iconsStyle" title="Obriši vijest" 
                    onClick={() => this.props.deleteNovelty(this.props.id)}></span>
            </td>
        </tr>
        )
    }
}

export default withRouter(Novelty)