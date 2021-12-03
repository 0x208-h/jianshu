import { SEARCH_BLUR, SEARCH_FOCUS } from './const'

export const handleFocus = () => ({
  type: SEARCH_FOCUS
})

export const handleBlur = () => ({
  type: SEARCH_BLUR
})