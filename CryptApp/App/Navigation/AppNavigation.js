import { StackNavigator } from 'react-navigation'
import CryptSetup from '../Containers/CryptSetup'

import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const PrimaryNav = StackNavigator({
  CryptSetup: { screen: CryptSetup }
}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'CryptSetup',
  navigationOptions: {
    headerStyle: styles.header
  }
})

export default PrimaryNav
