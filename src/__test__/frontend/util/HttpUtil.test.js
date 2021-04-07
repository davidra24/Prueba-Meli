import { get } from '../../../frontend/util/HttpUtil';

describe('Fetch API', () => {
    beforeEach(() => {
        fetch.resetMocks()
    });
    test('Llamar API y retornar datos', () => {
        const data = 'testData'
        const service = 'https://google.com/'
        fetch.mockResponseOnce(JSON.stringify({ data }))
        get(service).then(response => {
            expect(response.data).toEqual(data)
        })
    })
})