import type { FC } from 'react'

const App: FC<{
  tag: string
}> = ({ tag }) => {
  return <p>Hello world, {tag}</p>
}

export default App
