import express from 'express'
import fs from 'fs'
import path from 'path'
const authRouter = express.Router()

type UserMockData = {
  [key: string]: MockProfile
}

type MockProfile = {
  user_id: string
  email: string
  name: string
  profile_image: string
  access_token: string
}

// ! 데모 라우터입니다. 실제 서비스에서는 사용하지 않습니다.
authRouter.post('/', (req, res) => {
  if (!req.headers.authorization || !req.headers.authorization.includes('token-example')) {
    return res.status(400).json({
      message: 'Invalid authorization header'
    })
  }

  const token = req.headers.authorization.split('token-example:')[1]

  const data: UserMockData = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../mocks/user.json'), 'utf8'))

  if (!data[token]) {
    return res.status(400).json({ message: 'Invalid authorization header' })
  }

  return res.json(data[token])
})

// * auth/login?email=xxx
authRouter.post('/login', (req, res) => {
  const body = req.body as unknown as { email: string; password: string }

  const data: UserMockData = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../mocks/user.json'), 'utf8'))
  if (!data[body.email]) {
    return res.status(400).json({
      message: '존재하지 않는 이메일입니다.\n 아이디 또는 패스워드를 확인해주세요.'
    })
  }
  return res.json(data[body.email])
})

export default authRouter
