import { Amenity } from '../../../types/amenity.type.js';
import { AMENITY_VALUES, ApartmentType, TownType } from '../../../types/index.js';
import { UpdateOfferValidationMessage } from './update-offer.messages.js';
import { MaxDecimalPlaces } from '../../../helpers/index.js';
import { ArrayMaxSize, ArrayMinSize, ArrayNotEmpty, IsArray, IsDateString, IsEnum, IsIn, IsNumber, IsOptional, IsString, Max, MaxLength, Min, MinLength, Validate } from 'class-validator';

export class UpdateOfferDto {
  @IsOptional()
  @MinLength(10, { message: UpdateOfferValidationMessage.title.minLength })
  @MaxLength(100, { message: UpdateOfferValidationMessage.title.maxLength })
  @IsOptional()
  @MinLength(20, { message: UpdateOfferValidationMessage.description.minLength })
  @MaxLength(1024, { message: UpdateOfferValidationMessage.description.maxLength })
  @IsOptional()
  @IsDateString( {}, { message: UpdateOfferValidationMessage.date.invalidFormat })

  @IsOptional()
  @IsEnum(TownType, { message: UpdateOfferValidationMessage.town.invalidTown })

  @IsOptional()
  @MaxLength(256, { message: UpdateOfferValidationMessage.image.maxLength })

  @IsOptional()
  @IsArray()
  @ArrayMinSize(6, { message: UpdateOfferValidationMessage.gallery.minLength })
  @ArrayMaxSize(6, { message: UpdateOfferValidationMessage.gallery.maxLength })
  @IsString({ each: true })

  @IsOptional()

  @IsOptional()

  @IsOptional()
  @IsNumber()
  @Min(1, { message: UpdateOfferValidationMessage.rating.min })
  @Max(5, { message: UpdateOfferValidationMessage.rating.max })
  @Validate(MaxDecimalPlaces)

  @IsOptional()
  @IsEnum(ApartmentType, { message: UpdateOfferValidationMessage.apartmentType.invalidApartment })
  @IsOptional()
  @IsNumber()
  @Min(1, { message: UpdateOfferValidationMessage.roomCount.min })
  @Max(8, { message: UpdateOfferValidationMessage.roomCount.max })

  @IsOptional()
  @IsNumber()
  @Min(1, { message: UpdateOfferValidationMessage.guestCount.min })
  @Max(10, { message: UpdateOfferValidationMessage.guestCount.max })

  @IsOptional()
  @IsNumber()
  @Min(100, { message: UpdateOfferValidationMessage.cost.min })
  @Max(100000, { message: UpdateOfferValidationMessage.cost.max })

  @IsOptional()
  @IsArray()
  @ArrayNotEmpty({ message: UpdateOfferValidationMessage.amenities.empty })
  @IsIn(AMENITY_VALUES, { each: true, message: UpdateOfferValidationMessage.amenities.includeAmenities })
  
  public title?: string;
  public description?: string;
  public image?: string;
  public date?: Date;
  public cost?: number;
  public town?: TownType;
  public gallery?: string[];
  public isPremium?: boolean;
  public isFavorite?: boolean;
  public rating?: number;
  public apartmentType?: ApartmentType;
  public roomCount?: number;
  public guestCount?: number;
  public amenities?: Amenity[];
}
