import React from 'react'
import PropTypes from 'prop-types'
import {
    makeStyles,
    TableHead as TableHeadUIKit,
    TableRow,
    TableCell
} from '@material-ui/core'

const TableHead = (props) => {
    const classes = styles()
    const { mode } = props

    const adminCell = <TableCell />

    return (
        <TableHeadUIKit>
            <TableRow className={classes.tableHeader}>
                <TableCell>Project</TableCell>
                <TableCell className={classes.companyCell}>Company</TableCell>
                <TableCell>Status</TableCell>
                <TableCell
                    align="right"
                    desktop-view="Realise Date"
                    mobile-view="Realise" />

                { mode === 'adminBoard' ? adminCell : null }
            </TableRow>
        </TableHeadUIKit>
    )
}

const styles = makeStyles(theme => ({
    tableHeader: {
        "& th": {
            color: '#C4C4C4',
            fontWeight: '500',
            fontSize: '14px',
            fontFamily: 'Montserrat',
            textTransform: 'uppercase',
            marginBottom: '16px',
            letterSpacing: '0.05em',
            borderBottom: '1px solid #F5F5F5',
            padding: '0 0 10px 0'
        },
        "& th:nth-child(4)::after": {
            content: 'attr(desktop-view)'
        },
        "& th:last-child": {
            paddingRight: 0
        }
    },
    [theme.breakpoints.down('xs')]: {
        tableHeader: {
            "& th": {
                padding: '0 0 2px 0'
            },
            "& th:nth-child(2)": {
                display: 'none'
            },
            "& th:last-child::after": {
                content: 'attr(mobile-view)'
            },
            "& th:last-child": {
                paddingRight: '16px'
            }
        }
    }
}))

TableHead.propTypes = {
    mode: PropTypes.string.isRequired
}

export default TableHead