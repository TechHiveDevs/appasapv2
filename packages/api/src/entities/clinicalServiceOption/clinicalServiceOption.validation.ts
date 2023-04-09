import { z } from "zod";
import { genericValidation } from "../../helpers/generic-crud/generic-crud.validation";

// =================================================================

const fields = [
  'id',
  'name',
  'description',
  'clinicalOfferId',
  'clinicalType',
  'clinicalSubType',
  'snomedCode',
  'snomedDescription',
  'keywords',
] as const

// =================================================================

export const clinicalServiceOptionValidation: typeof genericValidation = {
  // ------------------------------

  ...genericValidation,

  // ------------------------------
  
  getListValidation: z
    .object({
      select: z.enum(fields).array().optional(),
      filter: z.any().optional(),
      pagination: z
        .object({
          page: z.number().default(1).optional(),
          perPage: z.number().default(10).optional(),
        })
        .optional(),
      sort: z
        .object({
          field: z.enum(fields).default('createdAt').optional(),
          order: z.enum(['ASC', 'DESC']).default('ASC').optional(),
        })
        .optional()
    })
    .partial()
    .optional(),
  
  // ------------------------------

  
  getOneValidation: z.object({ 
    id: z.number(), 
    select: z.enum(fields).array().optional()
  }),

  // ------------------------------

  createOneValidation: z.object({
    id: z.number().optional(),
    name: z.string(),
    description: z.string().optional(),
    clinicalOfferId: z.number(),
    clinicalType: z.string(),
    clinicalSubType: z.string(),
    snomedCode: z.string(),
    snomedDescription: z.string(),
    keywords: z.string(),
  }),

  // ----------------------------------

  updateOneValidation: z.object({ 
    id: z.number(), 
    data: z.object({
      id: z.number().optional(),
      name: z.string(),
      description: z.string().optional(),
      clinicalOfferId: z.number(),
      clinicalType: z.string(),
      clinicalSubType: z.string(),
      snomedCode: z.string(),
      snomedDescription: z.string(),
      keywords: z.string(),
    }).partial(),
  }),
}
