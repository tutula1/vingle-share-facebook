import { extend } from 'flarum/extend';
import app from 'flarum/app';
import DiscussionPage from 'flarum/components/DiscussionPage';
import Button from 'flarum/components/Button';

app.initializers.add('vingle-share-facebook', function() {
	extend(DiscussionPage.prototype, 'sidebarItems', function(items) {
		items.add('share-facebook',
			Button.component({
				className: 'Button Share--facebook',
				icon: 'facebook-official',
				children: app.forum.attribute('vingle.share.facebook') ? app.forum.attribute('vingle.share.facebook') : 'Share Facebook',
				onclick: () => {
					const width = 1000;
					const height = 500;
					const top = $(window).height() / 2 - height / 2;
					const left = $(window).width() / 2 - width / 2;
					window.open( 'https://www.facebook.com/sharer.php?=100&p[url]=' + app.forum.attribute('baseUrl') + app.route.discussion(app.current.discussion), app.title,'width=' + width + ', height= ' + height + ', top=' + top + ', left=' + left + ', status=no, scrollbars=no, resizable=no');
				} 
			})
			, 5);
	});
});