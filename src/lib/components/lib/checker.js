export const styleChecker = (style, value) => {
  let checker = new Option().style
  checker[style] = value
  return checker[style] === value
}

export const imageUrlValidator = url =>
  new Promise((resolve, reject) => {
    const checker = new Image()
    checker.src = url
    checker.onload = () => resolve(true)
    checker.onerror = checker.onabort = () => reject(false)
  })
