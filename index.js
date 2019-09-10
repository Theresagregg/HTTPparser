module.exports = function parseHttp(request) {
    const parsedMessage = {

    }
    const parts = request.split(' ')
    parsedMessage.verb = parts[0]
    parsedMessage.path = parts[1]
    parsedMessage.version = parts[2]
    return parsedMessage
}