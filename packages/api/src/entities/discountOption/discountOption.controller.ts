import { publicProcedure, router } from '../../helpers/server/trpc/trpc.helper'
import { genericCrudRouterController } from '../../helpers/generic-crud/generic-crud.controller'
import { discountOptionService } from './discountOption.service'
import { discountOptionValidation } from './discountOption.validation'

export const discountOptionRouter = router({
  ...genericCrudRouterController('discountOption', discountOptionValidation),

  // -------------------------------------

  customRoute: publicProcedure.query(({ ctx: _ctx, input: _input }) => {
    return discountOptionService.discountOptionCustomService()
  }),
})
