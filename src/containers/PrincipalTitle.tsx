import { FC } from 'react'

const PrincipalTitle: FC = () => {
  return (
    <div className="flex flex-row justify-center items-center text-title">
      <p className="text-green-500">
        {'Hi, I am'}
        <span className="text-title">{' Zadkiel Romero'}</span>
      </p>
    </div>
  )
}

export default PrincipalTitle
