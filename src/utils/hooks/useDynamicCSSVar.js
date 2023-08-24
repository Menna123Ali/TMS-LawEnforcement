import { useEffect, useRef } from 'react'

export const useDynamicCSSVar = (cssVarName) => {
  const elementRef = useRef(null)

  useEffect(() => {
    const element = elementRef.current
    const resizeObserver = new ResizeObserver((entries) => {
      for (let entry of entries) {
        document.documentElement.style.setProperty(cssVarName, `${entry.contentRect.height}px`)
      }
    })

    if (element) {
      resizeObserver.observe(element)
    }

    return () => {
      if (element) {
        resizeObserver.unobserve(element)
      }
    }
  }, [cssVarName])

  return elementRef
}
