import * as React from 'react'

// css
import classNames from "classnames/bind"
const styl: any = require('../css/home.component.styl')
const cx = classNames.bind(styl)

import { delay } from '../../../core/helpers/timer.helper'
import { Scrollbars } from 'react-custom-scrollbars'

//Material 
import { CircularProgress, Typography, Grid, Card, CardMedia, CardContent, Container, Button } from '@material-ui/core'
import { IProps, IStates } from './../interfaces/home.interface'
import { Field, reduxForm } from 'redux-form'
import Input from '@components/input/input.component'

const logo: any = require('../../../assets/images/logo-breaking-bad-season-1-brand-font-design-breaking-bad.png')

class Home extends React.Component <IProps, IStates> {
    constructor(props: IProps) {
        super(props)
        this.state = {

        }

    }

    componentDidMount(){
        this.props.getAllList(0)
    }

    handleSubmitForm = (values) => {

    }

    render () { 
        const { request, list, handleSubmit} = this.props
        return (
            <React.Fragment>
                <div className={cx('authWall')}>
                    {
                        request && 
                        <div className={cx('sending')}>
                            <CircularProgress color="secondary" size={120} thickness={1} />
                            <span>carregando...</span>
                        </div>
                    }
                    <Container>
                        <form onSubmit={handleSubmit(this.handleSubmitForm)}>
                            <Grid container spacing={2} justify="center" alignItems="center">
                                <Grid item xs={2} className={cx('logo')}>
                                    <img src={logo} />
                                </Grid>
                                <Grid item xs={10}>
                                    <Field
                                        name="search" 
                                        component={Input}
                                        label="Encontrar personagem"
                                        placeholder="Digite o nome do personagem"
                                    />
                                </Grid>
                                {/* <Grid item xs={2}>
                                    <Button fullWidth color="primary"  variant="contained" type="submit">
                                        Encontrar
                                    </Button>
                                </Grid> */}
                            </Grid>
                        </form>
                        <Scrollbars
                            renderTrackHorizontal={props => <div {...props} className="track-horizontal" style={{display:"none"}}/>}
                            renderThumbHorizontal={props => <div {...props} className="thumb-horizontal" style={{display:"none"}}/>}
                            autoHeight
                            autoHeightMin={ 100 }
                            autoHeightMax={ window.innerHeight }
                        >
                            <Grid container spacing={2} className={cx('character')} alignItems="stretch">
                                {
                                    list && list.map(item => 
                                        // <div className={cx('characterItem')} >
                                        //     <img src={item.img} />
                                        //     <span>{item.name}</span>
                                        // </div> 
                                        <Grid item xs={12} md={3}>
                                            <Card style={{ height: '100%'}}>
                                                <CardContent className={cx('characterItem')}>
                                                    <div className={cx('itemImg')}>
                                                        <img src={item.img} />
                                                    </div>
                                                    <Typography gutterBottom variant="h5" component="h2">{item.name}</Typography>
                                                    <Typography>
                                                        Apelido: {item.nickname}
                                                    </Typography>
                                                    <Typography>
                                                        Data de Nascimento: {item.birthday}
                                                    </Typography>
                                                </CardContent>
                                            </Card>  
                                        </Grid> 
                                    )
                                }
                            </Grid>
                        </Scrollbars>
                    </Container>
                </div>
            </React.Fragment>
        )
    }
}

export default reduxForm({
    form: "Search"
})(Home as any)