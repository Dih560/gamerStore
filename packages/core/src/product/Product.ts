import Priceable from "./Priceable";
import Specifications from "./Specifications";

export default interface Product extends Priceable {
    id: number;
    name: string;
    description: string;
    brand: string;
    model: string;
    image: string;
    rating: number;
    reviewVideo: string;
    tags: string[];
    specifications: Specifications
}