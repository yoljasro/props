"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.menuItem = void 0;

var _shopCard = _interopRequireDefault(require("../assets/image/shop-card.svg"));

var _contact = _interopRequireDefault(require("../assets/image/contact.svg"));

var _settings = _interopRequireDefault(require("../assets/image/settings.svg"));

var _heart = _interopRequireDefault(require("../assets/image/heart.svg"));

var _timer = _interopRequireDefault(require("../assets/image/timer.svg"));

var _clipboard = _interopRequireDefault(require("../assets/image/clipboard.svg"));

var _notification = _interopRequireDefault(require("../assets/image/notification.svg"));

var _call = _interopRequireDefault(require("../assets/image/call.svg"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var menuItem = [{
  icon: _shopCard["default"],
  title: 'Корзина'
}, {
  icon: _contact["default"],
  title: 'Мой профиль'
}, {
  icon: _settings["default"],
  title: 'Настройки безопасности'
}, {
  icon: _heart["default"],
  title: 'Избранные'
}, {
  icon: _heart["default"],
  title: 'Информация о компании'
}, {
  icon: _timer["default"],
  title: 'История заказов'
}, {
  icon: _clipboard["default"],
  title: 'Активные заказы'
}, {
  icon: _notification["default"],
  title: 'Уведомление'
}, {
  icon: _call["default"],
  title: 'Служба поддержки'
}];
exports.menuItem = menuItem;
//# sourceMappingURL=menu-item.dev.js.map
