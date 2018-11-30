import getConfig from 'next/config'
import redirect from './redirect'
import { getCookie, removeCookie } from './session'
import { Auth } from 'aws-amplify'

const config = getConfig()
const {
  AWS_REGION,
  USER_POOL_ID,
  USER_POOL_CLIENT_ID,
} = (config) ? config.publicRuntimeConfig : {}

const getCookieSessionName = () => {
  const cookieName = 'cognito-access-token'

  return cookieName
}

export const amplifyConfig = {
  region: AWS_REGION,
  userPoolId: USER_POOL_ID,
  userPoolWebClientId: USER_POOL_CLIENT_ID,
  authenticationFlowType: 'USER_SRP_AUTH',
}

export const signOut = (ctx = {}) => {
  if (process.browser) {
    removeCookie(getCookieSessionName())
    redirect('/', ctx)
  }
}

export const getAuthToken = () => getCookie(getCookieSessionName())

export const isAuthenticated = async ctx => {
  let hasAuthedUser
  try {
    hasAuthedUser = !!(await Auth.currentAuthenticatedUser())
  } catch (err) {
    hasAuthedUser = false
  }
  if (!!getAuthToken(ctx) && hasAuthedUser) return true
  else return false
}

export const redirectIfAuthenticated = async ctx => {
  const isLoggedIn = await isAuthenticated(ctx)
  if (process.browser && isLoggedIn) {
    redirect('/medic', ctx)
    return true
  }
  return false
}

export const redirectIfNotAuthenticated = async ctx => {
  const isLoggedIn = await isAuthenticated(ctx)
  if (process.browser && !isLoggedIn) {
    redirect('/', ctx)
    return true
  }
  return false
}