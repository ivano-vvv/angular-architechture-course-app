import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromRoot from './store';
import * as fromCollections from './store/collections';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'architechture-course-app';

  constructor(private readonly store: Store<fromRoot.State>) {}

  ngOnInit(): void {
    this.store.dispatch(new fromCollections.Read());
  }
}
