const utils = {}

utils['logHistory'] = []
utils['log'] = function (payload) {
    let [title, description, logTime = true, saveInMemory = false, style = ''] =
        payload
    let formattedString = `[${title}] - ${description} / ${
        logTime ? Date.now() : '0000000'
    }`

    if (saveInMemory) utils['logHistory'].push(formattedString)

    if (typeof style != 'undefined' || !style) {
        formattedString = '%c' + formattedString
        console.log(formattedString, style)
        return
    } else {
        console.log(formattedString)
        return
    }
}
