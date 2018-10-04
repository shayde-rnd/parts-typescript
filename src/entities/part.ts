import { Category, SubCategory } from "../enums/categories";
import { Shelf } from "../enums/shelf";
import { keys } from "lodash/fp";


export interface IPart {
  id: string;
  name: string;
  barcode: string;
  category: Category;
  subCategory: SubCategory;
  suplierId: string;
  quantity: number;
  imageName: string;
  shelf: Shelf;
}

export class Part {

  id: string;
  name: string;
  barcode: string;
  category: Category;
  subCategory: SubCategory;
  suplierId: string;
  quantity: number;
  imageName: string;
  shelf: Shelf;

  constructor(part: IPart) {
      keys(part).forEach((key: string) => {
        this[key] = part[key];
      });
  }
}