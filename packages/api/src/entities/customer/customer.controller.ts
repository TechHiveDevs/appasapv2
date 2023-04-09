import { publicProcedure, router } from '../../helpers/server/trpc/trpc.helper'
import { genericCrudRouterController } from '../../helpers/generic-crud/generic-crud.controller'
import { customerService } from './customer.service'
import { customerValidation } from './customer.validation'

export const customerRouter = router({
  ...genericCrudRouterController('customer', customerValidation),

  // -------------------------------------

  customRoute: publicProcedure.query(({ ctx: _ctx, input: _input }) => {
    return customerService.customerCustomService()
  }),
})
