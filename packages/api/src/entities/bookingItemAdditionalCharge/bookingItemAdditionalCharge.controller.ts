import { publicProcedure, router } from '../../helpers/server/trpc/trpc.helper'
import { genericCrudRouterController } from '../../helpers/generic-crud/generic-crud.controller'
import { bookingItemAdditionalChargeService } from './bookingItemAdditionalCharge.service'
import { bookingItemAdditionalChargeValidation } from './bookingItemAdditionalCharge.validation'

export const bookingItemAdditionalChargeRouter = router({
  ...genericCrudRouterController('bookingItemAdditionalCharge', bookingItemAdditionalChargeValidation),

  // -------------------------------------

  customRoute: publicProcedure.query(({ ctx: _ctx, input: _input }) => {
    return bookingItemAdditionalChargeService.bookingItemAdditionalChargeCustomService()
  }),
})
