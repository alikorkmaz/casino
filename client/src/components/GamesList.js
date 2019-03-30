import React from "react";

class GamesList extends React.Component {
  renderGame = game => (
    <div className="game item" key={game.name}>
      <div className="ui small image">
        <img
          src={`${process.env.PUBLIC_URL}/assets/${game.icon}`}
          alt="game-icon"
        />
      </div>
      <div className="content">
        <div className="header">
          <b className="name">{game.name}</b>
        </div>
        <div className="description">{game.description}</div>
        <div className="extra">
          <div
            onClick={() => this.props.playClickHandler(game)}
            className="play ui right floated secondary button inverted"
          >
            Play
            <i className="right chevron icon" />
          </div>
        </div>
      </div>
    </div>
  );

  renderGames = () =>
    this.props.games
      .filter(
        game =>
          game.name
            .toLowerCase()
            .includes(this.props.searchTerm.toLowerCase()) &&
          game.categoryIds.some(
            categoryId => categoryId === this.props.category
          )
      )
      .map(game => this.renderGame(game));

  render() {
    return (
      <React.Fragment>
        <h3 className="ui dividing header">Games</h3>
        <div className="ui relaxed divided game items links">
          {this.renderGames()}
        </div>
      </React.Fragment>
    );
  }
}

export default GamesList;
