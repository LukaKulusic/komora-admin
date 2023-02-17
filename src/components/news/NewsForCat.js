import React from 'react'
import { withRouter } from 'react-router-dom'
import Pagination from 'react-js-pagination'
import Novelty from '../singleComponents/Novelty';
import ModalCmp from '../ModalCmp';
import Sidebar from '../Sidebar';
import Header from '../Header';
import Select from 'react-select'


class NewsForCat extends React.Component {
    constructor(props){
        super(props) 
        this.state = {
            news: [],
            data: [],
            sort: {
                column : null,
                direction: 'desc'
            },
            activePage: 1,
            newsPerPage: 10,
            numberOfPagButton: 5,
            totalNews: 0,
            searchField: false,
            temporaryFiltered: [],
            showDeleteModal: false,
            novelty: '',
            categories: [],
            showDeleteNoveltyModal: false,
            selectCategory: ''
        }
    }

    setup = () => {
        // if(this.state.selectCategory !== undefined) {
        //     console.log('1');
        //     console.log(this.state.selectCategory);
        //     if(this.state.selectCategory.value > 0 ) {
        //         console.log('2');
        //         this.props.getNewsForCat(parseInt(this.state.selectCategory.value))
        //     }
        // } else {
        //     console.log('3');
            this.props.getNewsForCat(parseInt(this.props.category.id))
        // }
    }

    componentDidMount = () => {
        this.setup()
    }

   

    // componentWillReceiveProps(nextProps) {
    //     let pagNews = []
    //     console.log('nextProps = ', nextProps);
    //     if(nextProps.news.length > 0) {
    //         pagNews = nextProps.news.slice(this.state.activePage*this.state.newsPerPage - this.state.newsPerPage,
    //             this.state.activePage*this.state.newsPerPage, [])
    //     }
    //     this.setState({
    //         news: nextProps.news,
    //         data: pagNews,
    //         totalNews: nextProps.news.length
    //     })
    // }

    static getDerivedStateFromProps(nextProps, prevProps) {
        let _news = [], _pagNews, _categories =[], _selectedCategory
        if(nextProps.news !== prevProps.news) {
            _news = nextProps.news
            _pagNews = nextProps.news.slice(prevProps.activePage*prevProps.newsPerPage - prevProps.newsPerPage,
                prevProps.activePage*prevProps.newsPerPage, [])
        }
        if(nextProps.categories !== prevProps.categories) {
            _categories = nextProps.categories.map(cat => {
                return {
                    value: cat.id,
                    label: cat.name
                }
            })
            _pagNews = nextProps.news.slice(prevProps.activePage*prevProps.newsPerPage - prevProps.newsPerPage,
                prevProps.activePage*prevProps.newsPerPage, [])
            _selectedCategory = _categories.find(item => item.value === parseInt(nextProps.category.id))
        }
        return {
            news: _news,
            data: _pagNews,
            totalNews: _news.length,
            categories: _categories,
            selectCategory: _selectedCategory
        }
    }

    changeCategory = (event) => {
        this.setState({
            selectCategory: event
        })
        // let path =  '/vijestiKategorije/'+event.value
        // this.props.history.push(path)
    }

    search = (input) => {
        let searchF
        let filteredNews = this.props.news
        let temporaryCount = this.props.news.length
        let _temporaryFiltered
        let _temporaryNumberOfPages
        if(input.target.value.length > 0) {
            searchF = true
            filteredNews = filteredNews.filter(item => {
                return item.title.toLowerCase().search(
                    input.target.value.toLowerCase()) !== -1
            })
            _temporaryFiltered = filteredNews
            _temporaryNumberOfPages = Math.round(filteredNews.length / this.state.newsPerPage)
        } else {
         searchF = false
         filteredNews = this.props.news
         temporaryCount  = filteredNews.length
        }
        this.setState({
            data: filteredNews.slice(this.state.activePage*this.state.newsPerPage - this.state.newsPerPage,
                this.state.activePage*this.state.newsPerPage, []),
            totalNews: temporaryCount,
            searchField: searchF,
            temporaryFiltered: _temporaryFiltered,
            numberOfPagButton: _temporaryNumberOfPages
        })
    }

    setActivePage = (currentPage) => {
        let pagNews
        if(this.state.searchField === false) {
            pagNews = this.props.news
        } else {
            pagNews = this.state.temporaryFiltered   
        }
        this.setState({
            activePage: currentPage,
            data: pagNews.slice(currentPage*this.state.newsPerPage - this.state.newsPerPage,
                    currentPage*this.state.newsPerPage, [])
        })
    }

    onSort = (column) => (e) => {
        const direction = this.state.sort.column ? (this.state.sort.direction === 'asc' ? 'desc' : 'asc') : 'desc';
        const data = this.state.news.sort((a,b) => {
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
            } else if(column === 'content') {
                const contentA = a.content.toUpperCase();
                const contentB = b.content.toUpperCase();
                if(contentA < contentB) {
                    return -1
                }
                if(contentA > contentB) {
                    return 1
                }
                return 0
            } else if(column === 'category') {
                const categoryA = a.category_name.toUpperCase();
                const categoryB = b.category_name.toUpperCase();
                if(categoryA < categoryB) {
                    return -1
                }
                if(categoryA > categoryB) {
                    return 1
                }
                return 0
            } else if(column === 'date') {
                return b.date - a.date
            } else if (column === 'id') {
                return b.id - a.id
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
            // data: data
            data: data.slice(this.state.activePage*this.state.newsPerPage - this.state.newsPerPage,
                this.state.activePage*this.state.newsPerPage, []),
            totalNews: data.length
        })
    }

    deleteNoveltyClick = (_novelty) => {
        this.setState({
            showDeleteNoveltyModal: true,
            novelty: _novelty
        })
    }

    closeModal = () => {
        this.setState({
            showDeleteNoveltyModal: false
        })
    }

    deleteNovelty = (_novelty) => {
        this.props.deleteNovelty(_novelty)
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
                            <h3 className="box-title">Pregled cjelokupnih vijesti:</h3>
                        </div>
                        <div className="col-md-6">
                            {/* <Select
                                className="selectCategory" 
                                placeholder="Odaberite kategoriju" 
                                onChange={this.changeCategory}
                                value={this.state.selectCategory}
                                options={this.state.categories}
                            /> */}
                            <h4>Vijezi za kategoriju: {this.state.selectCategory !== undefined ? this.state.selectCategory.label : ""} </h4>
                        </div>
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
                                        <th onClick={this.onSort('category')}>
                                            <span className="fa fa-sort"></span>
                                            Kategorija
                                        </th>
                                        <th onClick={this.onSort('content')}>
                                            <span className="fa fa-sort"></span>
                                            Sadržaj
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
                                        this.state.data !== undefined ?

                                        this.state.data.map(novelty => {
                                            return <Novelty 
                                                key={novelty.id}
                                                id={novelty.id}
                                                title={novelty.title}
                                                date={novelty.date}
                                                category_name={novelty.category_name}
                                                content={novelty.content}
                                                deleteNovelty={() => this.deleteNoveltyClick(novelty)}
                                            />
                                        })
                                        : <tr>
                                            <td></td>
                                        </tr>   
                                    }
                                </tbody>
                                <tfoot>
                                    <tr>
                                        <th>ID</th>
                                        <th>Naslov</th>
                                        <th>Sadržaj</th>
                                        <th>Datum</th>
                                        <th>Akcije</th>
                                    </tr>
                                </tfoot>
                            </table> 
                        </div>

                        <Pagination 
                            activePage={this.state.activePage}
                            itemsCountPerPage={this.state.newsPerPage}
                            totalItemsCount={this.state.totalNews}
                            pageRangeDisplayed={this.state.numberOfPagButton}
                            onChange={this.setActivePage}
                        />

                        <ModalCmp 
                            showModal={this.state.showDeleteNoveltyModal}
                            shutDownModal={this.closeModal}
                            sureMessage="Da li ste sigurni?"
                            novelty={this.state.novelty || ""}
                            deleteNovelty={() => this.deleteNovelty(this.state.novelty)}
                            deleteMemberModal = {false}
                        />

                    </div>
                </div>
            </div>

        )
    }
}

export default withRouter(NewsForCat)