"use strict";

exports.__esModule = true;
exports.Td = exports.Tr = exports.Th = exports.Tfoot = exports.Tbody = exports.Thead = exports.TableCaption = exports.Table = exports.TableContainer = void 0;

var _system = require("@chakra-ui/system");

var _utils = require("@chakra-ui/utils");

var React = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var TableContainer = /*#__PURE__*/(0, _system.forwardRef)(function (props, ref) {
  var _ref;

  var overflow = props.overflow,
      overflowX = props.overflowX,
      className = props.className,
      rest = _objectWithoutPropertiesLoose(props, ["overflow", "overflowX", "className"]);

  return /*#__PURE__*/React.createElement(_system.chakra.div, _extends({
    ref: ref,
    className: (0, _utils.cx)("chakra-table__container", className)
  }, rest, {
    __css: {
      display: "block",
      whiteSpace: "nowrap",
      WebkitOverflowScrolling: "touch",
      overflowX: (_ref = overflow != null ? overflow : overflowX) != null ? _ref : "auto",
      overflowY: "hidden",
      maxWidth: "100%"
    }
  }));
});
exports.TableContainer = TableContainer;
var Table = /*#__PURE__*/(0, _system.forwardRef)(function (props, ref) {
  var styles = (0, _system.useMultiStyleConfig)("Table", props);

  var _omitThemingProps = (0, _system.omitThemingProps)(props),
      className = _omitThemingProps.className,
      tableProps = _objectWithoutPropertiesLoose(_omitThemingProps, ["className"]);

  return /*#__PURE__*/React.createElement(_system.StylesProvider, {
    value: styles
  }, /*#__PURE__*/React.createElement(_system.chakra.table, _extends({
    role: "table",
    ref: ref,
    __css: styles.table,
    className: (0, _utils.cx)("chakra-table", className)
  }, tableProps)));
});
exports.Table = Table;

if (_utils.__DEV__) {
  Table.displayName = "Table";
}

var TableCaption = /*#__PURE__*/(0, _system.forwardRef)(function (props, ref) {
  var _props$placement = props.placement,
      placement = _props$placement === void 0 ? "bottom" : _props$placement,
      rest = _objectWithoutPropertiesLoose(props, ["placement"]);

  var styles = (0, _system.useStyles)();
  return /*#__PURE__*/React.createElement(_system.chakra.caption, _extends({}, rest, {
    ref: ref,
    __css: _extends({}, styles.caption, {
      captionSide: placement
    })
  }));
});
exports.TableCaption = TableCaption;

if (_utils.__DEV__) {
  TableCaption.displayName = "TableCaption";
}

var Thead = /*#__PURE__*/(0, _system.forwardRef)(function (props, ref) {
  var styles = (0, _system.useStyles)();
  return /*#__PURE__*/React.createElement(_system.chakra.thead, _extends({}, props, {
    ref: ref,
    __css: styles.thead
  }));
});
exports.Thead = Thead;
var Tbody = /*#__PURE__*/(0, _system.forwardRef)(function (props, ref) {
  var styles = (0, _system.useStyles)();
  return /*#__PURE__*/React.createElement(_system.chakra.tbody, _extends({}, props, {
    ref: ref,
    __css: styles.tbody
  }));
});
exports.Tbody = Tbody;
var Tfoot = /*#__PURE__*/(0, _system.forwardRef)(function (props, ref) {
  var styles = (0, _system.useStyles)();
  return /*#__PURE__*/React.createElement(_system.chakra.tfoot, _extends({}, props, {
    ref: ref,
    __css: styles.tfoot
  }));
});
exports.Tfoot = Tfoot;
var Th = /*#__PURE__*/(0, _system.forwardRef)(function (_ref2, ref) {
  var isNumeric = _ref2.isNumeric,
      rest = _objectWithoutPropertiesLoose(_ref2, ["isNumeric"]);

  var styles = (0, _system.useStyles)();
  return /*#__PURE__*/React.createElement(_system.chakra.th, _extends({}, rest, {
    ref: ref,
    __css: styles.th,
    "data-is-numeric": isNumeric
  }));
});
exports.Th = Th;
var Tr = /*#__PURE__*/(0, _system.forwardRef)(function (props, ref) {
  var styles = (0, _system.useStyles)();
  return /*#__PURE__*/React.createElement(_system.chakra.tr, _extends({
    role: "row"
  }, props, {
    ref: ref,
    __css: styles.tr
  }));
});
exports.Tr = Tr;
var Td = /*#__PURE__*/(0, _system.forwardRef)(function (_ref3, ref) {
  var isNumeric = _ref3.isNumeric,
      rest = _objectWithoutPropertiesLoose(_ref3, ["isNumeric"]);

  var styles = (0, _system.useStyles)();
  return /*#__PURE__*/React.createElement(_system.chakra.td, _extends({
    role: "gridcell"
  }, rest, {
    ref: ref,
    __css: styles.td,
    "data-is-numeric": isNumeric
  }));
});
exports.Td = Td;
//# sourceMappingURL=table.js.map