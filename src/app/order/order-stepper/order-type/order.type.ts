export interface Order {
    personal: PersonalInformation,
    delivery: DeliveryInformation,
    food: Food
}

export interface PersonalInformation {
    name: string;
    phone: string;
}

export interface DeliveryInformation {
    dateTime: Date; //@todo should be date obj
    address: String
    type: DeliveryMode
}

export interface Food {
    name: FoodName,
    toppings: Array<string>
}

export type DeliveryMode = 'pickup' | 'delivery'
export type FoodName = 'pizza' | 'sub'