import { FC } from 'react'
import { NAME } from '@assets/texts'

const PrincipalTitle: FC = () => {
  return (
    <div className="flex flex-col">
      <p className="text-custom font-bold">{NAME}</p>
    </div>
  )
}

export default PrincipalTitle
