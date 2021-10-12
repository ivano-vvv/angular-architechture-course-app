import firebase from 'firebase';

export interface Job {
  title: string;
  salary: number;
  created: firebase.firestore.FieldValue;
  updated?: firebase.firestore.FieldValue;
}
