import React from 'react'
import Select from 'react-select'
import Header from '../Header';
import Sidebar from '../Sidebar';

class NkParliament extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            parliamentNk: '',
            select1: '',
            select2: '',
            select3: '',
            select4: '',
            members: ''
        }
    }

    setup = () => {
        this.props.getParliamentNk()
        this.props.getMembers()    
    }

    componentDidMount() {
        this.setup()
    }

    // componentWillReceiveProps(nextProps) {
    //     let par = nextProps.parliamentNk.map(item => {return {value: item.id, label: item.name}})
    //     let mem = nextProps.members.map(item => {return {value: item.id, label: item.name}})
    //     let _select1 = par.find(item => item.value === 1)
    //     let _select2 = par.find(item => item.value === 2)
    //     let _select3 = par.find(item => item.value === 3)
    //     let _select4 = par.find(item => item.value === 4)
    //     this.setState({
    //         parliamentNk: par,
    //         select1: _select1,
    //         select2: _select2,
    //         select3: _select3,
    //         select4: _select4,
    //         members: mem
    //     })
    // }

    static getDerivedStateFromProps(nextProps, prevProps) {
        if(nextProps.parliamentNk !== prevProps.parliamentNk) {
            let par = nextProps.parliamentNk.map(item => {return {value: item.id, label: item.name}})
            let mem = nextProps.members.map(item => {return {value: item.id, label: item.name}})
            let _select1 = par.find(item => item.value === 1)
            let _select2 = par.find(item => item.value === 2)
            let _select3 = par.find(item => item.value === 3)
            let _select4 = par.find(item => item.value === 4)
            return {
                parliamentNk: par,
                select1: _select1,
                select2: _select2,
                select3: _select3,
                select4: _select4,
                members: mem
            }
        }
        return null
    }

    onChange = (input, value) => {
        let position = 0
        if(parseInt(value.name) === 1) {
            position = 1
        } else if(parseInt(value.name) === 2){
            position = 2            
        } else if(parseInt(value.name) === 3){
            position = 3
        } else if(parseInt(value.name) === 4){
            position = 4
        }  

        let newUser = {
            id: position,
            user_id: input.value,
            name: input.label
        }
        this.props.editParliamentNk(newUser)
        alert('Uspješno ste promjenili člana Nikšićke skupštine')
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
                            <h3 className="box-title">Članovi skupštine - Nikšić</h3>
                            <div className="addMemberMargin">
                                <Select className="selectStyle" placeholder="Odaberite ime" value={this.state.select1} options={this.state.members} onChange={this.onChange} name="1" />
                                <Select className="selectStyle" placeholder="Odaberite ime" value={this.state.select2} options={this.state.members} onChange={this.onChange} name="2" />
                                <Select className="selectStyle" placeholder="Odaberite ime" value={this.state.select3} options={this.state.members} onChange={this.onChange} name="3" />
                                <Select className="selectStyle" placeholder="Odaberite ime" value={this.state.select4} options={this.state.members} onChange={this.onChange}  name="4" />
                            </div>
                        </div>
                    </div>
                </div>   
            </div>


        )
    }
}

export default (NkParliament)