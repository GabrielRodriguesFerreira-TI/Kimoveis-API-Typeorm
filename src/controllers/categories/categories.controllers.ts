import { Request, Response } from "express";
import {
  tCategoriesSchemaCreate,
  tCategoriesSchemaRetrieve,
} from "../../schemas/categories.schema";
import { createCategoriesService } from "../../services/categories/createCategories.service";
import { retrieveCategoriesService } from "../../services/categories/retrieveCategories.service";

export const createCategoriesController = async (
  req: Request,
  res: Response
) => {
  const categoryInfo: tCategoriesSchemaCreate = req.body;

  const category = await createCategoriesService(categoryInfo);

  return res.status(201).json(category);
};

export const retrieveCategoriesController = async (
  req: Request,
  res: Response
) => {
  const category: tCategoriesSchemaRetrieve = await retrieveCategoriesService();

  return res.status(200).json(category);
};

export const retrieveCategoriesRealEstate = async (
  req: Request,
  res: Response
) => {};
