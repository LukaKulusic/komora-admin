import React from 'react'
import Modal from 'react-responsive-modal'

export default class ModalCmp extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            showModal: false
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            showModal: nextProps.showModal
        })
    }

    render() {
        return(
            <Modal open={this.state.showModal} onClose={this.props.shutDownModal} center>
                <div  style={{'padding': '20px'}}>
                    <div>
                        <h2 className="modalStyle">Da li ste sigurni?</h2>
                        <p>
                            Da li ste sigurni da želite da obrišete člana: {this.props.member.name} ?
                        </p>
                        <div className="buttonsDivModal">
                            <button className="btn btn-sm modalButton" onClick={this.props.shutDownModal}>
                            <span className="fa fa-caret-left spanButton"></span>
                                Back
                            </button>
                            <button className="btn btn-sm modalButton buttonRightModal" onClick={() => this.props.deleteMember(this.props.member.id)}> 
                                <span className="fa fa-trash-o spanButton"></span>
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            </Modal>
        )
    }
}