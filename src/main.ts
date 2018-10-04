import { addPart  } from "./dal/part";
import { Part, IPart } from "./entities/part";
import { Category, SubCategory } from "./enums/categories";
import { Shelf } from "./enums/shelf";

const part: IPart = {
  id: "53453gr",
  name: "h7",
  barcode: "n4234523423",
  category: Category.Electricity,
  subCategory: SubCategory.Electricity_Lamps,
  suplierId: "345345",
  quantity: 23,
  imageName: "",
  shelf: Shelf.Pass2
};

addPart(new Part(part));