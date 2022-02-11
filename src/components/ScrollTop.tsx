import { useLayoutEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function ScrollTop() {
  const { pathname } = useLocation()

  useLayoutEffect(() => {
    window.scrollTo({
      top: 0,
    })
  }, [pathname])

  return null
}
