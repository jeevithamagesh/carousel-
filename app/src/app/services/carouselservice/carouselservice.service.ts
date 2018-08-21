/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
import { Injectable } from '@angular/core';
import { MediaChange, ObservableMedia } from '@angular/flex-layout';
import { Subscription } from 'rxjs/Subscription';
@Injectable()
export class carouselserviceService {
    watcher: Subscription;
    activeMediaQuery = "";
    limitImage;
    constructor(public media: ObservableMedia) {
    }



    assignLimit(xs, sm, others) {
        this.watcher = this.media.subscribe((change: MediaChange) => {
            this.activeMediaQuery = change ? `'${change.mqAlias}' = (${change.mediaQuery})` : '';
            if (change.mqAlias == 'xs') {
                this.limitImage = xs;
            }
            else if (change.mqAlias == 'sm') {
                this.limitImage = sm;
            } else {
                this.limitImage = others;
            }

        });
        return this.limitImage;



    }

}
