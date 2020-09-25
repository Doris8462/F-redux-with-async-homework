import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUserInfo, logOut } from '../actions';
import './Header.scss';

class Header extends Component {
  handleOnClick = () => {
    if (!this.props.fetchUserInfo.isLoggedin) {
      this.props.handleFetchUserInfo();
    } else {
      this.props.handleLogOut();
    }
  };

  render() {
    return (
      <header className="header">
        <div className="header-wrapper">
          {this.props.fetchUserInfo.isLoggedin && (
            <>
              <img src="https://avatars2.githubusercontent.com/u/40817605" alt="头像" />
              <span className="username">Kevin</span>
            </>
          )}

          <a className="sign" onClick={this.handleOnClick}>
            {this.props.fetchUserInfo.isLoggedin ? 'Sign out' : 'Sign in'}
          </a>
        </div>
      </header>
    );
  }
}

const mapStateToProps = state => ({
  fetchUserInfo: state.fetchUserInfo
});

const mapDispatchToProps = dispatch => ({
  handleFetchUserInfo: () => {
    dispatch(fetchUserInfo());
  },
  handleLogOut: () => {
    dispatch(logOut());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
