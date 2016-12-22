import React, { Component } from 'react'
import { connect } from 'react-redux';
import PreciosList from '../components/preciosList';
import { fetchPrecios } from '../actions'

function mapStateToProps(state) {
  return {
    precios: state.precios
  }
}


// function mapDispachToProps(dispatch) {
//   return bindActionCreators(actionCreators, dispatch);
// }

class PreciosListContainer extends Component {
  componentDidMount(){
    console.log("por aca paso")
    let { dispatch } = this.props
    fetchPrecios(dispatch)
  }
  render() {
    return <PreciosList {...this.props} />
  }
}


export default connect(mapStateToProps, null)(PreciosListContainer);