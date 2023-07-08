import { FC } from 'react'
import GridColumns from '@components/GridColumns'
import PrincipalTitle from '@containers/PrincipalTitle'

const MainPage: FC = () => {
  return (
    <GridColumns columns={1}>
      <PrincipalTitle />
    </GridColumns>
  )
}

export default MainPage
