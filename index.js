module.exports = function parseHttp(request) {
    const parsedMessage = {}

    const lines = request.split('\n')
    const parts = lines[0].split(' ')
    parsedMessage.verb = parts[0].toUpperCase()
    parsedMessage.path = parts[1]
    parsedMessage.version = parts[2]
    if(lines.length === 1){
      return parsedMessage
    }


    parsedMessage.headers = {}
for (let i = 1; i < lines.length; i++){
    let temp = lines[i].split(': ')
    let key = temp[0]
    let value = temp[1]
    parsedMessage.headers[key] = value


}

    return parsedMessage
}