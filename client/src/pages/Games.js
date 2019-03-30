import React from "react";
import { connect } from "react-redux";
import { fetchGames, fetchCategories, signOut } from "../actions";
import UserPanel from "../components/UserPanel";
import GamesList from "../components/GamesList";
import Categories from "../components/Categories";

class Games extends React.Component {
  state = {
    searchTerm: "",
    category: 0
  };

  componentDidUpdate() {
    if (!this.props.isSignedIn) this.props.history.push("/");
  }

  componentDidMount() {
    this.props.fetchGames();
    this.props.fetchCategories();
  }

  handleFilterCategory = ({ id }) => {
    this.setState({ category: id });
  };

  handleSearchTerm = term => {
    this.setState({ searchTerm: term });
  };

  handleClickPlay = ({ code }) => {
    this.props.history.push(`/play/${code}`);
  };

  render() {
    if (!this.props.isSignedIn) return <div />;

    return (
      <div className="casino">
        <div className="ui grid centered">
          <UserPanel
            user={this.props.user}
            signOutHandler={this.props.signOut}
            searchTermHandler={this.handleSearchTerm}
            searchTerm={this.state.searchTerm}
          />
        </div>
        <div className="ui grid">
          <div className="twelve wide column">
            <GamesList
              games={this.props.games}
              searchTerm={this.state.searchTerm}
              category={this.state.category}
              playClickHandler={this.handleClickPlay}
            />
          </div>
          <div className="four wide column">
            <Categories
              categories={this.props.categories}
              categoryFilterHandler={this.handleFilterCategory}
            />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    games: Object.values(state.games),
    categories: Object.values(state.categories),
    isSignedIn: state.auth.isSignedIn,
    user: state.auth.user
  };
};

export default connect(
  mapStateToProps,
  { fetchGames, fetchCategories, signOut }
)(Games);
