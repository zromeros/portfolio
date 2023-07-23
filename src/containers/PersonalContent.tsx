import { FC, ReactNode } from 'react'
import PrincipalTitle from '@components/PrincipalTitle'
import TextCard from '@components/TextCard'

interface PersonalContentProps {
  children?: ReactNode
}

const PersonalContent: FC<PersonalContentProps> = ({ children }) => {
  return (
    <div className="bg-customBack w-full top-0 pt-6 pb-6 ml-2 mr-2 flex flex-col items-start fixed lg:w-[600px] lg:m-0 lg:p-0 lg:top-auto">
      <PrincipalTitle />
      <TextCard />
      {children}
    </div>
  )
}

export default PersonalContent
