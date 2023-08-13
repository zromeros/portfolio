import { FC } from 'react'
import GridColumns from '@components/GridColumns'
import PersonalContent from '@containers/PersonalContent'
import CarrerContent from '@containers/CarrerContent'

const MainPage: FC = () => {
  return (
    <div className="mx-auto max-w-[1080px]">
      <GridColumns>
        <PersonalContent />
        <CarrerContent />
      </GridColumns>
    </div>
  )
}

export default MainPage
