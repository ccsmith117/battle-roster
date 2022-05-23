import React from 'react'
import { BasePageContainer, NavigationContainer } from './home.styles'

const Home = () => {
  return (
    <>
      <NavigationContainer>
        <h2>Battle Roster</h2>
      </NavigationContainer>
      <BasePageContainer>
        <span>
          Welcome to the beginning of Battle Roster, a statistics app to
          beautifully and intuitively display information about the competitive
          Warmachine / Hordes scene.
        </span>
        <br />
        <span>
          Whether you want to see the results of the latest tournaments or find
          inspiration for your next list to win your next tournament, Battle
          Roster hopes to make doing that an enjoyable experience.
        </span>
      </BasePageContainer>
    </>
  )
}

export default Home
