import { Amenity } from '../../../types/amenity.type.js';
import { ApartmentType } from '../../../types/apartment-type.enum.js';
import { TownType } from '../../../types/town-type.enum.js';
import { CreateOfferValidationMessage } from './create-offer.messages.js';
import { MaxDecimalPlaces } from '../../../helpers/index.js';
import { AMENITY_VALUES } from '../../../types/index.js';
import { ArrayMaxSize, ArrayMinSize, ArrayNotEmpty, IsArray, IsDateString, IsEnum, IsIn, IsMongoId, IsNumber, IsString, Max, MaxLength, Min, MinLength, Validate } from 'class-validator';

export class CreateOfferDto {
  @MinLength(10, { message: CreateOfferValidationMessage.title.minLength })
  @MaxLength(100, { message: CreateOfferValidationMessage.title.maxLength })
  @MinLength(20, { message: CreateOfferValidationMessage.description.minLength })
  @MaxLength(1024, { message: CreateOfferValidationMessage.description.maxLength })
  @IsDateString( {}, { message: CreateOfferValidationMessage.date.invalidFormat })
  @IsEnum(TownType, { message: CreateOfferValidationMessage.town.invalidTown })
  @MaxLength(256, { message: CreateOfferValidationMessage.image.maxLength })
  @IsArray()
  @ArrayMinSize(6, { message: CreateOfferValidationMessage.gallery.minLength })
  @ArrayMaxSize(6, { message: CreateOfferValidationMessage.gallery.maxLength })
  @IsString({ each: true })
  @IsNumber()
  @Min(1, { message: CreateOfferValidationMessage.rating.min })
  @Max(5, { message: CreateOfferValidationMessage.rating.max })
  @Validate(MaxDecimalPlaces)
  @IsEnum(ApartmentType, { message: CreateOfferValidationMessage.apartmentType.invalidApartment })
  @IsNumber()
  @Min(1, { message: CreateOfferValidationMessage.roomCount.min })
  @Max(8, { message: CreateOfferValidationMessage.roomCount.max })
  @IsNumber()
  @Min(1, { message: CreateOfferValidationMessage.guestCount.min })
  @Max(10, { message: CreateOfferValidationMessage.guestCount.max })
  @IsNumber()
  @Min(100, { message: CreateOfferValidationMessage.cost.min })
  @Max(100000, { message: CreateOfferValidationMessage.cost.max })
  @IsArray()
  @ArrayNotEmpty({ message: CreateOfferValidationMessage.amenities.empty })
  @IsIn(AMENITY_VALUES, { each: true, message: CreateOfferValidationMessage.amenities.includeAmenities })
  @IsMongoId({ message: CreateOfferValidationMessage.userId.invalidId })
  
  public title!: string;
  public description!: string;
  public image!: string;
  public date!: Date;
  public cost!: number;
  public town!: TownType;
  public gallery!: string[];
  public isPremium!: boolean;
  public isFavorite!: boolean;
  public rating!: number;
  public apartmentType!: ApartmentType;
  public roomCount!: number;
  public guestCount!: number;
  public amenities!: Amenity[];
  public userId!: string;
}
