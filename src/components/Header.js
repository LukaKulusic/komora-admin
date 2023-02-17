import React from 'react'
import { NavLink } from 'react-router-dom'

export default function() {
    return (
          <header className="main-header">
            <NavLink to="#1" className="logo">
              <span className="logo-mini"><b>A</b>LT</span>
              <span className="logo-lg" style={{'fontSize':'15px'}}><b>Stomatološka komora</b></span>
            </NavLink>
            <nav className="navbar navbar-static-top">
              <NavLink to="#11" className="sidebar-toggle" data-toggle="push-menu" role="button">
                <span className="sr-only">Toggle navigation</span>
              </NavLink>
                <div className="navbar-custom-menu">
                  <ul className="nav navbar-nav">
                    <li className="dropdown user user-menu">
                      <NavLink to="#1" className="dropdown-toggle" data-toggle="dropdown">
                        <img src="dist/img/logo.png" className="user-image" alt="user" />
                        <span className="hidden-xs">Administrator</span>
                      </NavLink>
                      <ul className="dropdown-menu">
                        <li className="user-header">
                          <img src="dist/img/logo.png" className="img-circle" alt="user" />
                        </li>
                        <li className="user-body">
                          <div className="row">
                            <div className="col-xs-4 text-center">
                              <NavLink to="#1">Followers</NavLink>
                            </div>
                            <div className="col-xs-4 text-center">
                              <NavLink to="#1">Sales</NavLink>
                            </div>
                            <div className="col-xs-4 text-center">
                              <NavLink to="#1">Friends</NavLink>
                            </div>
                          </div>
                        </li>
                        <li className="user-footer">
                          <div className="pull-left">
                            <NavLink to="#1" className="btn btn-default btn-flat">Profile</NavLink>
                          </div>
                          <div className="pull-right">
                            <NavLink to="#1" className="btn btn-default btn-flat">Sign out</NavLink>
                          </div>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <NavLink to="#1" data-toggle="control-sidebar"><i className="fa fa-gears"></i></NavLink>
                    </li>
                  </ul>
                </div>
              </nav>
            </header>
        
    )
}