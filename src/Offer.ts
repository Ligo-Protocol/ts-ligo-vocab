import {
  Role,
  Text,
  URL,
  Vehicle,
  Organization,
  Person,
  GeoShape,
  PriceSpecification,
  PaymentMethod,
  QuantitativeValue,
} from "schema-dts";

declare type SchemaValue<T, TProperty extends string> =
  | T
  | Role<T, TProperty>
  | readonly (T | Role<T, TProperty>)[];

export interface Offer {
  /** Description of the offer. */
  description?: SchemaValue<Text, "description">;
  /** Image(s) of specific vehicle being offered. */
  image?: SchemaValue<URL, "image">;
  /** The vehicle being offered. */
  itemOffered?: SchemaValue<Vehicle, "itemOffered">;
  /** The entity offering the rental. */
  seller?: SchemaValue<Organization | Person, "seller">;
  /** The approximate area where the vehicle is available to pickup. Can be used to obfuscate the precise location. */
  areaServed?: SchemaValue<GeoShape, "areaServed">;
  /** Available prices of an offer. */
  priceSpecification?: SchemaValue<PriceSpecification, "priceSpecification">;
  /** The payment method(s) accepted by seller for this offer. */
  acceptedPaymentMethod?: SchemaValue<PaymentMethod, "acceptedPaymentMethod">;
  /** The amount of time that is required between accepting the offer and the actual usage of the resource or service. */
  advanceBookingRequirement?: SchemaValue<
    QuantitativeValue,
    "advanceBookingRequirement"
  >;
}
