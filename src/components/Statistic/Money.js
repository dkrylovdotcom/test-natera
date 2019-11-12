import React from 'react'
import PropTypes from 'prop-types'
import Earnings from './Earnings'
import { Grid, makeStyles } from '@material-ui/core'


const Money = (props) => {
    const classes = styles()
    const { earnings } = props

    return (
        <Grid container spacing={3}>
            <Grid item xs={4} md={4} lg={4}>
                <Earnings
                    total={earnings.total}
                    changes={earnings.changes} />
            </Grid>
            <Grid item xs={8} md={8} lg={8}>
                <div className={classes.chartWrap}>
                    <img className={classes.image} src="/images/deals_graphic.png" alt="" />
                </div>
            </Grid>
        </Grid>
    )
}

const styles = makeStyles(theme => ({
    chartWrap: {
        backgroundImage: 'url(/images/graph_v-line.png)',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '31px 0',
        padding: '4px 0'
    },
    image: {
        display: 'block',
        width: '100%'
    },
    [theme.breakpoints.down('xs')]: {
        chartWrap: {
            padding: '0',
            maxWidth: '318px',
            marginBottom: '42px'
        }
    }
}))


Money.propTypes = {
    earnings: PropTypes.object.isRequired,
    chart: PropTypes.object.isRequired
}

export default Money