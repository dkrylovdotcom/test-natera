import * as types from '../constants/action-types'

const initialState = {
    "money": {
        "earnings": {
            "total": null,
            "changes": null
        },
        "chart": {}
    },
    "work": {
        "employes": {
            "count": null,
            "part": null
        },
        "projects": {
            "count": null,
            "thisMonthCount": null
        },
        "specializations": []
    }
}

export default function statistic(state = initialState, action) {
    switch (action.type) {
        case types.STATISTIC_LOAD_ALL:
            return action.payload

        default:
            return state
    }
}