import { extend } from 'flarum/extend';
import app from 'flarum/app';

import ShareFBSettingsModal from 'vingle/share/facebook/components/ShareFBSettingsModal';

app.initializers.add('vingle-share-facebook', app => {
  app.extensionSettings['vingle-share-facebook'] = () => app.modal.show(new ShareFBSettingsModal()); 
});
