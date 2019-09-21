const parseHttp = require('../index.js')

describe('parse http', function(){
    it ('normalizes the verb', function(){
        //arrange-given-precondition
            const request = 'get / HTTP/1.1'
        //act-when-execute
            const output = parseHttp(request)
        //assert-then-correct things happened
            const expected = {
                verb: 'GET',
                path: '/',
                version: 'HTTP/1.1'
            }
        expect(output).toEqual(expected)
    })
})
it ('parses a request line', function(){
    //arrange
        const request = 'get / HTTP/1.1'
    //act
        const output = parseHttp(request)
    //assert
        const expected = {
            verb: 'GET',
            path: '/',
            version: 'HTTP/1.1'
        }
    expect(output).toEqual(expected)
    expect(output.verb).toEqual('GET')
})

it('sets content-type headers', function(){
    const request = 'GET / HTTP/1.1\nContent-Type: text/html; charset=utf-8'

    const output = parseHttp(request)
    const expected = {
        verb: 'GET',
        path: '/',
        version: 'HTTP/1.1',
        headers: {'Content-Type': "text/html; charset=utf-8"}
    }
    expect(output).toEqual(expected)
})
it('handles mulitple headers', function(){
    const request = 'GET / HTTP/1.1\nContent-Type: text/html; charset=utf-8\nAccept-Language: en-US'

    const output = parseHttp(request)
    const expected = {
        verb: 'GET',
        path: '/',
        version: 'HTTP/1.1',
        headers: {'Content-Type': "text/html; charset=utf-8",
    'Accept-Language': 'en-US'}
    }
    expect(output).toEqual(expected)
})