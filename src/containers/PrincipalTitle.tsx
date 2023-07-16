import { FC } from 'react'

const name = 'Zadkiel Romero'
const PrincipalTitle: FC = () => {
  return (
    <div className="flex flex-col">
      <p className="text-custom font-bold">{name}</p>
    </div>
  )
}

export default PrincipalTitle
