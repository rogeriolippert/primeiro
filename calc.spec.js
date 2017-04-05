const Lab = require('lab');
const lab = exports.lab = Lab.script();

const { expect } = require('code');

const { soma } = require('./calc');

lab.test('somando números inteiros', (done) => {
    expect(soma(2, 3)).to.equal(5);
    expect(soma(20, 33)).to.equal(53);
    expect(soma(0, 15)).to.equal(15);
    expect(soma(15, 0)).to.equal(15);
    done();
});

lab.test('com apenas um parâmetro', (done) => {
    expect(soma(2)).to.equal(2);
    done();
});

lab.test('somando números negativos', (done) => {
    expect(soma(-2, -5)).to.equal(-7);
    done();
});

lab.test('não passando parâmetros', (done) => {
    const r = soma();
    expect(r.message).to.equal("parâmentos faltando")
    done();
});

lab.test('dois parâmetros string', (done) => {
    const r = soma('a', 'b');
    expect(r.message).to.equal("parâmentos inválidos")
    done();
});

lab.test('trê parâmetros string', (done) => {
    const r = soma(0, 1, 'c');
    expect(r.message).to.equal("parâmentos inválidos")
    done();
});


lab.test('somando três números', (done) => {
    expect(soma(3, 3, 3)).to.equal(9);
    done();
});
