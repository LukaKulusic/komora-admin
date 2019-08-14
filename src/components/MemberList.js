import React from 'react'
import  { withRouter } from 'react-router-dom'
import Pagination from 'react-js-pagination'
import MemberCnt from '../containers/MemberCnt';
import ModalCmp from './ModalCmp';

class MembersList extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            members: [],
            data: [],
            sort: {
                column : null,
                direction: 'desc'
            },
            activePage: 1,
            usersPerPage: 10,
            numberOfPagButton: 5,
            totalMembers: 0,
            searchField: false,
            temporaryFiltered: [],
            showDeleteModal: false,
            member: ''
        }
    }

    componentDidMount() {   
        this.setup()
    }


    componentWillReceiveProps(nextProps) {
        let pagMembers = []
        if(nextProps.members.length > 0) {
            pagMembers = nextProps.members.slice(this.state.activePage*this.state.usersPerPage - this.state.usersPerPage,
                this.state.activePage*this.state.usersPerPage, [])
        }
        this.setState({
            members: nextProps.members,
            data: pagMembers,
            totalMembers: nextProps.members.length
        })
    }

    setup = () => {
        this.props.getMembers()
    }

    onSort = (column) => (e) => {
        const direction = this.state.sort.column ? (this.state.sort.direction === 'asc' ? 'desc' : 'asc') : 'desc';
        const data = this.state.members.sort((a,b) => {
            if(column === 'name') {
                const nameA = a.name.toUpperCase();
                const nameB = b.name.toUpperCase();
                if(nameA < nameB) {
                    return -1
                }
                if(nameA > nameB) {
                    return 1
                }
                return 0
            } else if(column === 'city') {
                const nameA = a.name.toUpperCase();
                const nameB = b.name.toUpperCase();
                if(nameA < nameB) {
                    return -1
                }
                if(nameA > nameB) {
                    return 1
                }
                return 0
            } else if(column === 'company') {
                const nameA = a.name.toUpperCase();
                const nameB = b.name.toUpperCase();
                if(nameA < nameB) {
                    return -1
                }
                if(nameA > nameB) {
                    return 1
                }
                return 0
            } else if(column === 'phone') {
                return b.id - a.id
            } else if (column === 'id') {
                return b.id - a.id
            }
        })
        if(direction === 'asc') {
            data.reverse()
        }
        this.setState({
            sort: {
                column: column,
                direction: direction
            },
            // data: data
            data: data.slice(this.state.activePage*this.state.usersPerPage - this.state.usersPerPage,
                this.state.activePage*this.state.usersPerPage, []),
            totalMembers: data.length
        })
    }

    search = (input) => {
        let searchF
        let filteredMembers = this.props.members
        let temporaryCount = this.props.members.length
        let _temporaryFiltered
        let _temporaryNumberOfPages
        if(input.target.value.length > 0) {
            searchF = true
            filteredMembers = filteredMembers.filter(item => {
                return item.name.toLowerCase().search(
                    input.target.value.toLowerCase()) !== -1
            })
            _temporaryFiltered = filteredMembers
            _temporaryNumberOfPages = Math.round(filteredMembers.length / this.state.usersPerPage)
        } else {
         searchF = false
         filteredMembers = this.props.members
         temporaryCount  = filteredMembers.length
        }
        this.setState({
            data: filteredMembers.slice(this.state.activePage*this.state.usersPerPage - this.state.usersPerPage,
                this.state.activePage*this.state.usersPerPage, []),
            totalMembers: temporaryCount,
            searchField: searchF,
            temporaryFiltered: _temporaryFiltered,
            numberOfPagButton: _temporaryNumberOfPages
        })
    }

    setActivePage = (currentPage) => {
        let pagMembers
        if(this.state.searchField === false) {
            pagMembers = this.props.members
        } else {
            pagMembers = this.state.temporaryFiltered   
        }
        this.setState({
            activePage: currentPage,
            data: pagMembers.slice(currentPage*this.state.usersPerPage - this.state.usersPerPage,
                    currentPage*this.state.usersPerPage, [])
        })
    }

    deleteMemberClick = (_member) => {
        this.setState({
            showDeleteModal: true,
            member: _member
        })
    }


    closeModal = () => {
        this.setState({
            showDeleteModal: false
        })
    }

    deleteMember = (_member) => {
        this.props.deleteMember(_member)
        this.closeModal()
    }

    render() {
        return(
            <div className="box ">

                <div className="box-header">
                    <h3 className="box-title">Spisak članova komore</h3>
                </div>
                {/* <div style={{'textAlign': 'right'}}>
                    <label> 
                        <input className="form-control input-sm" placeholder="Pretraga po imenu"/>
                    </label>
                </div> */}
                <div className="col-md-6"></div>
                <div className="col-md-6 searchAligment">
                    <form className="form-horizontal">
                        <div className="form-group">
                            <label>
                                Pretraga: 
                            </label>
                            <input className="searchInput" type="text" onChange={this.search} />
                        </div>
                    </form>
                </div>

                <div className="box-body">
                <table id="example1" className="table table-bordered table-striped">
                    <thead>
                        <tr className="sortCursor">
                            <th  onClick={this.onSort('id')}>
                                <span className="fa fa-sort"></span>
                                ID
                            </th>
                            <th onClick={this.onSort('name')}>
                                <span className="fa fa-sort"></span>
                                Ime i prezime
                            </th>
                            <th onClick={this.onSort('phone')}>
                                <span className="fa fa-sort"></span>
                                Telefon
                            </th>
                            <th onClick={this.onSort('city')}>
                                <span className="fa fa-sort"></span>
                                Grad
                            </th>
                            <th onClick={this.onSort('company')}>
                                <span className="fa fa-sort"></span>
                                Radno mjesto
                            </th>
                            <th>
                                Akcije
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.data.map(member => {
                                return <MemberCnt 
                                    key={member.id}
                                    id={member.id}
                                    name={member.name}
                                    phone={member.phone}
                                    city={member.city}
                                    company={member.company}
                                    deleteMember={() => this.deleteMemberClick(member)}
                                />
                            })
                        }
                    </tbody>
                    <tfoot>
                        <tr>
                            <th>ID</th>
                            <th>Ime i prezime</th>
                            <th>Platform(s)</th>
                            <th>Grad</th>
                            <th>Radno mjesto</th>
                            <th>Akcije</th>
                        </tr>
                    </tfoot>
                </table>
                </div>

            <Pagination 
                activePage={this.state.activePage}
                itemsCountPerPage={this.state.usersPerPage}
                totalItemsCount={this.state.totalMembers}
                pageRangeDisplayed={this.state.numberOfPagButton}
                onChange={this.setActivePage}
            />

            <ModalCmp 
                showModal={this.state.showDeleteModal}
                shutDownModal={this.closeModal}
                sureMessage="Da li ste sigurni?"
                modalDelete={true}
                member={this.state.member || ""}
                deleteMember={() => this.deleteMember(this.state.member)}
            />

          </div>
        )
    }
}

export default withRouter(MembersList)