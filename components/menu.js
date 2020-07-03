import React from 'react'
import { connect } from 'react-redux'
import { View, StyleSheet, Text, Alert } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'

import Loader from './loader'
import { fetchFood, getDetails } from '../redux/actions'
import MenuItem from './menu-item'
import Error from './error'
import ListHeader from './listheader'
import FoodModal from './modal'

class Menu extends React.Component {
  componentDidMount() {
    this.props.fetchFood()
  }

  render() {
    return (
      <View style={styles.main}>
        {this.props.loading && <Loader />}
        {this.props.error && !this.props.loading && <Error text='Something Went Wrong' />}
        <FoodModal />
        {!this.props.loading && !this.props.error && (
          <FlatList
            ListEmptyComponent={<Error text='Can not fetch food now' />}
            ListHeaderComponent={
              <ListHeader text={`We Have Found ${this.props.data.length} Foods For You`} />
            }
            initialNumToRender={30}
            data={this.props.data}
            extraData={this.props.data}
            keyExtractor={(item, i) => item.item_id + i}
            renderItem={({ item }) => <MenuItem {...item} getDetails={this.props.getDetails} />}
          />
        )}
      </View>
    )
  }
}

const mapPropsToState = state => ({
  loading: state.loading,
  data: state.data,
  error: state.error,
})

const mapDispatchToStore = dispatch => ({
  fetchFood: () => dispatch(fetchFood()),
  getDetails: name => dispatch(getDetails(name)),
})

const styles = StyleSheet.create({
  main: {
    marginTop: 35,
    flex: 1,
    justifyContent: 'center',
  },
})

export default connect(mapPropsToState, mapDispatchToStore)(Menu)
