import React from 'react'
import { Modal, View, StyleSheet, Text, Button } from 'react-native'
import { connect } from 'react-redux'

class FoodModal extends React.Component {
  render() {
    return (
      <View>
        <Modal animationType='fade' transparent={true} visible={this.props.modalVisible}>
          {this.props.clickedItem && (
            <View style={styles.modalView}>
              <Text style={styles.detailText}>{this.props.clickedItem.category_name}</Text>
              <Text style={styles.detailText}>{this.props.clickedItem.item_name}</Text>
              <Text style={styles.detailText}>Rs. {this.props.clickedItem.price}</Text>
              <Button title='Done' color='orangered' onPress={this.props.close} />
            </View>
          )}
        </Modal>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  detailText: {
    padding: 5,
    fontSize: 15,
    marginBottom: 10,
    color: '#2e86c1',
  },
  modalView: {
    marginTop: 300,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#d4e6f1',
  },
})

const mapPropsToState = state => ({
  modalVisible: state.modalVisible,
  clickedItem: state.clickedItem,
})

const mapDispatchToStore = dispatch => ({
  close: () => dispatch({ type: 'close' }),
})

export default connect(mapPropsToState, mapDispatchToStore)(FoodModal)
