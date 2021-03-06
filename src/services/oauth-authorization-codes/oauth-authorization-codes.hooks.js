const { disallow } = require('feathers-hooks-common');
const validateJsonSchema = require('../../hooks/validate-json-schema');
const model = require('../../models/oauth-authorization-codes.model');

module.exports = {
  before: {
    all: [ disallow('external') ],
    find: [],
    get: [],
    create: [ validateJsonSchema(model) ],
    update: [ validateJsonSchema(model) ],
    patch: [ validateJsonSchema(model) ],
    remove: []
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
