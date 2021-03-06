const axios = require('axios');
const defaults = require('../default');

module.exports = {
  async buscarEnderecoPorCEP (cep) {
    const { data } = await axios({
      ...defaults,
      method: 'get',
      url: `/cep/v1/${cep}`
    })

    return data
  }
}