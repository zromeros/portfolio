import { FC } from 'react'
import GridColumns from '@components/GridColumns'
import PrincipalTitle from '@containers/PrincipalTitle'

const MainPage: FC = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="max-w-6xl w-full">
        <GridColumns>
          <div>
            <PrincipalTitle />
          </div>
          <div>
            <p>test</p>
          </div>
        </GridColumns>
      </div>
    </div>
  )
}

export default MainPage
