
import React from 'react'
import Select from 'react-select'
import Header from '../Header';
import Sidebar from '../Sidebar';

class CtParliament extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            parliamentCt: '',
            select1: '',
            members: ''
        }
    }

    setup = () => {
        this.props.getParliamentCt()
        this.props.getMembers()
    }

    componentDidMount() {
        this.setup()
    }

    // componentWillReceiveProps(nextProps) {
    //     let par = nextProps.parliamentCt.map(item => {return {value: item.id, label: item.name}})
    //     let mem = nextProps.members.map(item => {return {value: item.id, label: item.name}})
    //     let _select1 = par.find(item => item.value === 1)
    //     this.setState({
    //         parliamentNk: par,
    //         select1: _select1,
    //         members: mem
    //     })
    // }

    static getDerivedStateFromProps(nextProps, prevProps) {
        if(nextProps.parliamentCt !== prevProps.parliamentCt) {
            let par = nextProps.parliamentCt.map(item => {return {value: item.id, label: item.name}})
            let mem = nextProps.members.map(item => {return {value: item.id, label: item.name}})
            let _select1 = par.find(item => item.value === 1)
            return {
                parliamentNk: par,
                select1: _select1,
                members: mem
            }
        }

        return null
    }

    onChange = (input, value) => {
        let position = 0
        if(parseInt(value.name) === 1) {
            position = 1
        } 
        let newUser = {
            id: position,
            user_id: input.value,
            name: input.label
        }
        this.props.editParliamentCt(newUser)
        alert('Uspješno ste promjenili člana Cetinjske skupštine')
    }

    render() {
        return(
            <div>
                <Header />
                <div className="col-md-2">
                    <Sidebar />
                </div>

                <div className="col-md-10 mainContent">
                    <div className="row">
                        <div className="col-md-4">
                            <h3 className="box-title">Članovi skupštine - Cetinje</h3>
                                <div className="addMemberMargin">
                                    <Select className="selectStyle" placeholder="Odaberite ime" value={this.state.select1} options={this.state.members} onChange={this.onChange} name="1" />
                                </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default (CtParliament)