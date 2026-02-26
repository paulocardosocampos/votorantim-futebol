export class CreatePackageDto {
    title: string;
    championship: string;
    teamMatch: string;
    eventDate: string;
    priceCoins: number;
    stock: number;
    location: string;
    description?: string;
    imageUrl?: string;
    hasAirfare?: boolean;
    hasHotel?: boolean;
    hasTransfer?: boolean;
    hasFood?: boolean;
}
