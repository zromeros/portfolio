import { FC, ReactNode } from 'react'

interface GridColumnsProps {
  children: ReactNode
}

const GridColumns: FC<GridColumnsProps> = ({ children }) => {
  return <div className={`grid grid-cols-1 gap-6 m-10`}>{children}</div>
}

export default GridColumns
