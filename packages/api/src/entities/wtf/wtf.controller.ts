import { publicProcedure, router } from '../../helpers/server/trpc/trpc.helper'
import { genericCrudRouterController } from '../../helpers/generic-crud/generic-crud.controller'
import { wtfService } from './wtf.service'
import { wtfValidation } from './wtf.validation'

export const wtfRouter = router({
  ...genericCrudRouterController('wtf', wtfValidation),

  // -------------------------------------

  customRoute: publicProcedure.query(({ ctx: _ctx, input: _input }) => {
    return wtfService.wtfCustomService()
  }),
})
