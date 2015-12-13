System.register('vingle/share/facebook/main', ['flarum/extend', 'flarum/app', 'flarum/components/DiscussionPage', 'flarum/components/Button'], function (_export) {
	'use strict';

	var extend, app, DiscussionPage, Button;
	return {
		setters: [function (_flarumExtend) {
			extend = _flarumExtend.extend;
		}, function (_flarumApp) {
			app = _flarumApp['default'];
		}, function (_flarumComponentsDiscussionPage) {
			DiscussionPage = _flarumComponentsDiscussionPage['default'];
		}, function (_flarumComponentsButton) {
			Button = _flarumComponentsButton['default'];
		}],
		execute: function () {

			app.initializers.add('vingle-share-facebook', function () {
				extend(DiscussionPage.prototype, 'sidebarItems', function (items) {
					items.add('share-facebook', Button.component({
						className: 'Button Share--facebook',
						icon: 'facebook-official',
						children: app.forum.attribute('vingle.share.facebook') ? app.forum.attribute('vingle.share.facebook') : 'Share Facebook',
						onclick: function onclick() {
							var width = 1000;
							var height = 500;
							var top = $(window).height() / 2 - height / 2;
							var left = $(window).width() / 2 - width / 2;
							window.open('https://www.facebook.com/sharer.php?=100&p[url]=' + app.forum.attribute('baseUrl') + app.route.discussion(app.current.discussion), app.title, 'width=' + width + ', height= ' + height + ', top=' + top + ', left=' + left + ', status=no, scrollbars=no, resizable=no');
						}
					}), 5);
				});
			});
		}
	};
});