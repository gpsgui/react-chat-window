'use strict';

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactLinkify = require('react-linkify');

var _reactLinkify2 = _interopRequireDefault(_reactLinkify);

var _AdaptiveCards = require("adaptivecards");

var _AdaptiveCards2 = _interopRequireDefault(_AdaptiveCards);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CardMessage = function CardMessage(props) {
  const { card, onExecuteAction, hostConfig } = props;
  const adaptiveCard = new _AdaptiveCards2.AdaptiveCard();
  if (hostConfig) {
      adaptiveCard.hostConfig = new _AdaptiveCards2.HostConfig(hostConfig);
  }
  if (onExecuteAction) {
      adaptiveCard.onExecuteAction = onExecuteAction;
  }
  adaptiveCard.parse(card);
  var renderedCard = adaptiveCard.render();

  return _react2.default.createElement(
    'div',
    { className: 'sc-message--card' },
    renderedCard
  );
};

exports.default = CardMessage;
module.exports = exports['default'];