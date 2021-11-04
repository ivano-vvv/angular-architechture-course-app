import { Item, ControlItem } from '@app/models/frontend';
export { Item, ControlItem } from '@app/models/frontend';

export interface Collections {
  roles: Collection;
  specializations: Collection;
  qualifications: Collection;
  skills: Collection;
  countries: Collection;
}

export interface Collection {
  items: Item[];
  controlItems: ControlItem[];
}
