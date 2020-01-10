import { connect } from 'react-redux'
import Home from '../components/home.component'
import { charactersActions } from '@core/actions'
import { reduxForm } from 'redux-form'

const mapStateToProps = (state: any) => {
  const term =  state.form.Search && 
                  state.form.Search.values && 
                    state.form.Search.values.search ? state.form.Search.values.search.toLowerCase() : ''
  return{
      request: state.characters.request,
      list: state.characters.list &&
              state.characters.list.filter(item => {
                if(item.name.toLowerCase().indexOf(term) > -1){
                  return item
                }
              })
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    getAllList: (page: number) => {
      dispatch(charactersActions.getAllList(page))
    }
  }
}

const HomeForm = reduxForm({
  form: "Search"
})(
  connect(
    mapDispatchToProps,
    mapDispatchToProps
  )
  (Home) as any
)
export default HomeForm
