import React, { Component } from 'react';
import RestaurantInput from './components/RestaurantInput';
import Restaurants from './components/Restaurants';
import { connect } from 'react-redux';
import { addRestaurant } from './actions/restaurants'; 

class App extends Component {

  handleOnClick = event => {
    this.props.addRestaurant()
  }

  render() {
    return (
      <div className="App">
        <RestaurantInput />
        <Restaurants />
      </div>
    );
  }
};

const mapStateToProps = state => {
  return {
    restaurants: state.restaurants
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addRestaurant: () => {
      dispatch(addRestaurant())
    }
  };
};

export default connect(mapStateToProps, { addRestaurant })(App);
