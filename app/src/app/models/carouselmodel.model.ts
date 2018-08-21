import {JsonProperty, JsonObject} from '../lib/tj.deserializer'

@JsonObject
export class carouselmodel {
  @JsonProperty('imgSrc', String, true)
  public imgSrc: string = undefined;

  @JsonProperty('imgPrice', String, true)
  public imgPrice: string = undefined;

  @JsonProperty('imgDesc', String, true)
  public imgDesc: string = undefined;

  @JsonProperty('imgHeader', String, true)
  public imgHeader: string = undefined;

}