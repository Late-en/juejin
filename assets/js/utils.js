/* 防抖 */
export function debounce (func, delay) {
  let timer = null
  return function () {
    if (timer) {
      clearTimeout(timer)
      timer = null
    }
    timer = setTimeout(() => {
      func(...arguments)
    }, delay)
  }
}
