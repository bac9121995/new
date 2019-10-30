import React, { Component } from 'react';
import {Link} from 'react-router-dom'
class Cart extends Component {
    render() {
        return (
            <ul className="sidebar-menu" data-widget="tree">
                <li className="active">
                    <Link to="/admin/tong-quan.html">
                        <i className="fa fa-th"></i> <span>Tổng quan</span>
                    </Link>
                </li>
                <li className="treeview active">
                    <Link to="#">
                        <i className="fa fa-th"></i> <span>Quản lý câu hỏi</span>
                        <span className="pull-right-container">
                            <i className="fa fa-angle-left pull-right"></i>
                        </span>
                    </Link>
                    <ul className="treeview-menu">
                        <li><Link to="/admin/quan-ly-cau-hoi.html?type=0"><i
                            className="fa fa-circle-o"></i> Câu hỏi chờ duyệt</Link></li>
                        <li><Link to="/admin/quan-ly-cau-hoi.html?type=1"><i
                            className="fa fa-circle-o"></i> Câu hỏi thành công</Link></li>
                        <li><Link to="/admin/quan-ly-cau-hoi.html?type=2"><i
                            className="fa fa-circle-o"></i> Câu hỏi thất bại</Link></li>
                    </ul>
                </li>
            </ul>
        );
    }
}

export default Cart;
