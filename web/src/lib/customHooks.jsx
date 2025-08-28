import { useEffect, useRef, useState } from 'react'

const THRESHOLD = 0

const useOnClickOutside = (ref, handler) => {
  useEffect(() => {
    const listener = (event) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return
      }
      handler(event)
    }

    document.addEventListener('mousedown', listener)
    document.addEventListener('touchstart', listener)

    return () => {
      document.removeEventListener('mousedown', listener)
      document.removeEventListener('touchstart', listener)
    }
  }, [ref, handler])
}

const useScrollDirection = () => {
  const [scrollInfo, setScrollInfo] = useState({
    direction: 'up',
    isScrolling: false,
    scrollY: 0,
  })

  const blocking = useRef(false)
  const prevScrollY = useRef(0)

  useEffect(() => {
    prevScrollY.current = window.scrollY

    const updateScrollDirection = () => {
      const scrollY = window.scrollY

      if (Math.abs(scrollY - prevScrollY.current) >= THRESHOLD) {
        const newScrollDirection = scrollY > prevScrollY.current ? 'down' : 'up'

        setScrollInfo({
          direction: newScrollDirection,
          isScrolling: true,
          scrollY,
        })

        prevScrollY.current = scrollY > 0 ? scrollY : 0
      }

      blocking.current = false
    }

    const onScroll = () => {
      if (!blocking.current) {
        blocking.current = true
        window.requestAnimationFrame(() => {
          updateScrollDirection()
          setScrollInfo((prev) => ({ ...prev, isScrolling: false }))
        })
      }
    }

    window.addEventListener('scroll', onScroll)

    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return scrollInfo
}

export { useScrollDirection, useOnClickOutside }
