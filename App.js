import * as React from 'react'
import { Provider } from 'react-redux'
import { createStackNavigator, createAppContainer } from 'react-navigation'
import HomeScreen from './src/components/HomeScreen'
import OtherScreen from './src/components/OtherScreen'
import { pushNotifications } from './src/services'
import store from './src/store'

pushNotifications.configure();

const AppStack = createStackNavigator(
  {
    Home: HomeScreen,
    Other: OtherScreen
  },
  {
    initialRouteName: 'Home'
  }
)

let Navigation = createAppContainer(AppStack)

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Navigation />
      </Provider>
    )
  }
}
