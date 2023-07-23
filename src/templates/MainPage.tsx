import { FC } from 'react'
import GridColumns from '@components/GridColumns'
import PersonalContent from '@containers/PersonalContent'
import CarrerContent from '@containers/CarrerContent'

const MainPage: FC = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="max-w-6xl w-full">
        <GridColumns>
          <PersonalContent />
          <div className="h-[4rem]"></div>
          <CarrerContent />
        </GridColumns>
      </div>
    </div>
  )
}

export default MainPage
