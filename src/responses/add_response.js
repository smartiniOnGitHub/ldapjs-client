const Response = require('./response');
const { LDAP_REP_ADD } = require('../utils/protocol');

module.exports = class extends Response {
  constructor(options) {
    super(Object.assign({}, options, { protocolOp: LDAP_REP_ADD }));
  }
};
