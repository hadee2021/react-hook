import { useEffect, useRef } from 'react'
function UseRef4() {
  const inputRef = useRef()
  useEffect(() => {
    console.log(inputRef)
    inputRef.current.focus()
  }, [])

  const login = () => {
    alert(`환영합니다 ${inputRef.current.value}`)
    inputRef.current.value = ''
    inputRef.current.focus()
  }

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="userName" />
      <button onClick={login}>로그인</button>
    </div>
  )
}

export default UseRef4