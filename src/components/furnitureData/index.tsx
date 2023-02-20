import React from 'react'
import { FurnitureDataProps } from '../types';

export const FurnitureData = ({data, Component}:FurnitureDataProps) => {
  return (
    <>
      {data.map(furniture => (
        <Component key={furniture.id} furniture={furniture}/>
      ))}
    </>
  )
}

export default FurnitureData;