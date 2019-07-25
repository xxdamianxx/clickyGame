// import './App.css';
import React, { Component } from "react";
import ImageCard from "./components/ImageCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Score from "./components/Score";
import images from "./images.json";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    images,
    score: 0
  };

  // removeFriend = id => {
  //   // Filter this.state.friends for friends with an id not equal to the id being removed
  //   const friends = this.state.friends.filter(friend => friend.id !== id);
  //   // Set this.state.friends equal to the new friends array
  //   this.setState({ friends });
  // };

  handleClick = this_id => {
    console.log(" ");
    console.log(" ");
    console.log("You clicked on image (id) " + this_id);
    // 1) Make a copy of all images
    const images = this.state.images;
    // 2) find the image with the given id
    let image = images.find(x => x.id === this_id);
    console.log("You selected (name): " + image.name);
    // 3) Get value of clicked
    const clicked = image.clicked;
    console.log("This image has a clicked value of: " + clicked);
    this.setState({ images });
    if (!clicked) {
      console.log("You got it");
      // Mark image as clicked
      image.clicked = true;
      // Insert back into array
      // Get index of image
      var index = images.findIndex(function (item, i) {
        return item.id === this_id
      });
      console.log("index of image is: " + index);
      images[index] = image;
      this.setState({ images });
      // Shuffle Images
      this.setState({ score: this.state.score + 1 });
    } else {
      // Reset clicked field on all images to false
      console.log("Sorry, you already clicked on this image")

      console.log(" ");
      console.log("Resetting images");
      let images_new = [];
      let images = this.state.images;
      console.log("images is: " + images);

      for (var i = 0; i < images.length; i++) {
        console.log("img is: " + images[i])
        images[i].clicked = false;
        images_new.push(images[i]);
      }
      // Shuffle Images
      for (let i = images_new.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [images_new[i], images_new[j]] = [images_new[j], images_new[i]];
      }
      console.log("images now: " + images_new);
      this.setState({ images: images_new, score: 0 });
      console.log("images after setState: " + images_new);
    }
  }

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title>Clicky Game</Title>
        <Score score={this.state.score} />
        {this.state.images.map(image => (
          <ImageCard
            handleClick={this.handleClick}
            id={image.id}
            url={image.url}
            name={image.name}
            clicked={image.clicked}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
