import React from 'react'
import Typical from 'react-typical'

class TextAnimation extends React.Component {
  render() {
    return (
      <div>
        <h3>Welcome to your VIP sEATs!</h3>
        <Typical
          steps={[
            // 'Welcome to your VIP sEATs!',
            // 500,
            'Order your food, drinks, and merchandise from the comfort of your seat without missing a single moment of the game.',
            500,
            'Order your food, drinks, and merchandise from the comfort of your seat without missing a single moment of the game. Please sign in and select your seat at the top of the page.',
            500]}
          loop={Infinity}
          wrapper="h3"
        />
      </div>
    )
  }
}

export default TextAnimation;