import React from "react";
import { connect } from "react-redux";

class PlayGame extends React.Component {
  componentDidMount() {
    if (!this.props.isSignedIn) this.props.history.push("/");
    else window.comeon.game.launch(this.props.match.params.code);
  }

  handleBack = () => {
    this.props.history.push("/games");
  };

  render() {
    if (!this.props.isSignedIn) return <div />;
    return (
      <div className="ingame">
        <div className="ui grid centered">
          <div className="three wide column">
            <div
              className="ui right floated secondary button inverted"
              onClick={this.handleBack}
            >
              <i className="left chevron icon" />
              Back
            </div>
          </div>
          <div className="ten wide column">
            <div id="game-launch" />
          </div>
          <div className="three wide column" />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isSignedIn: state.auth.isSignedIn
  };
};

export default connect(mapStateToProps)(PlayGame);
