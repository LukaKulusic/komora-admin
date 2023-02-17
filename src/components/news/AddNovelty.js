import React from 'react'
import { withRouter } from 'react-router-dom'
import Select from 'react-select'
import Header from '../Header';
import Sidebar from '../Sidebar';
import RichTextEditor from 'react-rte';
import ImageUploader from 'react-images-upload'

class AddNovelty extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
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
            images: [],
            titleImg: []
        }
    }

    componentDidMount(){
        this.props.getCategories()
    }

    static getDerivedStateFromProps(nextProps, prevProps) {
        let _selectedCategory, _categories
        if(nextProps.categories !== prevProps.categories) {
            let categoriesForSelect = nextProps.categories.map(cat => {
                return {
                    value: cat.id,
                    label: cat.name
                }
            })
            _categories= categoriesForSelect
            _selectedCategory= categoriesForSelect[0]
            if(prevProps.selectedCategory !== _selectedCategory ) {
                    _selectedCategory = prevProps.selectedCategory
            }
        }
        return {
            categories: _categories,
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
            images: [],
            imgTitle: []
        })
    }

    submitForm = (e) => {
        e.preventDefault()
        const details = {
            category_id: this.state.selectedCategory.value,
            category_name: this.state.selectedCategory.label,
            content: this.state.content,
            full_text: this.state.full_text.toString('html'),
            posted_by: 'admin',
            title: this.state.title,
            images: this.state.images[0],
            imgTitle: this.state.imgTitle[0]
        }

        if(details.full_text.length > 11) {
            this.props.addNovelty(details)
            alert('Uspješno ste dodali vijest')
            this.resetFields()
            // let path = '/vijesti'
            // this.props.history.push(path)
        } else {
            alert("Morate unijeti tekst za vijest")
        }
    }

    onDrop = (images) => {
        this.setState({
            // images: this.state.images.concat(images)
            images: images
        })
    }

    onDroptitle = (images) => {
        this.setState({
            // images: this.state.images.concat(images)
            imgTitle: images
        })
    }

    render() {
        return (
            <div>
                <Header />
                <div className="col-md-2">
                    <Sidebar />
                </div>

                <div className="col-md-10 mainContent">
                    <div className="row box addMemberMargin addNews">
                        <form name="addForm" onSubmit={this.submitForm}>
                            <div className="col-md-4">
                                <div className="box-header with-border">
                                    <h3 className="box-title">Dodaj vijest</h3>
                                </div>
                                <div className="box-body">
                                    <div className="form-group">
                                        <label>Naslovna slika</label>
                                        <ImageUploader
                                            // withPreview={true}
                                            withPreview={this.state.imgTitle !== undefined ? (this.state.imgTitle.length > 0 ? true : false): false}
                                            withIcon={true}
                                            buttonText='Choose image for title'
                                            onChange={this.onDroptitle}
                                            imgExtension={['.jpg', '.gif', '.png', 'jpeg']}
                                            maxFileSize={5242880}
                                            singleImage={true}
                                            label='Odaberite sliku za naslov'
                                            value={this.state.imgTitle}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Naslov</label>
                                        <input type="text" className="form-control" placeholder="Unesite ime i prezime" value={this.state.title} onChange={this.changeTitle} required/>
                                    </div>
                                    <div className="form-group">
                                        <label>Kategorija</label>
                                        <Select 
                                            onChange={this.changeCategory}
                                            value={this.state.selectedCategory || ""}
                                            options={this.state.categories}
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Sadržaj</label>
                                        <input type="text" className="form-control" placeholder="Unesite kratak sadržaj" value={this.state.content} onChange={this.changeContent} required/>
                                    </div>
                                </div>

                                <div className="box-footer">
                                    <button type="submit" className="btn btn-primary">Sačuvaj</button>
                                </div>
                            </div>
                            <div className="col-md-8 textEditorPadding">
                                {/* <textarea className="textAreaNews" value={this.state.full_text} onChange={this.changeFullText} ></textarea> */}
                                <RichTextEditor  value={this.state.full_text} onChange={this.changeFullText} className="textEditor" required/>
                            </div>
                            <div className="col-md-4"></div>
                            <div className="col-md-8 textEditorPadding">
                                <ImageUploader
                                    withPreview={this.state.images !== undefined ? (this.state.images.length > 0 ? true : false): false}
                                    withIcon={true}
                                    buttonText='Choose images'
                                    onChange={this.onDrop}
                                    imgExtension={['.jpg', '.gif', '.png', '.pdf', 'docx']}
                                    maxFileSize={5242880}
                                    singleImage={true}
                                    label='Odaberite file za upload'
                                    value={this.state.images}
                                />
                            </div>
                        </form>
                    </div>
                </div>
            </div>


        )
    }
}

export default withRouter(AddNovelty)