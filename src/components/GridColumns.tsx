import { FC, ReactNode } from 'react'

interface GridColumnsProps {
  children: ReactNode
}

const GridColumns: FC<GridColumnsProps> = ({ children }) => {
  return <div className={`grid grid-cols-1 lg:grid-cols-2 gap-4 h-screen pt-20`}>{children}</div>
}

export default GridColumns
