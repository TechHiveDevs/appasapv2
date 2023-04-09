import { z } from "zod";
import { genericValidation } from "../../helpers/generic-crud/generic-crud.validation";

// =================================================================

const fields = [
  'id',
  'serviceOfferId',
  'numberOfRooms',
  'checkInDate',
  'checkOutDate',
  'isDisabled',
  'createdAt',
  'updatedAt',
] as const

// =================================================================

export const accomodationOfferValidation: typeof genericValidation = {
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
    serviceOfferId: z.number(),
    numberOfRooms: z.number(),
    checkInDate: z.date(),
    checkOutDate: z.date(),
    isDisabled: z.boolean(),
    createdAt: z.date().optional(),
    updatedAt: z.date(),
  }),

  // ----------------------------------

  updateOneValidation: z.object({ 
    id: z.number(), 
    data: z.object({
      id: z.number().optional(),
      serviceOfferId: z.number(),
      numberOfRooms: z.number(),
      checkInDate: z.date(),
      checkOutDate: z.date(),
      isDisabled: z.boolean(),
      createdAt: z.date().optional(),
      updatedAt: z.date(),
    }).partial(),
  }),
}
