import { publicProcedure, router } from '../../helpers/server/trpc/trpc.helper'
import { genericCrudRouterController } from '../../helpers/generic-crud/generic-crud.controller'
import { travelServiceOptionService } from './travelServiceOption.service'
import { travelServiceOptionValidation } from './travelServiceOption.validation'

export const travelServiceOptionRouter = router({
  ...genericCrudRouterController('travelServiceOption', travelServiceOptionValidation),

  // -------------------------------------

  customRoute: publicProcedure.query(({ ctx: _ctx, input: _input }) => {
    return travelServiceOptionService.travelServiceOptionCustomService()
  }),
})
