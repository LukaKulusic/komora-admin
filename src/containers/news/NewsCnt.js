import { connect } from 'react-redux'
import News from '../../components/news/News'
import { getNews_request, deleteNews_request } from '../../actions/news.actions';
import { getCategory_request } from '../../actions/category.action';

const mapStateToProps = state => ({
    news: state.newsReducer.news,
    categories: state.categoryReducer.categories
})

const mapDispatchToProps = dispatch => ({
    getNews: () => dispatch(getNews_request()),
    getCategories: () => dispatch(getCategory_request()),
    deleteNovelty: (novelty) => dispatch(deleteNews_request(novelty))
    // deleteNovelty: (novelty) => dispatch(deleteNews_success(novelty))
})

const NewsCnt = connect (
    mapStateToProps,
    mapDispatchToProps
)(News)

export default NewsCnt