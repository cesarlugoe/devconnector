import React, { Component } from 'react'
import FlagUs from '../../assets/img/icons/flags/us.svg';
import FlagEs from '../../assets/img/icons/flags/es.svg';
import FlagRo from '../../assets/img/icons/flags/ro.svg';
import FlagGr from '../../assets/img/icons/flags/gr.svg';
import BrandWhite from '../../assets/img/brand/white.png';
import DuskBrowserWindow from '../../assets/img/icons/dusk/svg/browser-window.svg';
import DuskIosPhotos from '../../assets/img/icons/dusk/svg/ios-photos.svg';
import DuskMaintenance from '../../assets/img/icons/dusk/svg/maintenance.svg';
import DuskInProgress from '../../assets/img/icons/dusk/svg/in-progress.svg';

const imgHeightStyle = {
  height: '50px'
};

const imgWidthStyle = {
  width: '50px'
};

class Header extends Component {
  render() {
    return (
        <header className="header-transparent" id="header-main">

            <div id="search-main" className="navbar-search">
                <div className="container">
                    <form className="navbar-search-form" role="form">
                        <div className="form-group">
                            <div className="input-group input-group-transparent">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"><i className="fas fa-search"></i></span>
                                </div>
                                <input type="text" className="form-control" placeholder="Type and hit enter ..." />
                            </div>
                        </div>
                    </form>
                    <div className="navbar-search-suggestions">
                        <h6>Search Suggestions</h6>
                        <div className="row">
                            <div className="col-sm-6">
                                <ul className="list-unstyled mb-0">
                                    <li>
                                        <a className="list-link" href="#">
                                            <i className="fas fa-search"></i>
                                            <span>macbook pro</span> in Laptops
                                        </a>
                                    </li>
                                    <li>
                                        <a className="list-link" href="#">
                                            <i className="fas fa-search"></i>
                                            <span>iphone 8</span> in Smartphones
                                        </a>
                                    </li>
                                    <li>
                                        <a className="list-link" href="#">
                                            <i className="fas fa-search"></i>
                                            <span>macbook pro</span> in Laptops
                                        </a>
                                    </li>
                                    <li>
                                        <a className="list-link" href="#">
                                            <i className="fas fa-search"></i>
                                            <span>beats pro solo 3</span> in Headphones
                                        </a>
                                    </li>
                                    <li>
                                        <a className="list-link" href="#">
                                            <i className="fas fa-search"></i>
                                            <span>smasung galaxy 10</span> in Phones
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div id="navbar-top-main" className="navbar-top  navbar-dark bg-dark border-bottom">
                <div className="container">
                    <div className="navbar-nav align-items-center">
                        <div className="d-none d-lg-inline-block">
                            <span className="navbar-text mr-3">Purpose - Website UI Kit</span>
                        </div>
                        <div>
                            <ul className="nav">
                                <li className="nav-item dropdown ml-lg-2 dropdown-animate" data-toggle="hover">
                                    <a className="nav-link px-0" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <img alt="Image placeholder" src={FlagUs} />
                                        <span className="d-none d-lg-inline-block">United States</span>
                                        <span className="d-lg-none">EN</span>
                                    </a>
                                    <div className="dropdown-menu dropdown-menu-sm dropdown-menu-arrow">
                                        <a href="" className="dropdown-item">
                                            <img alt="Image placeholder" src={FlagEs} />Spanish</a>
                                        <a href="" className="dropdown-item">
                                            <img alt="Image placeholder" src={FlagRo} />Romanian</a>
                                        <a href="" className="dropdown-item">
                                            <img alt="Image placeholder" src={FlagGr} />Greek</a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="ml-auto">
                            <ul className="nav">
                                <li className="nav-item">
                                    <a className="nav-link" href="pages/support.html">Support</a>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link" data-action="search-open" data-target="#search-main"><i className="fas fa-search"></i></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="pages/shop-cart.html"><i className="fas fa-shopping-cart"></i></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="pages/login.html"><i className="fas fa-user-circle"></i></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <nav className="navbar navbar-main navbar-expand-lg navbar-sticky navbar-transparent navbar-dark bg-dark" id="navbar-main">
                <div className="container">
                    <a className="navbar-brand mr-lg-5" href="index.html">
                        <img alt="Image placeholder" src={BrandWhite} style={imgHeightStyle} />
                    </a>

                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-main-collapse" aria-controls="navbar-main-collapse" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbar-main-collapse">
                        <ul className="navbar-nav align-items-lg-center">
                            <li className="nav-item ">
                                <a className="nav-link" href="index.html">Overview</a>
                            </li>
                            <li className="nav-item dropdown dropdown-animate" data-toggle="hover">
                                <a className="nav-link" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Pages</a>
                                <div className="dropdown-menu dropdown-menu-lg dropdown-menu-arrow py-0">
                                    <div className="list-group">
                                        <a href="pages/pages-landing.html" className="list-group-item list-group-item-action">
                                            <div className="media d-flex align-items-center">
                                                <img alt="Image placeholder" src={DuskBrowserWindow} className="img-saturate" style={imgWidthStyle} />
                                                <div className="media-body ml-3">
                                                    <h6 className="mb-1">Landing Pages</h6>
                                                    <p className="mb-0">A great point to start from.</p>
                                                </div>
                                            </div>
                                        </a>
                                        <a href="pages/pages-secondary.html" className="list-group-item list-group-item-action">
                                            <div className="media d-flex align-items-center">
                                                <img alt="Image placeholder" src={DuskIosPhotos} className="img-saturate" style={imgWidthStyle}/>
                                                <div className="media-body ml-3">
                                                    <h6 className="mb-1">Secondary Pages</h6>
                                                    <p className="mb-0">Build your website with these demos.</p>
                                                </div>
                                            </div>
                                        </a>
                                        <a href="pages/pages-account.html" className="list-group-item list-group-item-action">
                                            <div className="media d-flex align-items-center">
                                                <img alt="Image placeholder" src={DuskMaintenance} className="img-saturate" style={imgWidthStyle} />
                                                <div className="media-body ml-3">
                                                    <h6 className="mb-1">Account Pages</h6>
                                                    <p className="mb-0">Account management made easy.</p>
                                                </div>
                                            </div>
                                        </a>
                                        <a href="pages/pages-shop.html" className="list-group-item list-group-item-action">
                                            <div className="media d-flex align-items-center">
                                                <img alt="Image placeholder" src={DuskInProgress} className="img-saturate" style={imgWidthStyle} />
                                                <div className="media-body ml-3">
                                                    <h6 className="mb-1">Shop Pages</h6>
                                                    <p className="mb-0">Explore the full ecommerce website flow.</p>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="docs/alerts.html" role="button">Components</a>
                            </li>
                        </ul>

                        <ul className="navbar-nav align-items-lg-center ml-lg-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="docs/introduction.html" target="_blank">Docs</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="docs/changelog.html" target="_blank">Changelog</a>
                            </li>
                            <li className="nav-item mr-0">
                                <a href="https://themes.getbootstrap.com/product/purpose-website-ui-kit/" target="_blank" className="nav-link d-lg-none">Purchase now</a>
                                <a href="https://themes.getbootstrap.com/product/purpose-website-ui-kit/" target="_blank" className="btn btn-sm btn-white btn-circle btn-icon d-none d-lg-inline-flex">
                                    <span className="btn-inner--icon"><i className="fas fa-shopping-cart"></i></span>
                                    <span className="btn-inner--text">Purchase now</span>
                                </a>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>

        </header>
    )
  }
}

export default Header;
