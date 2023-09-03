import express from 'express'
import render from '~/render/render'

const router = express.Router()

router.get('/', (req, res) => {
  return render(req.url, req, res)
})

export default router
