import SettingsModal from 'flarum/components/SettingsModal';

export default class ShareFBSettingsModal extends SettingsModal {
  className() {
    return 'Modal--small';
  }

  title() {
    return 'Share Facebook Settings';
  }

  form() {
    return [
    <div className="Form-group">
    <label>Label</label>
    <input className="FormControl" bidi={this.setting('vingle.share.facebook')}/>
    </div>
    ];
  }
}