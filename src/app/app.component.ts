import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as fromRoot from './store';
import * as fromCollections from './store/collections';
import * as fromUser from './store/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'architechture-course-app';

  isAuthorized$: Observable<boolean>;

  constructor(private readonly store: Store<fromRoot.State>) {
    this.isAuthorized$ = this.store.pipe(select(fromUser.getIsAuthorized));
  }

  ngOnInit(): void {
    this.store.dispatch(new fromUser.Init());
    this.store.dispatch(new fromCollections.Read());
  }

  handleSignOut(): void {
    this.store.dispatch(new fromUser.SignOut());
  }
}
