/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
import { Injectable } from '@angular/core';

@Injectable()
export class imageserviceService {
    images = [
        {
            imgSrc: "assets/Web/photo2.jpg",
            imgPrice: "$ 1,105,000",
            imgDesc: "21 Shop St, San Francisco",
            imgHeader: "Integer tempor maximus"
        },
        {
            imgSrc: "assets/Web/photo3.jpg",
            imgPrice: "$ 1,125,000",
            imgDesc: "Beverly, CA 90210",
            imgHeader: "Duis bibendum"

        },
        {
            imgSrc: "assets/Web/photo4.jpg",
            imgPrice: "$ 1,200,000",
            imgDesc: "132, San Francisco",
            imgHeader: "Fusce quis nonorcious"
        },
        {
            imgSrc: "assets/Web/photo5.jpg",
            imgPrice: "$ 910,000",
            imgDesc: "132 04th St,London",
            imgHeader: "Fusce quis libero"
        },
        {
            imgSrc: "assets/Web/photo6.jpg",
            imgPrice: "$ 2,524,000",
            imgDesc: "132 Lockslee, San Francisco",
            imgHeader: "Pellentesque habitant"
        },
        {
            imgSrc: "assets/Web/photo7.jpg",
            imgPrice: "$ 5,185,000",
            imgDesc: "San Francisco,CA 900212",
            imgHeader: "Maecenas sed purus"
        },
        {
            imgSrc: "assets/Web/photo8.jpg",
            imgPrice: "$ 1,185,000",
            imgDesc: "21120 Broadway,San Fransisco",
            imgHeader: "Nullam finibus libero"
        }
    ];
    sidenavList = ["Home", "Dashboard", "Contact", "Logout"]
    getImages() {
        return this.images;
    }
    getHomeList() {
        return this.sidenavList;
    }

}
