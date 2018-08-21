import {JsonProperty, JsonObject} from '../lib/tj.deserializer'
import { carouselmodel } from './carouselmodel.model';

@JsonObject
export class imagedatas {
  @JsonProperty('image', [carouselmodel], true)
  public image: carouselmodel[] = [];

}