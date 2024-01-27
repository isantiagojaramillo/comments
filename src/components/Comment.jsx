import React from 'react';

export const Comment = ({data}) => {
  return (
    <>
        <h1 className='text-center'>Comment Box</h1>
        <div>
          {data.map((key, value) => (
            <div key={value} className='container justify-content-center'>
              <table class="table">
                  <thead>
                    <tr>
                      <th scope="col">User</th>
                      <th scope="col">Comment</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{key.user}</td>
                      <td>{key.comment}</td>
                    </tr>
                  </tbody>
              </table>
            </div>
          ))}
        </div>
    </>
  )
}
