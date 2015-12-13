System.register('vingle/share/facebook/components/ShareFBSettingsModal', ['flarum/components/SettingsModal'], function (_export) {
  'use strict';

  var SettingsModal, ShareFBSettingsModal;
  return {
    setters: [function (_flarumComponentsSettingsModal) {
      SettingsModal = _flarumComponentsSettingsModal['default'];
    }],
    execute: function () {
      ShareFBSettingsModal = (function (_SettingsModal) {
        babelHelpers.inherits(ShareFBSettingsModal, _SettingsModal);

        function ShareFBSettingsModal() {
          babelHelpers.classCallCheck(this, ShareFBSettingsModal);
          babelHelpers.get(Object.getPrototypeOf(ShareFBSettingsModal.prototype), 'constructor', this).apply(this, arguments);
        }

        babelHelpers.createClass(ShareFBSettingsModal, [{
          key: 'className',
          value: function className() {
            return 'Modal--small';
          }
        }, {
          key: 'title',
          value: function title() {
            return 'Share Facebook Settings';
          }
        }, {
          key: 'form',
          value: function form() {
            return [m(
              'div',
              { className: 'Form-group' },
              m(
                'label',
                null,
                'Label'
              ),
              m('input', { className: 'FormControl', bidi: this.setting('vingle.share.facebook') })
            )];
          }
        }]);
        return ShareFBSettingsModal;
      })(SettingsModal);

      _export('default', ShareFBSettingsModal);
    }
  };
});;
System.register('vingle/share/facebook/main', ['flarum/extend', 'flarum/app', 'vingle/share/facebook/components/ShareFBSettingsModal'], function (_export) {
  'use strict';

  var extend, app, ShareFBSettingsModal;
  return {
    setters: [function (_flarumExtend) {
      extend = _flarumExtend.extend;
    }, function (_flarumApp) {
      app = _flarumApp['default'];
    }, function (_vingleShareFacebookComponentsShareFBSettingsModal) {
      ShareFBSettingsModal = _vingleShareFacebookComponentsShareFBSettingsModal['default'];
    }],
    execute: function () {

      app.initializers.add('vingle-share-facebook', function (app) {
        app.extensionSettings['vingle-share-facebook'] = function () {
          return app.modal.show(new ShareFBSettingsModal());
        };
      });
    }
  };
});