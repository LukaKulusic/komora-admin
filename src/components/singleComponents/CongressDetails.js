import React from 'react'

export default class CongressDetails extends React.Component {
    render() {
        return (
            <tr>
                <td style={{'borderBottom':'1px solid lightblue'}}> {this.props.id} </td>
                <td style={{'borderBottom':'1px solid lightblue'}}> {this.props.name} </td>
                <td style={{'borderBottom':'1px solid lightblue'}}> {this.props.vocation} </td>
                <td style={{'borderBottom':'1px solid lightblue'}}> {this.props.company} </td>
                {/* <td style={{'borderBottom':'1px solid lightblue'}}> {this.props.address} </td> */}
                {/* <td style={{'borderBottom':'1px solid lightblue'}}> {this.props.country} </td> */}
                <td style={{'borderBottom':'1px solid lightblue'}}> {this.props.email} </td>
                <td style={{'borderBottom':'1px solid lightblue'}}> {this.props.phone} </td>
                <td style={{'borderBottom':'1px solid lightblue'}}>
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" checked={this.props.paid == 0 ? false : true} onChange={() => this.props.payment()}/>
                </td>
                {/* <td style={{'borderBottom':'1px solid lightblue'}}> {this.props.date} </td> */}
                <td style={{'borderBottom':'1px solid lightblue'}}>
                    {
                        this.props.file !== null
                        ?
                     <a href={`https://laravel.stomkomcg.me/${this.props.file}`}> Link </a> 
                        : ""
                    }
                </td>
                <td style={{'cursor':'pointer', 'borderBottom':'1px solid lightblue'}}>
                    <span className="fa fa-trash-o fa-md iconsStyle" title="Obriši člana" onClick={() => this.props.deleteMember(this.props.id)}></span>
                </td>
            </tr>
        )
    }
}