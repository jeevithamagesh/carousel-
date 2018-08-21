/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE SELECTOR TEMPLATE_URL AND CLASS NAME*/
import { Component, OnInit } from '@angular/core'
import { ModelMethods } from '../../lib/model.methods';
import { NDataModelService } from 'neutrinos-seed-services';
import { imageserviceService } from '../../services/imageservice/imageservice.service';
import { carouselserviceService } from '../../services/carouselservice/carouselservice.service';

/**
* Model import Example :
* import { HERO } from '../models/hero.model';
*/

/**
 * Service import Example :
 * import { HeroService } from '../services/hero/hero.service';
 */

@Component({
    selector: 'bh-demo',
    templateUrl: './demo.template.html'
})

export class demoComponent implements OnInit {
    dm: ModelMethods;
    imageData;
    limit;

    constructor(private bdms: NDataModelService,private imgService:imageserviceService,private cService:carouselserviceService) {
        this.dm = new ModelMethods(bdms);
    }

    ngOnInit() {
        this.imageData=this.imgService.getImages();


    }
    ngDoCheck(){
        this.limit=this.cService.assignLimit(1, 2, 4);
    }

    get(dataModelName, filter ?, keys ?, sort ?, pagenumber ?, pagesize ?) {
        this.dm.get(dataModelName, this, filter, keys, sort, pagenumber, pagesize,
            result => {
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

    delete (dataModelName, filter) {
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


}
