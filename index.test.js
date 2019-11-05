const axios = require('axios');

describe('Teste de Ambiente', () => {

  it('Verifica se o WilFly está rodando', async () => {
    const req = await axios.get('http://localhost:8081/wsselfbooking/');

    expect(req.status).toBe(200);
  })

  it('Verifica se o TomCat está rodando', async () => {
    const req = await axios.get('http://localhost:8585');

    expect(req.status).toBe(200);
  })

  it('Verifica se a aplicação está rodando', async () => {
    const req = await axios.get('https://local.lemontech.com.br/viaje/home.mtw');

    expect(req.status).toBe(200);
  })

})