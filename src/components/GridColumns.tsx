import { FC, ReactNode } from 'react'

interface GridColumnsProps {
  columns: number
  children: ReactNode
}

const GridColumns: FC<GridColumnsProps> = ({ columns = 1, children }) => {
  return <div className={`grid grid-cols-1 md:grid-cols-${columns} gap-4 p-4`}>{children}</div>
}

export default GridColumns
