import React from "react";

// By extending the React.Component class, scoreer inherits functionality from it
class ImageGrid extends React.Component {
  // Setting the initial state of the ImageGrid component
  state = {
    score: 0,
    imagesClicked: []
  };

  
  handleClick = (id) => {
    // We always use the setState method to update a component's state
    this.setState({ score: this.state.score + 1 });
  };

  // The render method returns the JSX that should be rendered
  render() {
    return (
      <div className="card text-center">
        <div className="card-header bg-primary text-white">
          Click on an Image. No Repeats. 
        </div>
        
        <div className="card-body">
          <p className="card-text">Click score: {this.state.score}</p>
          <button className="btn btn-primary" onClick={this.handleClick}>
            Increment
          </button>
        </div>


      </div>

      
    );
  }
}

export default ImageGrid;
