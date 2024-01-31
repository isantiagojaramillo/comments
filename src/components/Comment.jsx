import React from 'react';

export const Comment = ({data}) => {
  return (
    <>
        <h1 className='text-center'>Comment Box</h1>
        <div>
            <div className='container justify-content-center'>
              <table class="table">
                  <thead>
                    <tr>
                      <th scope="col">User</th>
                      <th scope="col">Comment</th>
                    </tr>
                  </thead>
                  {data.map((key, value) => (
                    <tbody>
                      <tr>
                        <td key={value}>{key.user}</td>
                        <td>{key.comment}</td>
                      </tr>
                    </tbody>
                  ))}
              </table>
            </div>
        </div>
    </>
  )
}
