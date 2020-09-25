import React, { Component } from 'react';
import { connect } from 'react-redux';

class Profile extends Component {
  render() {
    return (
      <div className="main-view profile">
        <h2>个人信息</h2>
        <ul>
          <li>用户名：{this.props.fetchUserInfo.data.name}</li>
          <li>用户id：{this.props.fetchUserInfo.data.id}</li>
          <li>用户头像：</li>
          <img src={this.props.fetchUserInfo.data.avatar} alt="头像" />
        </ul>
      </div>
    );
  }
}

const mapStateToProps = ({ fetchUserInfo }) => ({
  fetchUserInfo
});

export default connect(mapStateToProps)(Profile);
