const axios = require('axios').default;

describe('app test', () => {
    it('should return 2', () => {
        return axios.get('http://localhost:3001/')
            .then(res => {
                expect(res.data).toBe('2');
            }).catch(err => {
                console.log(err);
            }
            );
    });
});