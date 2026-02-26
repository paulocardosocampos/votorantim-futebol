import { PassengerDto } from './passenger.dto';

export class CreateOrderDto {
    packageId: string;
    passengers: PassengerDto[];
}
