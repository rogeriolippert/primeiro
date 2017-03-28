const Code = require('code');
const Lab = require('lab');
const lab = exports.lab = Lab.script();

const { soma } = require('./calc');

lab.test('retorno da soma de 2 e 3 deve ser 5', (done) => {

    Code.expect(soma(2, 3)).to.equal(5);
    done();
});



lab.test('retorno da soma de 8 e 3 deve ser 11', (done) => {

    Code.expect(soma(8, 3)).to.equal(11);
    done();
});



lab.test('retorno da soma de -4 e 3 deve ser 1', (done) => {

    Code.expect(soma(-4, 3)).to.equal(-1);
    done();
});

lab.test('retorno da soma de -4 e -3 deve ser -7', (done) => {

    Code.expect(soma(-4, 3)).to.equal(-7);
    done();
});
