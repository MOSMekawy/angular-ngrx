import { inject } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { CounterService } from "src/app/services/counter.service";
import { set, sync } from "./counter.actions";
import { map, switchMap } from "rxjs";

export const syncCounter = createEffect(
    (action$ = inject(Actions), counterService = inject(CounterService)) => {
        return action$.pipe(
            ofType(sync),
            switchMap(() => counterService.syncCounter().pipe(
                map(count => set(count)),
            ))
        )
    },
    { functional: true }
);