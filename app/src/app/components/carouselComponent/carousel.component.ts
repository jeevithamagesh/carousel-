/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE SELECTOR TEMPLATE_URL AND CLASS NAME*/
import { Component, OnInit, Input } from '@angular/core'
import { ModelMethods } from '../../lib/model.methods';
import { NDataModelService } from 'neutrinos-seed-services';

/**
* Model import Example :
* import { HERO } from '../models/hero.model';
*/

/**
 * Service import Example :
 * import { HeroService } from '../services/hero/hero.service';
 */

@Component({
    selector: 'bh-carousel',
    templateUrl: './carousel.template.html'


})

export class carouselComponent implements OnInit {
    @Input() imageData: String;
    @Input() limitImage: any;

    dm: ModelMethods;
    currentXsIndex = 0;
    splicedDataSet = [];
    dataSet;


    constructor(private bdms: NDataModelService) {
        this.dm = new ModelMethods(bdms);

    }


    ngOnInit() {
        this.dataSet = this.imageData;

    }
    changeDataSet(dir) {
        if (dir == 1) {
            this.dataSet.push(this.dataSet.shift());
        }
        else {
            let temp = [];
            temp.push(this.dataSet.pop());
            for (let i = 0; i < this.dataSet.length; ++i) {
                temp.push(this.dataSet[i]);
            }
            this.dataSet = temp;

        }
    }

    get(dataModelName, filter?, keys?, sort?, pagenumber?, pagesize?) {
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


}
