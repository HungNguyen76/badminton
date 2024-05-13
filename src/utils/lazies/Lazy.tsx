import { lazy, Suspense } from "react"
import Loading from "./components/loading"

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const lazyFn = (importFunc: any) => {

  // set timeout for load
  const LazyComponent = lazy(() => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(importFunc())
      }, 1000)
    })
  })

  return (
    <Suspense fallback={<Loading />}>
      <LazyComponent />
    </Suspense>
  )
}
