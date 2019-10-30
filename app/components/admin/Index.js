import React, { Component } from 'react';
import Menu from "./Menu"
import {Route, Switch} from 'react-router-dom'
import routes from './route.js'
class Header extends Component {
    showRoute = () =>{
        return routes.map((item, index)=>{
            return <Route key={`route-admin-${index}`} path={item.path} exact={item.exact} component={item.main}/>
        })
    }
    render() {
        return (
            <div>
                <div>
                    <div id="loading-full-screen" style={{ position: 'fixed', background: '#bbbbbb7a', zIndex: 99, width: '100%', height: '100%', display: 'none' }}>
                        <div style={{ background: '#fff', width: '70px', height: '70px', textAlign: 'center', padding: '13px', borderRadius: '35px', margin: 'calc(50vh - 35px) auto auto' }}>
                            <img alt="" style={{ width: '100%', height: '100%' }} src="/template/loading.gif" />
                        </div>
                    </div>
                    <div className="over" />
                    <div className="wrapper">
                        <header className="main-header">
                            <a href="/" className="logo">
                                <span className="logo-mini"><b>M</b>T</span>
                                <span className="logo-lg"><b>My</b>Tokyo</span>
                            </a>
                            <nav className="navbar navbar-static-top">
                                <a  className="sidebar-toggle" data-toggle="push-menu">
                                    <span className="sr-only">Toggle navigation</span>
                                </a>
                                <div className="navbar-custom-menu">
                                    <ul className="nav navbar-nav">
                                        <li className="dropdown user user-menu">
                                            <a  className="dropdown-toggle" data-toggle="dropdown">
                                                <img src="/template/favicon.png" className="user-image" alt="" />
                                                <span className="hidden-xs">ADMIN</span>
                                            </a>
                                            <ul className="dropdown-menu">
                                                <li className="user-footer" style={{ background: '#003c8e' }}>
                                                    <div className="pull-left">
                                                    </div>
                                                    <div className="pull-right">
                                                        <a href="/logout.html" style={{ color: '#fff' }}>Đăng xuất</a>
                                                    </div>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </nav>
                        </header>
                        <aside className="main-sidebar">
                            <section className="sidebar">
                                <div className="user-panel">
                                    <div className="pull-left image">
                                        <img src="/template/favicon.png" className="img-circle" alt="" />
                                    </div>
                                    <div className="pull-left info">
                                        <p />
                                    </div>
                                </div>
                                < Menu />
                            </section>
                        </aside>
                        <div className="box-footer">
                            <div className="toast toast--green hidden" id="success-noti">
                                <div className="toast__icon">
                                    <svg version="1.1" className="toast__svg" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style={{ enableBackground: 'new 0 0 512 512' }} xmlSpace="preserve">
                                        <g>
                                            <g>
                                                <path d="M504.502,75.496c-9.997-9.998-26.205-9.998-36.204,0L161.594,382.203L43.702,264.311c-9.997-9.998-26.205-9.997-36.204,0    c-9.998,9.997-9.998,26.205,0,36.203l135.994,135.992c9.994,9.997,26.214,9.99,36.204,0L504.502,111.7    C514.5,101.703,514.499,85.494,504.502,75.496z">
                                                </path>
                                            </g>
                                        </g>
                                    </svg>
                                </div>
                                <div className="toast__content">
                                    <p className="toast__type">Success</p>
                                    <p className="toast__message" />
                                </div>
                                <div className="toast__close">
                                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.642 15.642" xmlnsXlink="http://www.w3.org/1999/xlink" enableBackground="new 0 0 15.642 15.642">
                                        <path fillRule="evenodd" d="M8.882,7.821l6.541-6.541c0.293-0.293,0.293-0.768,0-1.061  c-0.293-0.293-0.768-0.293-1.061,0L7.821,6.76L1.28,0.22c-0.293-0.293-0.768-0.293-1.061,0c-0.293,0.293-0.293,0.768,0,1.061  l6.541,6.541L0.22,14.362c-0.293,0.293-0.293,0.768,0,1.061c0.147,0.146,0.338,0.22,0.53,0.22s0.384-0.073,0.53-0.22l6.541-6.541  l6.541,6.541c0.147,0.146,0.338,0.22,0.53,0.22c0.192,0,0.384-0.073,0.53-0.22c0.293-0.293,0.293-0.768,0-1.061L8.882,7.821z">
                                        </path>
                                    </svg>
                                </div>
                            </div>
                            <div className="toast toast--yellow hidden" id="fail-noti">
                                <div className="toast__icon">
                                    <svg version="1.1" className="toast__svg" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 301.691 301.691" style={{ enableBackground: 'new 0 0 301.691 301.691' }} xmlSpace="preserve">
                                        <g>
                                            <polygon points="119.151,0 129.6,218.406 172.06,218.406 182.54,0  " />
                                            <rect x="130.563" y="261.168" width="40.525" height="40.523" />
                                        </g>
                                    </svg>
                                </div>
                                <div className="toast__content">
                                    <p className="toast__type">Fail!</p>
                                    <p className="toast__message" />
                                </div>
                                <div className="toast__close">
                                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.642 15.642" xmlnsXlink="http://www.w3.org/1999/xlink" enableBackground="new 0 0 15.642 15.642">
                                        <path fillRule="evenodd" d="M8.882,7.821l6.541-6.541c0.293-0.293,0.293-0.768,0-1.061  c-0.293-0.293-0.768-0.293-1.061,0L7.821,6.76L1.28,0.22c-0.293-0.293-0.768-0.293-1.061,0c-0.293,0.293-0.293,0.768,0,1.061  l6.541,6.541L0.22,14.362c-0.293,0.293-0.293,0.768,0,1.061c0.147,0.146,0.338,0.22,0.53,0.22s0.384-0.073,0.53-0.22l6.541-6.541  l6.541,6.541c0.147,0.146,0.338,0.22,0.53,0.22c0.192,0,0.384-0.073,0.53-0.22c0.293-0.293,0.293-0.768,0-1.061L8.882,7.821z">
                                        </path>
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <Switch>
                            {this.showRoute()}
                        </Switch>
                        <footer className="main-footer">
                            <div className="pull-right hidden-xs">
                                <b>Version</b> 1.0.0
                            </div>
                            <strong>Copyright © 2018-2019 <a rel="noopener noreferrer" target="_blank" href="https://www.facebook.com/CodeLab-Center-435772240117170/">Codelab Team</a>.</strong> All rights  reserved.
                        </footer>
                    </div>
                </div>
            </div >
        );
    }
}

export default Header;
