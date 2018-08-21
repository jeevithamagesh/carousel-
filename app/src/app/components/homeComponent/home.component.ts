/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE SELECTOR TEMPLATE_URL AND CLASS NAME*/
import { Component, OnInit, ViewChild } from '@angular/core'
import { ModelMethods } from '../../lib/model.methods';
import { NDataModelService } from 'neutrinos-seed-services';
import { imageserviceService } from '../../services/imageservice/imageservice.service';
import { carouselserviceService } from '../../services/carouselservice/carouselservice.service';
import { NLogoutService } from 'neutrinos-seed-services';
import { Router } from '@angular/router';
import { MatSidenav } from '@angular/material/sidenav';

/**
* Model import Example :
* import { HERO } from '../models/hero.model';
*/

/**
 * Service import Example :
 * import { HeroService } from '../services/hero/hero.service';
 */

@Component({
    selector: 'bh-home',
    templateUrl: './home.template.html',
})

export class homeComponent implements OnInit {
    @ViewChild('sidenav') sidenav: MatSidenav;
    dm: ModelMethods;
    currentXsIndex = 0;
    splicedDataSet = [];
    dataSet;
    imageData;
    limit;
    homeList;

    constructor(private bdms: NDataModelService, private imgService: imageserviceService, private cService: carouselserviceService, private logoutservice: NLogoutService, private router: Router) {
        this.dm = new ModelMethods(bdms);
        // this.get('imagedatas');
    }

    ngOnInit() {
        this.imageData = this.imgService.getImages();
        this.homeList = this.imgService.getHomeList();

    }
    ngDoCheck() {

        this.limit = this.cService.assignLimit(1, 2, 4);
        if (this.limit != 1) {
            this.sidenav.close();
        }
    }
    logout() {
        this.logoutservice.logout();
        this.router.navigate(['/login']);
    }
    // function for onclick key binding
    searchToDo(event: any) {

    }

    get(dataModelName, filter?, keys?, sort?, pagenumber?, pagesize?) {
        this.dm.get(dataModelName, this, filter, keys, sort, pagenumber, pagesize,
            result => {
                // this.imageData = result[0].images;
                // On Success code here
            },
            error => {
                // Handle errors here
            });
    }

    getById(dataModelName, dataModelId) {
        this.dm.getById(dataModelName, dataModelId,
            result => {
                // On Success code here
            },
            error => {
                // Handle errors here
            })
    }

    put(dataModelName, dataModelObject) {
        this.dm.put(dataModelName, dataModelObject,
            result => {
                // On Success code here
            }, error => {
                // Handle errors here
            })
    }

    validatePut(formObj, dataModelName, dataModelObject) {
        this.dm.validatePut(formObj, dataModelName, dataModelObject,
            result => {
                // On Success code here
            }, error => {
                // Handle errors here
            })
    }

    update(dataModelName, update, filter, options) {
        const updateObject = {
            update: update,
            filter: filter,
            options: options
        };
        this.dm.update(dataModelName, updateObject,
            result => {
                //  On Success code here
            }, error => {
                // Handle errors here
            })
    }

    delete(dataModelName, filter) {
        this.dm.delete(dataModelName, filter,
            result => {
                // On Success code here
            }, error => {
                // Handle errors here
            })
    }

    deleteById(dataModelName, dataModelId) {
        this.dm.deleteById(dataModelName, dataModelId,
            result => {
                // On Success code here
            }, error => {
                // Handle errors here
            })
    }

    updateById(dataModelName, dataModelId, dataModelObj) {
        this.dm.updateById(dataModelName, dataModelId, dataModelObj,
            result => {
                // On Success code here
            }, error => {
                // Handle errors here
            })
    }

    trigger(event) {
        console.log(event);
    }
}
