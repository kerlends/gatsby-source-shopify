'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ShopPolicyNode = exports.ProductVariantNode = exports.ProductOptionNode = exports.ProductNode = exports.CommentNode = exports.CollectionNode = exports.BlogNode = exports.ArticleNode = undefined;

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _gatsbyNodeHelpers = require('gatsby-node-helpers');

var _gatsbyNodeHelpers2 = _interopRequireDefault(_gatsbyNodeHelpers);

var _fp = require('lodash/fp');

var _pIteration = require('p-iteration');

var _gatsbySourceFilesystem = require('gatsby-source-filesystem');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Node prefix
var TYPE_PREFIX = 'Shopify';

// Node types
var ARTICLE = 'Article';
var BLOG = 'Blog';
var COLLECTION = 'Collection';
var COMMENT = 'Comment';
var PRODUCT = 'Product';
var PRODUCT_OPTION = 'ProductOption';
var PRODUCT_VARIANT = 'ProductVariant';
var SHOP_POLICY = 'ShopPolicy';

var cleanUrl = function cleanUrl(url) {
  if (!url) return url;

  return url.indexOf('?v=') >= 0 ? url.split('?')[0] : url;
};

var _createNodeHelpers = (0, _gatsbyNodeHelpers2.default)({
  typePrefix: TYPE_PREFIX
}),
    createNodeFactory = _createNodeHelpers.createNodeFactory,
    generateNodeId = _createNodeHelpers.generateNodeId;

var downloadImageAndCreateFileNode = function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(_ref2, _ref3) {
    var id = _ref2.id,
        url = _ref2.url;
    var createNode = _ref3.createNode,
        touchNode = _ref3.touchNode,
        store = _ref3.store,
        cache = _ref3.cache;
    var fileNodeID, mediaDataCacheKey, cacheMediaData, fileNode;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            fileNodeID = void 0;

            //if (url && url.indexOf('?v=') >= 0) url = url.split('?')[0]

            mediaDataCacheKey = TYPE_PREFIX + '__Media__' + url;
            _context.next = 4;
            return cache.get(mediaDataCacheKey);

          case 4:
            cacheMediaData = _context.sent;

            if (!cacheMediaData) {
              _context.next = 9;
              break;
            }

            fileNodeID = cacheMediaData.fileNodeID;
            touchNode(fileNodeID);
            return _context.abrupt('return', fileNodeID);

          case 9:
            _context.next = 11;
            return (0, _gatsbySourceFilesystem.createRemoteFileNode)({
              url: cleanUrl(url),
              store: store,
              cache: cache,
              createNode: createNode
            });

          case 11:
            fileNode = _context.sent;

            if (!fileNode) {
              _context.next = 17;
              break;
            }

            fileNodeID = fileNode.id;
            _context.next = 16;
            return cache.set(mediaDataCacheKey, { fileNodeID: fileNodeID });

          case 16:
            return _context.abrupt('return', fileNodeID);

          case 17:
            return _context.abrupt('return', undefined);

          case 18:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined);
  }));

  return function downloadImageAndCreateFileNode(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

var ArticleNode = exports.ArticleNode = function ArticleNode(imageArgs) {
  return createNodeFactory(ARTICLE, function () {
    var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(node) {
      return _regenerator2.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              if (node.blog) node.blog___NODE = generateNodeId(BLOG, node.blog.id);

              if (node.comments) node.comments___NODE = node.comments.edges.map(function (edge) {
                return generateNodeId(COMMENT, edge.node.id);
              });

              if (!node.image) {
                _context2.next = 7;
                break;
              }

              node.image.src = cleanUrl(node.image.src);

              _context2.next = 6;
              return downloadImageAndCreateFileNode({ id: node.image.id, url: node.image.src }, imageArgs);

            case 6:
              node.image.localFile___NODE = _context2.sent;

            case 7:
              return _context2.abrupt('return', node);

            case 8:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, undefined);
    }));

    return function (_x3) {
      return _ref4.apply(this, arguments);
    };
  }());
};

var BlogNode = exports.BlogNode = function BlogNode(_imageArgs) {
  return createNodeFactory(BLOG);
};

var CollectionNode = exports.CollectionNode = function CollectionNode(imageArgs) {
  return createNodeFactory(COLLECTION, function () {
    var _ref5 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(node) {
      return _regenerator2.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              if (node.products) node.products___NODE = node.products.edges.map(function (edge) {
                return generateNodeId(PRODUCT, edge.node.id);
              });

              if (!node.image) {
                _context3.next = 6;
                break;
              }

              node.image.src = cleanUrl(node.image.src);
              _context3.next = 5;
              return downloadImageAndCreateFileNode({ id: node.image.id, url: node.image.src }, imageArgs);

            case 5:
              node.image.localFile___NODE = _context3.sent;

            case 6:
              return _context3.abrupt('return', node);

            case 7:
            case 'end':
              return _context3.stop();
          }
        }
      }, _callee3, undefined);
    }));

    return function (_x4) {
      return _ref5.apply(this, arguments);
    };
  }());
};

var CommentNode = exports.CommentNode = function CommentNode(_imageArgs) {
  return createNodeFactory(COMMENT);
};

var ProductNode = exports.ProductNode = function ProductNode(imageArgs) {
  return createNodeFactory(PRODUCT, function () {
    var _ref6 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee5(node) {
      var variants;
      return _regenerator2.default.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              if (node.variants) {
                variants = node.variants.edges.map(function (edge) {
                  return edge.node;
                });


                node.variants___NODE = variants.map(function (variant) {
                  return generateNodeId(PRODUCT_VARIANT, variant.id);
                });
              }

              if (node.options) node.options___NODE = node.options.map(function (option) {
                return generateNodeId(PRODUCT_OPTION, option.id);
              });

              if (!(node.images && node.images.edges)) {
                _context5.next = 6;
                break;
              }

              _context5.next = 5;
              return (0, _pIteration.map)(node.images.edges, function () {
                var _ref7 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4(edge) {
                  return _regenerator2.default.wrap(function _callee4$(_context4) {
                    while (1) {
                      switch (_context4.prev = _context4.next) {
                        case 0:
                          edge.node.originalSrc = cleanUrl(edge.node.originalSrc);
                          _context4.next = 3;
                          return downloadImageAndCreateFileNode({ id: edge.node.id, url: edge.node.originalSrc }, imageArgs);

                        case 3:
                          edge.node.localFile___NODE = _context4.sent;
                          return _context4.abrupt('return', edge.node);

                        case 5:
                        case 'end':
                          return _context4.stop();
                      }
                    }
                  }, _callee4, undefined);
                }));

                return function (_x6) {
                  return _ref7.apply(this, arguments);
                };
              }());

            case 5:
              node.images = _context5.sent;

            case 6:
              return _context5.abrupt('return', node);

            case 7:
            case 'end':
              return _context5.stop();
          }
        }
      }, _callee5, undefined);
    }));

    return function (_x5) {
      return _ref6.apply(this, arguments);
    };
  }());
};

var ProductOptionNode = exports.ProductOptionNode = function ProductOptionNode(_imageArgs) {
  return createNodeFactory(PRODUCT_OPTION);
};

var ProductVariantNode = exports.ProductVariantNode = function ProductVariantNode(imageArgs) {
  return createNodeFactory(PRODUCT_VARIANT, function () {
    var _ref8 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee6(node) {
      return _regenerator2.default.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              if (!node.image) {
                _context6.next = 5;
                break;
              }

              node.image.originalSrc = cleanUrl(node.image.originalSrc);
              _context6.next = 4;
              return downloadImageAndCreateFileNode({ id: node.image.id, url: node.image.originalSrc }, imageArgs);

            case 4:
              node.image.localFile___NODE = _context6.sent;

            case 5:
              return _context6.abrupt('return', node);

            case 6:
            case 'end':
              return _context6.stop();
          }
        }
      }, _callee6, undefined);
    }));

    return function (_x7) {
      return _ref8.apply(this, arguments);
    };
  }());
};

var ShopPolicyNode = exports.ShopPolicyNode = createNodeFactory(SHOP_POLICY);