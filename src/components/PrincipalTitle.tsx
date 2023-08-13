import { FC } from 'react'
import { NAME } from '@assets/texts'

const PrincipalTitle: FC = () => {
  return (
    <div className="flex flex-col p-2">
      <p className="text-[2rem] md:text-[2.5rem] lg:text-[3rem] font-bold">{NAME}</p>
    </div>
  )
}

export default PrincipalTitle
