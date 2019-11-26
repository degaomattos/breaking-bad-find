import * as React from 'react'
import Home from './containers/home.container'
import { IProps, IStates } from './interfaces/home.interface'

class HomeMain extends React.Component <IProps, IStates> {
    render () { 
        return <Home {...this.props} />
    }
}

export default HomeMain