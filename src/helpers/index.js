const formatDate = (miliseconds) => {
    const monthNames = [
        "Jan", "Feb", "Mar",
        "Apr", "May", "June", "July",
        "Aug", "Sept", "Oct",
        "Nov", "Dec"
    ]

    miliseconds = parseInt(miliseconds)

    const date = new Date(miliseconds)
    const day = date.getDate()
    const monthIndex = date.getMonth()
    const year = date.getFullYear()

    return `${monthNames[monthIndex]} ${day}, ${year}`
}

export {
    formatDate
}