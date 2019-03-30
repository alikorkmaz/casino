import React from "react";

class UserPanel extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="twelve wide column">
          <div className="ui list">
            <div className="player item">
              <img
                className="ui avatar image"
                src={`${process.env.PUBLIC_URL}/assets/${
                  this.props.user.avatar
                }`}
                alt="avatar"
              />
              <div className="content">
                <div className="header">
                  <b className="name">{this.props.user.name}</b>
                </div>
                <div className="description event">{this.props.user.event}</div>
              </div>
            </div>
          </div>
          <div
            className="logout ui left floated secondary button inverted"
            onClick={this.props.signOutHandler}
          >
            <i className="left chevron icon" />
            Log Out
          </div>
        </div>
        <div className="four wide column">
          <div className="search ui small icon input ">
            <input
              type="text"
              placeholder="Search Game"
              value={this.props.searchTerm}
              onChange={e => this.props.searchTermHandler(e.target.value)}
            />
            <i className="search icon" />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default UserPanel;
