import React from 'react'
import clsx from 'clsx'
import PropTypes from 'prop-types'
import {
    makeStyles,
    TableBody as TableBodyUIKit,
    TableRow,
    TableCell,
    LinearProgress
} from '@material-ui/core'
import { formatDate } from '../../helpers'

const TableBody = (props) => {
    const classes = styles()
    const { mode, projects, remove } = props

    const adminCell = (id) => <TableCell>
        <div
            className={classes.removeBtn}
            onClick={() => remove(id)}>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.8925 0.302486C12.7057 0.115233 12.452 0.01 12.1875 0.01C11.923 0.01 11.6693 0.115233 11.4825 0.302486L6.5925 5.18249L1.7025 0.292486C1.51567 0.105233 1.26202 0 0.9975 0C0.732982 0 0.479331 0.105233 0.2925 0.292486C-0.0975 0.682486 -0.0975 1.31249 0.2925 1.70249L5.1825 6.59249L0.2925 11.4825C-0.0975 11.8725 -0.0975 12.5025 0.2925 12.8925C0.6825 13.2825 1.3125 13.2825 1.7025 12.8925L6.5925 8.00249L11.4825 12.8925C11.8725 13.2825 12.5025 13.2825 12.8925 12.8925C13.2825 12.5025 13.2825 11.8725 12.8925 11.4825L8.0025 6.59249L12.8925 1.70249C13.2725 1.32249 13.2725 0.682486 12.8925 0.302486Z" fill="#DF4036"/>
            </svg>
        </div>
    </TableCell>

    const tableRowClass = mode === 'adminBoard' ?
        clsx(classes.tableRow, classes.adminRow) : classes.tableRow

    return (
        <TableBodyUIKit>
            {projects.map(({ id, name, company, status, realiseDate }) => (
                <TableRow className={tableRowClass} key={id}>
                    <TableCell company-name={company}>{name}</TableCell>
                    <TableCell className={classes.companyCell}>{company}</TableCell>
                    <TableCell className={classes.statusCell}>
                        <div className={classes.statusWrap}>
                            <div className={classes.statusLabel}>{status}%</div>
                            <LinearProgress
                                className={classes.progressBar}
                                variant="determinate"
                                value={status} />
                        </div>
                    </TableCell>
                    <TableCell className={classes.realiseDateCell}
                               align="right">
                        {formatDate(realiseDate)}
                    </TableCell>
                    { mode === 'adminBoard' ? adminCell(id) : null }
                </TableRow>
            ))}
        </TableBodyUIKit>
    )
}

const styles = makeStyles(theme => ({
    tableRow: {
        "& td": {
            fontSize: '12px',
            fontFamily: 'Roboto',
            color: '#484848',
            height: '33px',
            borderBottom: '1px solid #F5F5F5',
            padding: 0
        },
        "& td:last-child": {
            paddingRight: 0
        }
    },
    adminRow: {
        "& td:last-child": {
            textAlign: 'center',
            paddingRight: '16px'
        }
    },
    companyCell: {},
    statusCell: {
        width: '240px'
    },
    statusWrap: {
        display: 'flex',
        alignItems: 'center',
        width: '100%'
    },
    statusLabel: {
        marginRight: '50px'
    },
    progressBar: {
        width: '100%',
        background: '#f5f5f5',
        height: '6px',
        borderRadius: '6px',
        '& > div': {
            background: '#6883E4',
            borderRadius: '6px'
        }
    },
    realiseDateCell: {
        width: '145px'
    },
    removeBtn: {
        cursor: 'pointer'
    },
    [theme.breakpoints.down('xs')]: {
        tableRow: {
            "& td": {
                height: '42px',
                padding: '0'
            },
            "& td:nth-child(1)::after": {
                content: 'attr(company-name)',
                display: 'block',
                color: '#c4c4c4',
                fontSize: '10px'
            },
            "& td:last-child": {
                paddingRight: '16px'
            }
        },
        companyCell: {
            display: 'none'
        },
        statusCell: {
            width: 'auto'
        },
        statusWrap: {
            display: 'block',
            textAlign: 'center'
        },
        statusLabel: {
            marginRight: '0'
        },
        progressBar: {
            display: 'none'
        },
        realiseDateCell: {
            width: 'auto'
        },
    }
}))

TableBody.propTypes = {
    mode: PropTypes.string.isRequired,
    projects: PropTypes.arrayOf(PropTypes.object).isRequired,
    remove: PropTypes.func.isRequired
}

export default TableBody