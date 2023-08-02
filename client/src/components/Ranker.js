import React from 'react'

function Ranker({Users}) {

  
  return (
    <div className='bg-slate-200 text-teal-600 p-3 rounded-lg text-center'>
        <div className='uppercase tracking-widest text-xl mb-3  font-bold'>step ranker</div>
        <table>
          <thead>
            <tr className='border-b border-black'>
                <th className='px-6 py-4'>Rank</th>
                <th className='px-6 py-4'>Name</th>
                <th className='px-6 py-4'>Step Count</th>
            </tr>
            </thead>
            <tbody>
            {Users.map((user,i) => (
            <tr key={user._id} className='border-b border-black'>
                <td className='px-6 py-4'>{i+1}</td>
                <td className='px-6 py-4'>{user.username}</td>
                <td className='px-6 py-4'>{user.steps}</td>
            </tr>
            ))}
            </tbody>
        </table>
    </div>
  )
}

export default Ranker