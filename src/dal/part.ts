import { Part, IPart } from "../entities/part";
import { readFile } from "fs";

let _parts: Array<IPart>;

export const addPart = (p: IPart) => {
  const part = new Part(p);
};

export const getPart = (id: string) => {
};

export const updatePart = (part: IPart) => {
};

export const deletePart = (id: string) => {
};

readFile("part.json", (err: any, parts: any) => {
  _parts = JSON.parse(parts);
  console.assert(Array.isArray(_parts), "im not an array");
});
