import isClient from './isClient'

export const isMobile = () => {
  if (!isClient()) return
  return !!window.matchMedia('screen and (max-width:768px)').matches
}