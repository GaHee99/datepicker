// App.js
import React, { useState } from 'react'
import { StyleSheet, View, Text, Button, Platform } from 'react-native'

import DateTimePicker from '@react-native-community/datetimepicker'
import DatePicker1 from './component/DatePicker1'
const App = () => {
  return (
    <View style={styles.container}>
      <DatePicker1 />
    </View>
  )
}

// Kindacode.com
// just add some styles to make our app look more beautiful
// This is not the focus of this article
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    padding: 50,
  },
  pickedDateContainer: {
    padding: 20,
    backgroundColor: '#eee',
    borderRadius: 10,
  },
  pickedDate: {
    fontSize: 18,
    color: 'black',
  },
  btnContainer: {
    padding: 30,
  },
  // This only works on iOS
  datePicker: {
    width: 320,
    height: 260,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
})

export default App
