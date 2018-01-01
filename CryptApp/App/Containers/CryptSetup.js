import React, { Component } from 'react'
import { ScrollView, Text, Image, View, Alert } from 'react-native'
import { Images } from '../Themes'

// Styles
import styles from './Styles/CryptSetupStyles'

// UI
import FullButton from '../Components/FullButton'

export default class CryptSetup extends Component {
  render () {
    return (
      <View style={styles.mainContainer}>
        <Image source={Images.background} style={styles.backgroundImage} resizeMode='stretch' />
        <ScrollView style={styles.container}>
          <View style={styles.centered} >
            <Image source={Images.ready} style={styles.logo} />
          </View>
          <View style={styles.section} >
            <Text style={styles.sectionText}>
              Crypt is a lightning-enabled bitcoin wallet that just works!
            </Text>
            <FullButton
              text='CREATE'
            />
            <FullButton
              text='RESTORE'
            />
          </View>
        </ScrollView>
      </View>
    )
  }
}
