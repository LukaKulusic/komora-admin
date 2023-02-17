import React from 'react'
import { withRouter } from 'react-router-dom'
import Select from 'react-select'
import Header from '../Header';
import Sidebar from '../Sidebar';
import RichTextEditor from 'react-rte';
import ImageUploader from 'react-images-upload'

class EditNovelty extends React.Component {
    constructor(props) {
        super(props) 
        this.state = {
            id: '',
            category_id: '',
            category_name: '',
            content: '',
            date: '',
            full_text: RichTextEditor.createEmptyValue(),
            posted_by: '',
            title: '',
            categories: '',
            selectedCategory: "",
            noveltyDetails: [],
            images: []
        }
    }

    setup = () => {
        this.props.getCategories()
        this.props.getDetails(parseInt(this.props.novelty.id))
    }

    componentDidMount(){
        this.setup()
    }

    // componentWillReceiveProps(nextProps) {
    //     let categoriesForSelect = nextProps.categories.map(cat => {
    //         return {
    //             value: cat.id,
    //             label: cat.name
    //         }
    //     })
    //     // let _selectedCategory = categoriesForSelect.find(item => item.value === parseInt(this.props.novelty.id))
    //     let _selectedCategory = categoriesForSelect.find(item => item.value === parseInt(nextProps.noveltyDetails.category_id))
    //     this.setState({
    //         id: nextProps.noveltyDetails.id,
    //         category_id: nextProps.noveltyDetails.category_id,
    //         category_name: nextProps.noveltyDetails.category_name,
    //         content: nextProps.noveltyDetails.content,
    //         date: nextProps.noveltyDetails.date,
    //         full_text: RichTextEditor.createValueFromString(nextProps.noveltyDetails.full_text, 'html'),
    //         posted_by: nextProps.noveltyDetails.posted_by,
    //         title: nextProps.noveltyDetails.title,
    //         categories: categoriesForSelect,
    //         selectedCategory: _selectedCategory
    //     })
    // }

    static getDerivedStateFromProps(nextProps, prevProps) {
        let _noveltyDetails, _categoriesForSelect, _selectedCategory, _id, _category_id, _category_name, _content, _date, _posted_by, _title
        let _full_text = RichTextEditor.createEmptyValue()
        if(nextProps.noveltyDetails !== prevProps.noveltyDetails) {
            _noveltyDetails = nextProps.noveltyDetails
            _id  = nextProps.noveltyDetails.id
            _category_id  = nextProps.noveltyDetails.category_id
            _category_name  = nextProps.noveltyDetails.category_name
            _content  = nextProps.noveltyDetails.content
            _date  = nextProps.noveltyDetails.date
            _full_text  = RichTextEditor.createValueFromString(nextProps.noveltyDetails.full_text, 'html')
            _posted_by  = nextProps.noveltyDetails.posted_by
            _title  = nextProps.noveltyDetails.title
            // _categories  = _categoriesForSelect
            // _selectedCategory  = _selectedCategory
        }
        else {
            if(nextProps.noveltyDetails.full_text !== prevProps.full_text) {
                _full_text = prevProps.full_text
            } else {
                _full_text = nextProps.noveltyDetails.full_text
            }
            _id  = prevProps.id
            _category_id  = prevProps.category_id
            _category_name  = prevProps.category_name
            _content  = prevProps.content
            _date  = prevProps.date
            // _full_text  = RichTextEditor.createValueFromString(prevProps.full_text, 'html')
            _posted_by  = prevProps.posted_by
            _title  = prevProps.title
            _noveltyDetails = nextProps.noveltyDetails

        }
        if(nextProps.categories !== prevProps.categories) {
            _categoriesForSelect = nextProps.categories.map(cat => {
                return {
                    value: cat.id,
                    label: cat.name
                }
            })
            _selectedCategory = _categoriesForSelect.find(item => item.value === parseInt(nextProps.noveltyDetails.category_id))
            if(nextProps.noveltyDetails !== undefined) {
                if(nextProps.noveltyDetails.category_name === prevProps.category_name) {
                    _selectedCategory = prevProps.selectedCategory
                }
            }
        }
        if(nextProps.noveltyDetails !== undefined) {
            if(nextProps.noveltyDetails.category_name !== prevProps.selectedCategory) {
                if(prevProps.selectedCategory !== undefined) {
                    if(prevProps.selectedCategory.length > 0) {
                        _selectedCategory = prevProps.selectedCategory
                    }
                }
            }
        }
        return {
            noveltyDetails: _noveltyDetails,
            id: _id,
            category_id: _category_id,
            category_name: _category_name,
            content: _content,
            date: _date,
            full_text: _full_text,
            posted_by: _posted_by,
            title: _title,
            categories: _categoriesForSelect,
            selectedCategory: _selectedCategory
        }
    }

    changeTitle = (input) => {
        this.setState({
            title: input.target.value
        })
    }

    changeContent = (input) => {
        this.setState({
            content: input.target.value
        })
    }

    changeFullText = (input) => {
        this.setState({
            full_text: input
        })
    }

    changeCategory = (cat) => {
        this.setState({
            // category_id: cat.value,
            // category_name: cat.label
            selectedCategory: cat
        })
    }
    resetFields = () => {
        this.setState({
            title: '',
            category_id: '',
            category_name: '',
            content: '',
            full_text: RichTextEditor.createEmptyValue(),
            categories: [],
            errorName: '',
            errorCity: '',
            errorCompany: '',
            errorPhone: '',
            selectedCategory: '',
            images: []
        })
    }

    submitForm = (e) => {
        e.preventDefault()

        let details = {
            id: this.state.id,
            category_id: this.state.selectedCategory.value,
            category_name: this.state.selectedCategory.label,
            content: this.state.content,
            date: this.state.date,
            full_text: this.state.full_text.toString('html'),
            posted_by: this.state.posted_by,
            title: this.state.title,
            images: this.state.images
        }
        this.props.editNovelty(details)
        alert("Uspjesno ste promjenili vijest")
        this.resetFields()
        let path = '/vijesti'
        this.props.history.push(path)
    }

    onDrop = (images) => {
        this.setState({
            images: this.state.images.concat(images)
        })
    }

    render() {
        return(
            <div>
                <Header />
                <div className="col-md-2">
                    <Sidebar />
                </div>

                <div className="col-md-10 mainContent">
                    <div className="row box addMemberMargin addNews">
                        <form name="editNewsForm" onSubmit={this.submitForm}>
                            <div className="col-md-4">
                                    <div className="box-header with-border">
                                        <h3 className="box-title">Izmijeni vijest</h3>
                                    </div>
                                    <div className="box-body">
                                        <div className="form-group">
                                            <label>Naslov</label>
                                            <input type="text" className="form-control" placeholder="Unesite ime i prezime" value={this.state.title || ""} onChange={this.changeTitle} required/>
                                        </div>
                                        <div className="form-group">
                                            <label>Kategorija</label>
                                            <Select 
                                                onChange={this.changeCategory}
                                                value={this.state.selectedCategory || ""} 
                                                options={this.state.categories}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label>Sadržaj</label>
                                            <input type="text" className="form-control" placeholder="Unesite broj telefona" value={this.state.content || ""} onChange={this.changeContent} />
                                        </div>
                                    </div>

                                    <div className="box-footer">
                                        <button type="submit" className="btn btn-primary">Sačuvaj</button>
                                    </div>
                            </div>
                            <div className="col-md-8">
                                {/* <textarea className="textAreaNews" value={this.state.full_text} onChange={this.changeFullText || ""} ></textarea> */}
                                <RichTextEditor  value={this.state.full_text} onChange={this.changeFullText} className="textEditor" />
                            </div>
                            <div className="col-md-4"></div>
                            <div className="col-md-8 textEditorPadding">
                                <ImageUploader
                                    withPreview={true}
                                    withIcon={true}
                                    buttonText='Choose images'
                                    onChange={this.onDrop}
                                    imgExtension={['.jpg', '.gif', '.png', '.pdf']}
                                    maxFileSize={5242880}
                                    singleImage={true}
                                    label='Odaberite file za upload'
                                />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(EditNovelty)