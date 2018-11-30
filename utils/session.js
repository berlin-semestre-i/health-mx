import cookie from 'js-cookie'

export const setCookie = (key, value) => {
  if (process.browser) {
    cookie.set(key, value, {
      expires: 1,
      path: '/',
    })
  }
}

export const removeCookie = key => {
  if (process.browser) {
    cookie.remove(key, {
      expires: 1,
    })
  }
}

const getCookieFromBrowser = key => {
  return cookie.get(key)
}

export const getCookie = (key, req) => {
  return process.browser
    ? getCookieFromBrowser(key)
    : undefined
}
