import { Action } from '@ngrx/store';

type ActionGuard<T extends Action> = (action: Action) => action is T;

export function getActionGuard<T extends Action>(
  actionType: string
): ActionGuard<T> {
  return (action: Action): action is T => action.type === actionType;
}
