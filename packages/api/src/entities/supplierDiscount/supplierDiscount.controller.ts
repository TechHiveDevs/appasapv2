import { publicProcedure, router } from '../../helpers/server/trpc/trpc.helper'
import { genericCrudRouterController } from '../../helpers/generic-crud/generic-crud.controller'
import { supplierDiscountService } from './supplierDiscount.service'
import { supplierDiscountValidation } from './supplierDiscount.validation'

export const supplierDiscountRouter = router({
  ...genericCrudRouterController('supplierDiscount', supplierDiscountValidation),

  // -------------------------------------

  customRoute: publicProcedure.query(({ ctx: _ctx, input: _input }) => {
    return supplierDiscountService.supplierDiscountCustomService()
  }),
})
