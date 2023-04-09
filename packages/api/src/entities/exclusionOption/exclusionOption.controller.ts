import { publicProcedure, router } from '../../helpers/server/trpc/trpc.helper'
import { genericCrudRouterController } from '../../helpers/generic-crud/generic-crud.controller'
import { exclusionOptionService } from './exclusionOption.service'
import { exclusionOptionValidation } from './exclusionOption.validation'

export const exclusionOptionRouter = router({
  ...genericCrudRouterController('exclusionOption', exclusionOptionValidation),

  // -------------------------------------

  customRoute: publicProcedure.query(({ ctx: _ctx, input: _input }) => {
    return exclusionOptionService.exclusionOptionCustomService()
  }),
})
