import React from "react";

class Categories extends React.Component {
  renderCategories = () =>
    this.props.categories.map(category => (
      <div
        className="category item"
        key={category.id}
        onClick={() => this.props.categoryFilterHandler(category)}
      >
        <div className="content">
          <div className="header">{category.name}</div>
        </div>
      </div>
    ));

  render() {
    return (
      <React.Fragment>
        <h3 className="ui dividing header">Categories</h3>
        <div className="ui selection animated list category items">
          {this.renderCategories()}
        </div>
      </React.Fragment>
    );
  }
}

export default Categories;
