import React from 'react'
import { withRouter } from 'react-router-dom'
import Header from '../Header';
import Sidebar from '../Sidebar';
import Adv from '../singleComponents/Adv';
import ModalCmp from '../ModalCmp';
import Pagination from 'react-js-pagination'

class AdvList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            advs: '',
            data: [],
            sort: {
                column : null,
                direction: 'desc'
            },
            activePage: 1,
            advsPerPage: 10,
            numberOfPagButton: 5,
            totalAdvs: 0,
            searchField: false,
            temporaryFiltered: [],
            showDeleteModal: false,
            adv: '',
            showDeleteAdvModal: false
        }
    }

    componentDidMount() {
        this.props.getAdvs()
    }

    // componentWillReceiveProps(nextProps) {
    //     let pagAdvs = []
    //     if(nextProps.advs.length > 0) {
    //         pagAdvs = nextProps.advs.slice(this.state.activePage*this.state.advsPerPage - this.state.advsPerPage,
    //             this.state.activePage*this.state.advsPerPage, [])
    //     }
    //     this.setState({
    //         advs: nextProps.advs,
    //         data: pagAdvs,
    //         totalAdvs: nextProps.advs.length
    //     })
    // }

    static getDerivedStateFromProps(nextProps, prevProps) {
        let pagAdvs = []
        if(nextProps.advs !== prevProps.advs) {
            if(nextProps.advs.length > 0) {
                pagAdvs = nextProps.advs.slice(prevProps.activePage*prevProps.advsPerPage - prevProps.advsPerPage,
                prevProps.activePage*prevProps.advsPerPage, [])
            }
            return {
                advs: nextProps.advs,
                data: pagAdvs,
                totalAdvs: nextProps.advs.length
            }
        }
        return null
    }

    search = (input) => {
        let searchF
        let filteredAdvs = this.props.advs
        let temporaryCount = this.props.advs.length
        let _temporaryFiltered
        let _temporaryNumberOfPages
        if(input.target.value.length > 0) {
            searchF = true
            filteredAdvs = filteredAdvs.filter(item => {
                return item.title.toLowerCase().search(
                    input.target.value.toLowerCase()) !== -1
            })
            _temporaryFiltered = filteredAdvs
            _temporaryNumberOfPages = Math.round(filteredAdvs.length / this.state.advsPerPage)
        } else {
         searchF = false
         filteredAdvs = this.props.advs
         temporaryCount  = filteredAdvs.length
        }
        this.setState({
            data: filteredAdvs.slice(this.state.activePage*this.state.advsPerPage - this.state.advsPerPage,
                this.state.activePage*this.state.advsPerPage, []),
            totalAdvs: temporaryCount,
            searchField: searchF,
            temporaryFiltered: _temporaryFiltered,
            numberOfPagButton: _temporaryNumberOfPages
        })
    }

    setActivePage = (currentPage) => {
        let pagAdvs
        if(this.state.searchField === false) {
            pagAdvs = this.props.advs
        } else {
            pagAdvs = this.state.temporaryFiltered   
        }
        this.setState({
            activePage: currentPage,
            data: pagAdvs.slice(currentPage*this.state.advsPerPage - this.staadvs,
                    currentPage*this.staadvs, [])
        })
    }


    onSort = (column) => (e) => {
        const direction = this.state.sort.column ? (this.state.sort.direction === 'asc' ? 'desc' : 'asc') : 'desc';
        const data = this.state.advs.sort((a,b) => {
            if(column === 'title') {
                const titleA = a.title.toUpperCase();
                const titleB = b.title.toUpperCase();
                if(titleA < titleB) {
                    return -1
                }
                if(titleA > titleB) {
                    return 1
                }
                return 0
            } else if (column === 'id') {
                return b.id - a.id
            } else if (column ==='date') {
                return b.date - a.date
            }
            return 0;
        }) 
        if(direction === 'asc') {
            data.reverse()
        }
        this.setState({
            sort: {
                column: column,
                direction: direction
            },
            data: data.slice(this.state.activePage*this.state.advsPerPage - this.state.advsPerPage,
                this.state.activePage*this.state.advsPerPage, []),
            totalAdvs: data.length
        })
    }

    closeModal = (_adv) => {
        this.setState({
            showDeleteAdvModal: false,
            adv: _adv
        })
    }

    deleteAdvClick = (_adv) => {
        this.setState({
            showDeleteAdvModal: true,
            adv: _adv
        })
    }

    deleteAdv = (_adv) => {
        this.props.deleteAdv(_adv)
        this.closeModal()
    }

    render() {
        return(
            <div>
                <Header />
                <div className="col-md-2">
                    <Sidebar />
                </div>

                <div className="col-md-10 mainContent">
                    <div className="box col-md-12">
                        <div className="box-header">
                            <h3 className="box-title">Pregled oglasa:</h3>
                        </div>
                        <div className="col-md-6"></div>
                        <div className="col-md-6 newsSearch">
                            <form className="form-horizontal">
                                <div className="form-group">
                                    <label>
                                        Pretraga po naslovu: 
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
                                        <th onClick={this.onSort('title')}>
                                            <span className="fa fa-sort"></span>
                                            Naslov
                                        </th>
                                        <th>
                                            <span className="fa fa-sort"></span>
                                            Tekst
                                        </th>
                                        <th onClick={this.onSort('phone')}>
                                            <span className="fa fa-sort"></span>
                                            Tel
                                        </th>
                                        <th onClick={this.onSort('date')}>
                                            <span className="fa fa-sort"></span>
                                            Datum
                                        </th>
                                        <th>
                                            Akcije
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                {
                                    this.state.data.map(adv => {
                                        return <Adv
                                            key={adv.id}
                                            id={adv.id}
                                            title={adv.title}
                                            phone={adv.phone}
                                            date={adv.date}
                                            full_text={adv.full_text}
                                            deleteAdv={() => this.deleteAdvClick(adv)}
                                        />
                                    })
                                }
                                </tbody>
                                <tfoot>
                                    <tr>
                                        <th>ID</th>
                                        <th>Naslov</th>
                                        <th>Tekst</th>
                                        <th>Datum</th>
                                        <th>Akcije</th>
                                    </tr>
                                </tfoot>
                            </table> 
                        </div>


                        <Pagination 
                            activePage={this.state.activePage}
                            itemsCountPerPage={this.state.advsPerPage}
                            totalItemsCount={this.state.totalAdvs}
                            pageRangeDisplayed={this.state.numberOfPagButton}
                            onChange={this.setActivePage}
                        />

                        <ModalCmp 
                            showModal={this.state.showDeleteAdvModal}
                            shutDownModal={this.closeModal}
                            sureMessage="Da li ste sigurni?"
                            adv={this.state.adv || ""}
                            deleteAdv={() => this.deleteAdv(this.state.adv)}
                            deleteMemberModal = {false}
                            deleteAdvModal={true}
                        />

                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(AdvList)