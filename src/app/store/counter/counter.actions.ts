import { createAction } from '@ngrx/store';

export const increment = createAction('[Counter Component] Increment');
export const decrement = createAction('[Counter Component] Decrement');
export const sync = createAction('[Counter Component] Sync');
export const set = createAction('[Counter Component] Set', (count: number) => ({ count }));
export const reset = createAction('[Counter Component] Reset');