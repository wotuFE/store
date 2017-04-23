import React from 'react';
import ReactDOM from 'react-dom';
import { IndexLink, Link } from 'react-router'
import Appbar from 'muicss/lib/react/appbar';
import './footer.scss'
export const Footer = () => (
  <div className="footer">
    <IndexLink to='/' activeClassName='route--active'>
      首页
    </IndexLink>
    {' · '}
    <Link to='/detail' activeClassName='route--active'>
      详情
    </Link>
    {' · '}
    <Link to='/login' activeClassName='route--active'>
      登录
    </Link>
    {' · '}
    <Link to='/test' activeClassName='route--active'>
      测试
    </Link>
    {' · '}
    <Link to='/route/88' activeClassName='route--active'>
      Route
    </Link>
    {' · '}
    <Link to='/methods' activeClassName='route--active'>
      相关方法
    </Link>
    {/*
        <Link to='/notFound' activeClassName='route--active'>
          404
        </Link>

    */}

  </div>
)
export default Footer;
