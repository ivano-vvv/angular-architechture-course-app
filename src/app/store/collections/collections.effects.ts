import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  DocumentChangeAction,
} from '@angular/fire/firestore';
import { isDbCollection } from '@app/models/backend';
import { ControlItem, Item } from '@app/models/frontend';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Observable, of, zip } from 'rxjs';
import { map, switchMap, take } from 'rxjs/operators';

import * as fromActions from './collections.actions';
import { Collection, Collections } from './collections.models';
import { getMappedCountryList } from './collections.utils';

type Action = fromActions.All;

@Injectable()
export class CollectionsEffects {
  constructor(private actions: Actions, private afs: AngularFirestore) {}

  read: Observable<Action> = createEffect(() =>
    this.actions.pipe(
      ofType(fromActions.Types.READ),
      switchMap(() => {
        return zip(
          this.afs
            .collection('roles')
            .snapshotChanges()
            .pipe(
              take(1),
              map((items) => items.map((x) => convertDocumentToItem(x)))
            ),
          this.afs
            .collection('specializations')
            .snapshotChanges()
            .pipe(
              take(1),
              map((items) => items.map((x) => convertDocumentToItem(x)))
            ),
          this.afs
            .collection('qualifications')
            .snapshotChanges()
            .pipe(
              take(1),
              map((items) => items.map((x) => convertDocumentToItem(x)))
            ),
          this.afs
            .collection('skills')
            .snapshotChanges()
            .pipe(
              take(1),
              map((items) => items.map((x) => convertDocumentToItem(x)))
            ),
          of(getMappedCountryList())
        ).pipe(
          map(([roles, specializations, qualifications, skills, countries]) => {
            const collections: Collections = {
              qualifications: formCollection(qualifications),
              roles: formCollection(roles),
              skills: formCollection(skills),
              specializations: formCollection(specializations),
              countries: formCollection(countries),
            };

            return new fromActions.ReadSuccess(collections);
          })
        );
      })
    )
  );
}

function convertDocumentToItem(document: DocumentChangeAction<unknown>): Item {
  const data = document.payload.doc.data();

  if (!isDbCollection(data)) {
    throw new Error('cannot parse data from document');
  }

  return {
    id: document.payload.doc.id,
    ...data,
  };
}

function formCollection(items: Item[]): Collection {
  return {
    items,
    controlItems: [...items].map((i) => convertItemToControlItem(i)),
  };
}

function convertItemToControlItem(item: Item): ControlItem {
  return {
    label: item.name,
    value: item.id,
  };
}
