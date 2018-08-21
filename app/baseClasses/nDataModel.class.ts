import { carouselmodel } from '../src/app/models/carouselmodel.model';
import { imagedatas } from '../src/app/models/imagedatas.model';
//IMPORT NEW DATAMODEL

export class NDataModel {
carouselmodel: carouselmodel;
imagedatas: imagedatas;
//DECLARE NEW VARIABLE

constructor() {
this.carouselmodel = new carouselmodel();
this.imagedatas = new imagedatas();
//CREATE NEW DM INSTANCE
    }
}