import { FC } from 'react'
import { NAME } from '@assets/texts'

const PrincipalTitle: FC = () => {
  return (
    <div className="flex flex-col pl-6 pr-6">
      <p className="text-custom font-bold">{NAME}</p>
    </div>
  )
}

export default PrincipalTitle
