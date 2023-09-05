import { useEffect, useRef } from 'react'

export const useDynamicCSSVar = (cssVarName) => {
  const elementRef = useRef(null)

  useEffect(() => {
    const element = elementRef.current
    let resizeObserver
    if (!element.__resizeObserver) {
      resizeObserver = new ResizeObserver((entries) => {
        for (let entry of entries) {
          document.documentElement.style.setProperty(cssVarName, `${entry.contentRect.height}px`)
        }
      })
  
      element.__resizeObserver = resizeObserver
    } else {
      resizeObserver = element.__resizeObserver
    }
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
