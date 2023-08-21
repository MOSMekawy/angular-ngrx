import { Injectable } from "@angular/core";
import { delay, of } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class CounterService {

    syncCounter() {
        return of(94).pipe(delay(500));
    }

}