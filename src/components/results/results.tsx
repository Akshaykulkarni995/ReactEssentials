import React from 'react'
import { calculateInvestmentResults,formatter } from '../inv';

export const Results = ({inputs}:any) => {
    console.log(inputs);
   const resData =  calculateInvestmentResults(inputs)
   console.log(resData);
    
  return (
    <table>
   <thead>
    <tr>
        <th>Year</th>
        <th>I Value</th>
        <th>Interest</th>
        <th>Capital</th>
    </tr>
   </thead>
   <tbody>
    {resData.map((yearData)=> {
        return(
            <tr key={yearData.year}>
                <td>{yearData.year}</td>
                <td>{formatter.format(yearData.valueEndOfYear)}</td>
                <td>{formatter.format(yearData.interest)}</td>

            </tr>
        )
    })}
   </tbody>
   </table>
  )
}
