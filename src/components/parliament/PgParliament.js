import React from 'react'
import Select from 'react-select'
import Header from '../Header';
import Sidebar from '../Sidebar';

class PgParliament extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            parliamentPg: '',
            select1: '',
            select2: '',
            select3: '',
            select4: '',
            select5: '',
            select6: '',
            select7: '',
            select8: '',
            select9: '',
            select10: '',
            members: '',
            position: 0
        }
    }

    setup = () => {
        this.props.getParliamentMembers()
        this.props.getMembers()
    }

    componentDidMount() {
        this.setup()
    }

    // componentWillReceiveProps(nextProps) {
    //     let par = nextProps.parliamentPg.map(item => {return {value: item.id, label: item.name, id: item.id }})
    //     let mem = nextProps.members.map(item => {return {value: item.id, label: item.name, id:item.id }})
    //     let _select1 = par.find(item => item.value === 1)
    //     let _select2 = par.find(item => item.value === 2)
    //     let _select3 = par.find(item => item.value === 3)
    //     let _select4 = par.find(item => item.value === 4)
    //     let _select5 = par.find(item => item.value === 5)
    //     let _select6 = par.find(item => item.value === 6)
    //     let _select7 = par.find(item => item.value === 7)
    //     let _select8 = par.find(item => item.value === 8)
    //     let _select9 = par.find(item => item.value === 9)
    //     let _select10 = par.find(item => item.value === 10)
    //     this.setState({
    //         parliamentPg: par,
    //         select1: _select1,
    //         select2: _select2,
    //         select3: _select3,
    //         select4: _select4,
    //         select5: _select5,
    //         select6: _select6,
    //         select7: _select7,
    //         select8: _select8,
    //         select9: _select9,
    //         select10: _select10,
    //         members: mem
    //     })
    // }


    static getDerivedStateFromProps(nextProps, prevProps) {
        let par = nextProps.parliamentPg.map(item => {return {value: item.id, label: item.name, id: item.id }})
        let mem = nextProps.members.map(item => {return {value: item.id, label: item.name, id:item.id }})
        let _select1 = par.find(item => item.value === 1)
        let _select2 = par.find(item => item.value === 2)
        let _select3 = par.find(item => item.value === 3)
        let _select4 = par.find(item => item.value === 4)
        let _select5 = par.find(item => item.value === 5)
        let _select6 = par.find(item => item.value === 6)
        let _select7 = par.find(item => item.value === 7)
        let _select8 = par.find(item => item.value === 8)
        let _select9 = par.find(item => item.value === 9)
        let _select10 = par.find(item => item.value === 10)
        return {
            parliamentPg: par,
            select1: _select1,
            select2: _select2,
            select3: _select3,
            select4: _select4,
            select5: _select5,
            select6: _select6,
            select7: _select7,
            select8: _select8,
            select9: _select9,
            select10: _select10,
            members: mem
        }
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
        } else if(parseInt(value.name) === 5){
            position = 5
        } else if(parseInt(value.name) === 6){
            position = 6
        } else if(parseInt(value.name) === 7){
            position = 7
        } else if(parseInt(value.name) === 8){
            position = 8
        } else if(parseInt(value.name) === 9){
            position = 9
        } else if(parseInt(value.name) === 10){
            position = 10
        }

        let newUser = {
            id: position,
            user_id: input.value,
            name: input.label
        }
        this.props.editParliamentPg(newUser)
        alert('Uspješno ste promjenili člana Podgoričke skupštine')
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
                        <h3 className="box-title pgTitle">Članovi skupštine - Podgorica</h3>
                        <form name="pgForm" >
                            <div className="col-md-4">
                                <div className="addMemberMargin">
                                    <Select className="selectStyle" placeholder="Odaberite ime" value={this.state.select1} options={this.state.members} onChange={this.onChange} name="1"/>
                                    <Select className="selectStyle" placeholder="Odaberite ime" value={this.state.select2} options={this.state.members} onChange={this.onChange} name="2"/>
                                    <Select className="selectStyle" placeholder="Odaberite ime" value={this.state.select3} options={this.state.members} onChange={this.onChange} name="3"/>
                                    <Select className="selectStyle" placeholder="Odaberite ime" value={this.state.select4} options={this.state.members} onChange={this.onChange}  name="4"/>
                                    <Select className="selectStyle" placeholder="Odaberite ime" value={this.state.select5} options={this.state.members} onChange={this.onChange} name="5"/>
                                    <Select className="selectStyle" placeholder="Odaberite ime" value={this.state.select6} options={this.state.members} onChange={this.onChange} name="6"/>
                                    <Select className="selectStyle" placeholder="Odaberite ime" value={this.state.select7} options={this.state.members} onChange={this.onChange} name="7"/>
                                    <Select className="selectStyle" placeholder="Odaberite ime" value={this.state.select8} options={this.state.members} onChange={this.onChange} name="8"/>
                                    <Select className="selectStyle" placeholder="Odaberite ime" value={this.state.select9} options={this.state.members} onChange={this.onChange} name="9"/>
                                    <Select className="selectStyle" placeholder="Odaberite ime" value={this.state.select10} options={this.state.members} onChange={this.onChange} name="10"/>
                                </div>
                                {/* <div className="addMemberMargin">
                                    <button type="submit" className="btn btn-primary" onClick={this.submitForm}>Izmjeni</button>
                                </div> */}
                            </div>
                        </form>
                    </div>
                </div>    
            </div>


        )
    }
}

export default (PgParliament)