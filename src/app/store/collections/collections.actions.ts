import { Action } from '@ngrx/store';

import { getActionGuard } from '../store.utils';
import { Collections } from './collections.models';

export enum Types {
  READ = '[Collections] Read:Start',
  READ_SUCCESS = '[Collections] Read:Success',
  READ_ERROR = '[Collections] Read:Error',
}

export class Read implements Action {
  readonly type = Types.READ;
}
export const isReadAction = getActionGuard<Read>(Types.READ);

export class ReadSuccess implements Action {
  readonly type = Types.READ_SUCCESS;
  constructor(public collections: Collections) {}
}
export const isReadSuccessAction = getActionGuard<ReadSuccess>(
  Types.READ_SUCCESS
);

export class ReadError implements Action {
  readonly type = Types.READ_ERROR;
  constructor(public error: string) {}
}
export const isReadErrorAction = getActionGuard<ReadError>(Types.READ_ERROR);

export type All = Read | ReadSuccess | ReadError;
