import { publicProcedure, router } from '../../helpers/server/trpc/trpc.helper'
import { genericCrudRouterController } from '../../helpers/generic-crud/generic-crud.controller'
import { additionalChargeOptionService } from './additionalChargeOption.service'
import { additionalChargeOptionValidation } from './additionalChargeOption.validation'

export const additionalChargeOptionRouter = router({
  ...genericCrudRouterController('additionalChargeOption', additionalChargeOptionValidation),

  // -------------------------------------

  customRoute: publicProcedure.query(({ ctx: _ctx, input: _input }) => {
    return additionalChargeOptionService.additionalChargeOptionCustomService()
  }),
})
