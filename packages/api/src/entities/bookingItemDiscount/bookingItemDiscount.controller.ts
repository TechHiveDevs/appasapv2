import { publicProcedure, router } from '../../helpers/server/trpc/trpc.helper'
import { genericCrudRouterController } from '../../helpers/generic-crud/generic-crud.controller'
import { bookingItemDiscountService } from './bookingItemDiscount.service'
import { bookingItemDiscountValidation } from './bookingItemDiscount.validation'

export const bookingItemDiscountRouter = router({
  ...genericCrudRouterController('bookingItemDiscount', bookingItemDiscountValidation),

  // -------------------------------------

  customRoute: publicProcedure.query(({ ctx: _ctx, input: _input }) => {
    return bookingItemDiscountService.bookingItemDiscountCustomService()
  }),
})
