import Amplify from 'aws-amplify'
import getConfig from 'next/config'

const config = getConfig()
const {
  AWS_REGION,
  USER_POOL_ID,
  USER_POOL_CLIENT_ID,
} = (config) ? config.publicRuntimeConfig : {}

const amplifyConfigure = Amplify.configure({
  Auth: {
    region: AWS_REGION,
    userPoolId: USER_POOL_ID,
    userPoolWebClientId: USER_POOL_CLIENT_ID,
    cookieStorage: {
      domain: '.michellesagnelli.com',
      path: '/',
      expires: 365,
      secure: true,
    },
    authenticationFlowType: 'USER_PASSWORD_AUTH',
  },
})

export { amplifyConfigure }