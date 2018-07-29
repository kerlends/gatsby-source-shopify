'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sourceNodes = undefined;

var _slicedToArray2 = require('babel-runtime/helpers/slicedToArray');

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _entries = require('babel-runtime/core-js/object/entries');

var _entries2 = _interopRequireDefault(_entries);

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n{blue gatsby-source-shopify/', '} ', ''], ['\\n{blue gatsby-source-shopify/', '} ', '']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n{red error} an error occured while sourcing data'], ['\\n{red error} an error occured while sourcing data']);

var _fp = require('lodash/fp');

var _chalk = require('chalk');

var _chalk2 = _interopRequireDefault(_chalk);

var _pIteration = require('p-iteration');

var _lib = require('./lib');

var _nodes = require('./nodes');

var _queries = require('./queries');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var sourceNodes = exports.sourceNodes = function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee6(_ref2, _ref3) {
    var _ref2$boundActionCrea = _ref2.boundActionCreators,
        createNode = _ref2$boundActionCrea.createNode,
        touchNode = _ref2$boundActionCrea.touchNode,
        store = _ref2.store,
        cache = _ref2.cache;
    var shopName = _ref3.shopName,
        accessToken = _ref3.accessToken,
        _ref3$verbose = _ref3.verbose,
        verbose = _ref3$verbose === undefined ? true : _ref3$verbose;
    var client, formatMsg, imageArgs, args, msg;
    return _regenerator2.default.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            client = (0, _lib.createClient)(shopName, accessToken);

            // Convenience function to namespace console messages.

            formatMsg = function formatMsg(msg) {
              return (0, _chalk2.default)(_templateObject, shopName, msg);
            };

            _context6.prev = 2;

            console.log(formatMsg('starting to fetch data from Shopify'));

            // Arguments used for file node creation.
            imageArgs = { createNode: createNode, touchNode: touchNode, store: store, cache: cache

              // Arguments used for node creation.
            };
            args = { client: client, createNode: createNode, formatMsg: formatMsg, verbose: verbose, imageArgs: imageArgs

              // Message printed when fetching is complete.
            };
            msg = formatMsg('finished fetching data from Shopify');


            console.time(msg);
            _context6.next = 10;
            return _promise2.default.all([createNodes('articles', _queries.ARTICLES_QUERY, _nodes.ArticleNode, args, function () {
              var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(x) {
                return _regenerator2.default.wrap(function _callee2$(_context2) {
                  while (1) {
                    switch (_context2.prev = _context2.next) {
                      case 0:
                        if (!x.comments) {
                          _context2.next = 3;
                          break;
                        }

                        _context2.next = 3;
                        return (0, _pIteration.forEach)(x.comments.edges, function () {
                          var _ref5 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(edge) {
                            return _regenerator2.default.wrap(function _callee$(_context) {
                              while (1) {
                                switch (_context.prev = _context.next) {
                                  case 0:
                                    _context.t0 = createNode;
                                    _context.next = 3;
                                    return (0, _nodes.CommentNode)(imageArgs)(edge.node);

                                  case 3:
                                    _context.t1 = _context.sent;
                                    return _context.abrupt('return', (0, _context.t0)(_context.t1));

                                  case 5:
                                  case 'end':
                                    return _context.stop();
                                }
                              }
                            }, _callee, undefined);
                          }));

                          return function (_x4) {
                            return _ref5.apply(this, arguments);
                          };
                        }());

                      case 3:
                      case 'end':
                        return _context2.stop();
                    }
                  }
                }, _callee2, undefined);
              }));

              return function (_x3) {
                return _ref4.apply(this, arguments);
              };
            }()), createNodes('blogs', _queries.BLOGS_QUERY, _nodes.BlogNode, args), createNodes('collections', _queries.COLLECTIONS_QUERY, _nodes.CollectionNode, args), createNodes('products', _queries.PRODUCTS_QUERY, _nodes.ProductNode, args, function () {
              var _ref6 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee5(x) {
                return _regenerator2.default.wrap(function _callee5$(_context5) {
                  while (1) {
                    switch (_context5.prev = _context5.next) {
                      case 0:
                        if (!x.variants) {
                          _context5.next = 3;
                          break;
                        }

                        _context5.next = 3;
                        return (0, _pIteration.forEach)(x.variants.edges, function () {
                          var _ref7 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(edge) {
                            return _regenerator2.default.wrap(function _callee3$(_context3) {
                              while (1) {
                                switch (_context3.prev = _context3.next) {
                                  case 0:
                                    _context3.t0 = createNode;
                                    _context3.next = 3;
                                    return (0, _nodes.ProductVariantNode)(imageArgs)(edge.node);

                                  case 3:
                                    _context3.t1 = _context3.sent;
                                    return _context3.abrupt('return', (0, _context3.t0)(_context3.t1));

                                  case 5:
                                  case 'end':
                                    return _context3.stop();
                                }
                              }
                            }, _callee3, undefined);
                          }));

                          return function (_x6) {
                            return _ref7.apply(this, arguments);
                          };
                        }());

                      case 3:
                        if (!x.options) {
                          _context5.next = 6;
                          break;
                        }

                        _context5.next = 6;
                        return (0, _pIteration.forEach)(x.options, function () {
                          var _ref8 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4(option) {
                            return _regenerator2.default.wrap(function _callee4$(_context4) {
                              while (1) {
                                switch (_context4.prev = _context4.next) {
                                  case 0:
                                    _context4.t0 = createNode;
                                    _context4.next = 3;
                                    return (0, _nodes.ProductOptionNode)(imageArgs)(option);

                                  case 3:
                                    _context4.t1 = _context4.sent;
                                    return _context4.abrupt('return', (0, _context4.t0)(_context4.t1));

                                  case 5:
                                  case 'end':
                                    return _context4.stop();
                                }
                              }
                            }, _callee4, undefined);
                          }));

                          return function (_x7) {
                            return _ref8.apply(this, arguments);
                          };
                        }());

                      case 6:
                      case 'end':
                        return _context5.stop();
                    }
                  }
                }, _callee5, undefined);
              }));

              return function (_x5) {
                return _ref6.apply(this, arguments);
              };
            }()), createShopPolicies(args)]);

          case 10:
            console.timeEnd(msg);
            _context6.next = 19;
            break;

          case 13:
            _context6.prev = 13;
            _context6.t0 = _context6['catch'](2);

            console.error((0, _chalk2.default)(_templateObject2));

            // If not a GraphQL request error, let Gatsby print the error.

            if (_context6.t0.hasOwnProperty('request')) {
              _context6.next = 18;
              break;
            }

            throw _context6.t0;

          case 18:

            (0, _lib.printGraphQLError)(_context6.t0);

          case 19:
          case 'end':
            return _context6.stop();
        }
      }
    }, _callee6, undefined, [[2, 13]]);
  }));

  return function sourceNodes(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

/**
 * Fetch and create nodes for the provided endpoint, query, and node factory.
 */
var createNodes = function () {
  var _ref9 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee9(endpoint, query, nodeFactory, _ref10) {
    var client = _ref10.client,
        createNode = _ref10.createNode,
        formatMsg = _ref10.formatMsg,
        verbose = _ref10.verbose,
        imageArgs = _ref10.imageArgs;
    var f = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee7() {
      return _regenerator2.default.wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
            case 'end':
              return _context7.stop();
          }
        }
      }, _callee7, undefined);
    }));
    var msg;
    return _regenerator2.default.wrap(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            // Message printed when fetching is complete.
            msg = formatMsg('fetched and processed ' + endpoint);


            if (verbose) console.time(msg);
            _context9.t0 = _pIteration.forEach;
            _context9.next = 5;
            return (0, _lib.queryAll)(client, ['shop', endpoint], query);

          case 5:
            _context9.t1 = _context9.sent;

            _context9.t2 = function () {
              var _ref12 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee8(entity) {
                var node;
                return _regenerator2.default.wrap(function _callee8$(_context8) {
                  while (1) {
                    switch (_context8.prev = _context8.next) {
                      case 0:
                        _context8.next = 2;
                        return nodeFactory(imageArgs)(entity);

                      case 2:
                        node = _context8.sent;

                        createNode(node);
                        _context8.next = 6;
                        return f(entity);

                      case 6:
                      case 'end':
                        return _context8.stop();
                    }
                  }
                }, _callee8, undefined);
              }));

              return function (_x13) {
                return _ref12.apply(this, arguments);
              };
            }();

            _context9.next = 9;
            return (0, _context9.t0)(_context9.t1, _context9.t2);

          case 9:
            if (verbose) console.timeEnd(msg);

          case 10:
          case 'end':
            return _context9.stop();
        }
      }
    }, _callee9, undefined);
  }));

  return function createNodes(_x8, _x9, _x10, _x11) {
    return _ref9.apply(this, arguments);
  };
}();

/**
 * Fetch and create nodes for shop policies.
 */
var createShopPolicies = function () {
  var _ref13 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee10(_ref14) {
    var client = _ref14.client,
        createNode = _ref14.createNode,
        formatMsg = _ref14.formatMsg,
        verbose = _ref14.verbose;

    var msg, _ref15, policies;

    return _regenerator2.default.wrap(function _callee10$(_context10) {
      while (1) {
        switch (_context10.prev = _context10.next) {
          case 0:
            // Message printed when fetching is complete.
            msg = formatMsg('fetched and processed policies');


            if (verbose) console.time(msg);
            _context10.next = 4;
            return (0, _lib.queryOnce)(client, _queries.SHOP_POLICIES_QUERY);

          case 4:
            _ref15 = _context10.sent;
            policies = _ref15.shop;

            (0, _entries2.default)(policies).forEach((0, _fp.pipe)(function (_ref16) {
              var _ref17 = (0, _slicedToArray3.default)(_ref16, 2),
                  type = _ref17[0],
                  policy = _ref17[1];

              return (0, _nodes.ShopPolicyNode)(policy, { type: type });
            }, createNode));
            if (verbose) console.timeEnd(msg);

          case 8:
          case 'end':
            return _context10.stop();
        }
      }
    }, _callee10, undefined);
  }));

  return function createShopPolicies(_x14) {
    return _ref13.apply(this, arguments);
  };
}();