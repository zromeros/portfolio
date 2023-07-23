import React, { FC, ReactNode } from 'react'

interface SegmentProps {
  title: string
  children: ReactNode
}
const Segment: FC<SegmentProps> = ({ title, children }) => {
  return (
    <div>
      <h2 className="pb-4 pl-6 lg:pt-2 text-xl font-bold">{title}</h2>
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
    <div className="group flex justify-between items-start p-6 cursor-pointer rounded-lg border-t border-transparent hover:bg-primaryOpc hover:border-dark hover:text-emphasis">
      <div className="hidden w-1/3 font-bold text-emphasis text-sm mr-4 pt-1 lg:block">
        {fromDate} - {endDate}
      </div>
      <div className="lg:w-2/3">
        <div className="font-bold text-emphasis text-sm mb-1 lg:hidden">
          {fromDate} - {endDate}
        </div>
        <p className="mr-4 text-lg">{jobTitle}</p>
        <p className="text-white mr-4 text-base">{company}</p>
        <div className="text-white pt-1">{children}</div>
      </div>
    </div>
  )
}

export { Segment, SegmentList, SegmentItem }
