import { publicProcedure, router } from '../../helpers/server/trpc/trpc.helper'
import { genericCrudRouterController } from '../../helpers/generic-crud/generic-crud.controller'
import { bookingService } from './booking.service'
import { bookingValidation } from './booking.validation'

export const bookingRouter = router({
  ...genericCrudRouterController('booking', bookingValidation),

  // -------------------------------------

  customRoute: publicProcedure.query(({ ctx: _ctx, input: _input }) => {
    return bookingService.bookingCustomService()
  }),
})
