import { FC, ReactNode } from 'react'
import PrincipalTitle from '@components/PrincipalTitle'
import TextCard from '@components/TextCard'

interface PersonalContentProps {
  children?: ReactNode
}

const PersonalContent: FC<PersonalContentProps> = () => {
  return (
    <div className="m-0 p-0">
      <PrincipalTitle />
      <TextCard />
    </div>
  )
}

export default PersonalContent
