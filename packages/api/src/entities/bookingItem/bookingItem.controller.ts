import { publicProcedure, router } from '../../helpers/server/trpc/trpc.helper'
import { genericCrudRouterController } from '../../helpers/generic-crud/generic-crud.controller'
import { bookingItemService } from './bookingItem.service'
import { bookingItemValidation } from './bookingItem.validation'

export const bookingItemRouter = router({
  ...genericCrudRouterController('bookingItem', bookingItemValidation),

  // -------------------------------------

  customRoute: publicProcedure.query(({ ctx: _ctx, input: _input }) => {
    return bookingItemService.bookingItemCustomService()
  }),
})
