import { Component } from '@angular/core';

import { LocalFeedPage } from '../local-feed/local-feed';
import { PrivateMsgPage } from '../private-msg/private-msg';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = LocalFeedPage;
  tab2Root = PrivateMsgPage;

  constructor() {

  }
}
