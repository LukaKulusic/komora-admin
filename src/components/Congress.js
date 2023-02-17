import React from 'react'
import { withRouter } from 'react-router-dom'
import Header from './Header';
import Sidebar from './Sidebar';
import CongressDetails from './singleComponents/CongressDetails';
import Pagination from 'react-js-pagination'
import ModalCmp from './ModalCmp';

class Congress extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            participans: [],
            data: [],
            activePage: 1,
            usersPerPage: 20,
            numberOfPagButton: 5,
            totalMembers: 0,

            searchField: false,
            filteredParticipans: [],
            sort: {
                column: null,
                direction: 'desc',
            },
            member: '',
            showDeleteModal: false,
        }
    }

    componentDidMount() {
        this.props.getParticipans()
    }

    static getDerivedStateFromProps(nextProps, prevProps) {
        // if(nextProps.participans !== prevProps.participans) {
        //     return {
        //         participans: nextProps.participans,
        //     }
        // }


        let _pagParticipans = []
        if (nextProps.participans !== prevProps.participans) {
            if (nextProps.participans !== undefined) {
                if (nextProps.participans.length > 0) {
                    _pagParticipans = nextProps.participans.slice(
                        prevProps.activePage * prevProps.usersPerPage -
                            prevProps.usersPerPage,
                        prevProps.activePage * prevProps.usersPerPage,
                        []
                    )
                    return {
                        participans: nextProps.participans,
                        data: _pagParticipans,
                        totalMembers: nextProps.participans.length,
                    }
                }
            } 
        }

        if (prevProps.participans.length > 0 && nextProps.participans.length === 0) {
            return {
                participans: nextProps.participans,
                data: nextProps.participans,
                totalMembers: nextProps.participans.length,
            }
        }
       return null
    }

    setActivePage = (currentPage) => {
        let pagParticipans
        if (this.state.searchField === false) {
            pagParticipans = this.props.participans
        } else {
            pagParticipans = this.state.temporaryFiltered
        }
        this.setState({
            activePage: currentPage,
            data: pagParticipans.slice(
                currentPage * this.state.usersPerPage - this.state.usersPerPage,
                currentPage * this.state.usersPerPage,
                []
            ),
        })
    }


    search = (input) => {
        let searchF
        let filteredParticipans = this.props.participans
    let temporaryCount = this.props.participans.length
    let _temporaryFiltered
    let _temporaryNumberOfPages
        if (input.target.value.length > 0) {
            if (input.target.value.match(/[A-Za-z]/)) {
                searchF = true
                filteredParticipans = filteredParticipans.filter((item) => {
                    return (
                        item.name
                            .toLowerCase()
                            .search(input.target.value.toLowerCase()) !== -1
                    )
                })
                _temporaryFiltered = filteredParticipans
                _temporaryNumberOfPages = Math.round(
                    filteredParticipans.length / this.state.usersPerPage
                )
            }
        } else {
            searchF = false
            filteredParticipans = this.props.participans
            temporaryCount = filteredParticipans.length
        }

        this.setState({
            data: filteredParticipans.slice(
                this.state.activePage * this.state.usersPerPage -
                    this.state.usersPerPage,
                this.state.activePage * this.state.usersPerPage,
                []
            ),
            totalMembers: temporaryCount,
            searchField: searchF,
            temporaryFiltered: _temporaryFiltered,
            numberOfPagButton: _temporaryNumberOfPages !== 0 ? _temporaryNumberOfPages : 1,
        })
    }

    onSort = (column) => (e) => {
        const direction = this.state.sort.column
            ? this.state.participans.direction === 'asc'
                ? 'desc'
                : 'asc'
            : 'desc'
        const data = this.state.participans.sort((a, b) => {
            if (column === 'payment') {
                return b.paid - a.paid
            } 
        })
        if (direction === 'asc') {
            data.reverse()
        }
        this.setState({
            sort: {
                column: column,
                direction: direction,
            },
            // data: data
            data: data.slice(
                this.state.activePage * this.state.usersPerPage -
                    this.state.usersPerPage,
                this.state.activePage * this.state.usersPerPage,
                []
            ),
            totalMembers: data.length,
        })
    }

    payment(id, payment) {
        let _payment = {
            id: id,
            payment: payment
        }
        this.props.payment(_payment)
    }

    deleteMemberClick = (_member) => {
        this.setState({
            showDeleteModal: true,
            member: _member.id
        })
    }

    closeModal = () => {
        this.setState({
            showDeleteModal: false
        })
    }

    deleteMember = (_member) => {
        this.props.deleteParticipans(_member)
        this.closeModal()
        // this.setup()
    }

    render() {
        return (
            <div>
                <Header />
                <div className="col-md-2">
                    <Sidebar />
                </div>

                <div className="col-md-10 mainContent">
                    <div className="box">
                        <div className="box-header">
                            <h3 className="box-title">Spisak registracija za kongres</h3>
                        </div>
                        <div>
                            <input
                                type="text"
                                className="searchField"
                                onChange={this.search}
                                placeholder="Pretraga"
                                style={{borderRadius: '5px', width: '250px', height:'30px', marginLeft:'10px', marginBottom:'10px', padding: '5px'}}

                            />
                        </div>
                        <table id="example1" className="table table-bordered table-striped">
                            <thead>
                                <tr className="sortCursor">
                                    <th>
                                        <span className="fa fa-sort"></span>
                                        ID
                                    </th>
                                    <th>
                                        <span className="fa fa-sort"></span>
                                        Ime i prezime
                                    </th>
                                    <th>
                                        Zvanje
                                    </th>
                                    <th>
                                        Ustanova
                                    </th>
                                    {/* <th>
                                        Adresa
                                    </th> */}
                                    {/* <th>
                                        Zemlja
                                    </th> */}
                                    <th>
                                        E-mail
                                    </th>
                                    <th>
                                        Tel
                                    </th>
                                    <th
                                            className="membersBorder"
                                            onClick={this.onSort('payment')}
                                        >
                                            <span className="fa fa-sort"></span>
                                            Placeno
                                        </th>
                                    {/* <th>
                                        Datum
                                    </th> */}
                                    <th>
                                        Rad
                                    </th>
                                    <th>
                                        Akcije
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.data.map(member => {
                                        return <CongressDetails 
                                            key={member.id}
                                            id={member.id}
                                            name={member.name}
                                            vocation={member.vocation}
                                            company={member.company}
                                            address={member.address}
                                            country={member.country}
                                            email={member.email}
                                            phone={member.phone}
                                            paid={member.paid}
                                            date={member.date}
                                            //file
                                            file={member.file}
                                            payment={() => this.payment(member.id, member.paid == 0 ? 1 : 0)}
                                            deleteMember={() => this.deleteMemberClick(member)}
                                        />
                                    })
                                }
                            </tbody>
                        </table>

                        <Pagination
                            activePage={this.state.activePage}
                            itemsCountPerPage={this.state.usersPerPage}
                            totalItemsCount={this.state.totalMembers}
                            pageRangeDisplayed={
                                this.state.numberOfPagButton
                            }
                            onChange={this.setActivePage}
                            />

                        <ModalCmp 
                            showModal={this.state.showDeleteModal}
                            shutDownModal={this.closeModal}
                            sureMessage="Da li ste sigurni?"
                            modalDelete={true}
                            member={this.state.member || ""}
                            deleteMember={() => this.deleteMember(this.state.member)}
                            deleteMemberModal = {true}
                        />
                    </div>
                </div>
            </div>
        )
    }
}


export default withRouter(Congress)