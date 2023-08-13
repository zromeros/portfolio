import React, { FC, ReactNode } from 'react'

interface SegmentProps {
  title: string
  children: ReactNode | null
}
const Segment: FC<SegmentProps> = ({ title, children }) => {
  return (
    <div>
      <h2 className="pb-2 pl-2 lg:pt-2 text-xl font-bold">{title}</h2>
      {children}
    </div>
  )
}

interface SegmentListProps {
  children: ReactNode
}
const SegmentList: FC<SegmentListProps> = ({ children }) => {
  return <div>{children}</div>
}

interface SegmentItemProps {
  fromDate: string
  endDate: string
  jobTitle: string
  company: string
  children: ReactNode
}
const SegmentItem: FC<SegmentItemProps> = ({ fromDate, endDate, jobTitle, company, children }) => {
  return (
    <div className="group flex items-start p-2 pb-4 cursor-pointer rounded-lg border-t border-transparent hover:bg-primaryOpc hover:border-dark hover:text-emphasis">
      <div className="hidden w-1/6 font-bold text-emphasis text-sm mr-4 pt-1 lg:block">
        {fromDate} - {endDate}
      </div>
      <div className="lg:w-5/6">
        <div className="font-bold text-emphasis text-sm mb-1 lg:hidden">
          {fromDate} - {endDate}
        </div>
        <p className="text-lg">{jobTitle}</p>
        <p className="text-white text-base">{company}</p>
        <div className="text-white pt-1">{children}</div>
      </div>
    </div>
  )
}

export { Segment, SegmentList, SegmentItem }
