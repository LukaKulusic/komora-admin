import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { userPath } from './constants/user.constants'
import MemberListCnt from './containers/members/MemberListCnt';
import MemberAddCnt from './containers/members/MemberAddCnt';
import MemberEditCnt from './containers/members/MemberEditCnt';
import BoardMembersCnt from './containers/members/BoardMembersCnt';
import ContactCnt from './containers/ContactCnt';
import NewsCnt from './containers/news/NewsCnt'
import NewsForCatCnt from './containers/news/NewsForCatCnt'
import EditNoveltyCnt from './containers/news/EditNoveltyCnt';
import PgCnt from './containers/parliament/PgCnt'
import NkCnt from './containers/parliament/NkCnt'
import CtCnt from './containers/parliament/CtCnt'
import SouthCnt from './containers/parliament/SouthCnt'
import NorthCnt from './containers/parliament/NorthCnt'
import AddNoveltyCnt from './containers/news/AddNoveltyCnt';
import AdvListCnt from './containers/advertisments/AdvListCnt';
import AdvAddCnt from './containers/advertisments/AdvAddCnt';
import AdvEditCnt from './containers/advertisments/AdvEditCnt';
import AboutCnt from './containers/AboutCnt';
import HomePageCnt from './containers/HomePageCnt';
import LoginCnt from './containers/LoginCnt';
import CongressCnt from './containers/CongressCnt';

const routes = [
    {
        path: userPath.homePage,
        exact: true,
        main: () => <div> <HomePageCnt /> </div>
    },
    {
        path: userPath.contact,
        main: () => <div> <ContactCnt /> </div>
    },
    {
        path: userPath.membersList,
        main: () => <div> <MemberListCnt /> </div>
    },
    {
        path: userPath.addMember,
        main: () =>  <MemberAddCnt /> 
    },
    {
        path: userPath.editMember+'/:id',
        main: ({match}) => <MemberEditCnt member={match.params}/>
    },
    {
        path: userPath.boardMembers,
        main: () => <BoardMembersCnt />
    },
    {
        path: userPath.news,
        main: () => <NewsCnt />
    },
    {
        path: userPath.newsForCategory+'/:id',
        main: ({match}) => <NewsForCatCnt category={match.params}/>
    },
    {
        path: userPath.editNovelty+'/:id',
        main: ({match}) => <EditNoveltyCnt novelty={match.params} />
    },
    {
        path: userPath.addNovelty,
        main: () => <AddNoveltyCnt />
    },
    {
        path: userPath.parliamentPG,
        main: () => <PgCnt />
    },
    {
        path: userPath.parliamentNk,
        main: () => <NkCnt />
    },
    {
        path: userPath.parliamentCt,
        main: () => <CtCnt />
    },
    {
        path: userPath.parliamentNorth,
        main: () => <NorthCnt />
    },
    {
        path: userPath.parliamentSouth,
        main: () => <SouthCnt />
    },
    {
        path: userPath.advertisments,
        main: () => <AdvListCnt />
    },
    {
        path: userPath.advertismentAdd,
        main: () => <AdvAddCnt />
    },
    {
        path: userPath.advertismentEdit+'/:id',
        main: ({match}) => <AdvEditCnt adv={match.params} />
    },
    {
        path: userPath.about,
        main: () => <AboutCnt />
    },
    {
        path: userPath.login,
        main: () => <LoginCnt />
    },
    {
        path: userPath.congress,
        main: () => <CongressCnt />
    }
]


class PageRouting extends React.Component {
    
    render() {
        return (
            <Router>
                <div className="skin-blue sidebar-mini">

                    {/* <Header />
                        <div className="col-md-2">
                            <Sidebar />
                        </div> */}

                        {/* <div className="col-md-10"> */}
                        {
                            routes.map((route, index) => (
                                <Route 
                                    key={index}
                                    path={route.path}
                                    exact={route.exact}
                                    component={route.main}
                                />
                            ))
                        }
                        {/* </div> */}
                </div>
            </Router>
            
        )
    }
}

export default PageRouting