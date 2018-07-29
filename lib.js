'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.queryAll = exports.queryOnce = exports.printGraphQLError = exports.createClient = undefined;

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _graphqlRequest = require('graphql-request');

var _prettyjson = require('prettyjson');

var _prettyjson2 = _interopRequireDefault(_prettyjson);

var _fp = require('lodash/fp');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Create a Shopify Storefront GraphQL client for the provided name and token.
 */
var createClient = exports.createClient = function createClient(shopName, accessToken) {
  return new _graphqlRequest.GraphQLClient('https://' + shopName + '.myshopify.com/api/graphql', {
    headers: {
      'X-Shopify-Storefront-Access-Token': accessToken
    }
  });
};

/**
 * Print an error from a GraphQL client
 */
var printGraphQLError = exports.printGraphQLError = function printGraphQLError(e) {
  var prettyjsonOptions = { keysColor: 'red', dashColor: 'red' };

  if (e.response && e.response.errors) console.error(_prettyjson2.default.render(e.response.errors, prettyjsonOptions));

  if (e.request) console.error(_prettyjson2.default.render(e.request, prettyjsonOptions));
};

/**
 * Request a query from a client.
 */
var queryOnce = exports.queryOnce = function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(client, query) {
    var first = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 250;
    var after = arguments[3];
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return client.request(query, { first: first, after: after });

          case 2:
            return _context.abrupt('return', _context.sent);

          case 3:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined);
  }));

  return function queryOnce(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

/**
 * Get all paginated data from a query. Will execute multiple requests as
 * needed.
 */
var queryAll = exports.queryAll = function () {
  var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(client, path, query) {
    var first = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 250;
    var after = arguments[4];
    var aggregatedResponse = arguments[5];
    var data, edges, nodes;
    return _regenerator2.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return queryOnce(client, query, first, after);

          case 2:
            data = _context2.sent;
            edges = (0, _fp.get)([].concat((0, _toConsumableArray3.default)(path), ['edges']), data);
            nodes = edges.map(function (edge) {
              return edge.node;
            });


            aggregatedResponse ? aggregatedResponse = aggregatedResponse.concat(nodes) : aggregatedResponse = nodes;

            if (!(0, _fp.get)([].concat((0, _toConsumableArray3.default)(path), ['pageInfo', 'hasNextPage']), false, data)) {
              _context2.next = 8;
              break;
            }

            return _context2.abrupt('return', queryAll(client, path, query, first, (0, _fp.last)(edges).cursor, aggregatedResponse));

          case 8:
            return _context2.abrupt('return', aggregatedResponse);

          case 9:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, undefined);
  }));

  return function queryAll(_x4, _x5, _x6) {
    return _ref2.apply(this, arguments);
  };
}();