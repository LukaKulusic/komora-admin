import React from 'react'
import Modal from 'react-responsive-modal'

export default class ModalCmp extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            showModal: false
        }
    }

    // componentWillReceiveProps(nextProps) {
    //     this.setState({
    //         showModal: nextProps.showModal
    //     })
    // }

    static getDerivedStateFromProps(nextProps, prevProps) {
        if(nextProps.showModal !== prevProps.showModal) {
            return {
                showModal: nextProps.showModal
            }
        }
        return null
    }

    render() {
        return(
            <Modal open={this.state.showModal} onClose={this.props.shutDownModal} center>
                <div  style={{'padding': '20px'}}>
                    <div>
                        <h2 className="modalStyle">Da li ste sigurni?</h2>
                        
                        {
                            this.props.deleteMemberModal 
                            ? <p> Da li ste sigurni da želite da obrišete člana: {this.props.member.name} </p>
                            : (
                                this.props.deleteAdvModal
                                ? <p>Da li ste sigurni da želite da obrišete oglas broj: {this.props.adv.id}</p>
                                : <p> Da li ste sigurni da želite da obrišete vijest: {this.props.novelty.title} </p>
                            )
                        }
                        <div className="buttonsDivModal">
                            {
                                this.props.deleteMemberModal 
                                ? 
                                <div>
                                    <button className="btn btn-sm modalButton" onClick={this.props.shutDownModal}>
                                        <span className="fa fa-caret-left spanButton"></span>
                                        Back
                                    </button>
                                    <button className="btn btn-sm modalButton buttonRightModal" onClick={() => this.props.deleteMember(this.props.member.id)}> 
                                        <span className="fa fa-trash-o spanButton"></span>
                                        Delete
                                    </button>
                                </div>
                                : (
                                    this.props.deleteAdvModal
                                    ?
                                        <div>
                                            <button className="btn btn-sm modalButton" onClick={this.props.shutDownModal}>
                                                <span className="fa fa-caret-left spanButton"></span>
                                                Back
                                            </button>
                                            <button className="btn btn-sm modalButton buttonRightModal" onClick={() => this.props.deleteAdv(this.props.adv.id)}> 
                                                <span className="fa fa-trash-o spanButton"></span>
                                                Delete
                                            </button>
                                        </div>
                                    :
                                    <div>
                                        <button className="btn btn-sm modalButton" onClick={this.props.shutDownModal}>
                                            <span className="fa fa-caret-left spanButton"></span>
                                            Back
                                        </button>
                                        <button className="btn btn-sm modalButton buttonRightModal" onClick={() => this.props.deleteNovelty(this.props.novelty.id)}> 
                                            <span className="fa fa-trash-o spanButton"></span>
                                            Delete
                                        </button>
                                    </div>
                                )

                            }

                        </div>
                    </div>
                </div>
            </Modal>
        )
    }
}