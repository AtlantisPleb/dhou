import useStore from '@/helpers/store'
import { useEffect, useRef } from 'react'

const Dom = ({ children }) => {
  // const ref = useRef(null)
  // useEffect(() => {
  //   useStore.setState({ dom: ref })
  // }, [])
  return <>{children}</>
  // return (
  //   <div className='w-screen h-full overflow-y-scroll dom' ref={ref}>
  //     {children}
  //   </div>
  // )
}

export default Dom
