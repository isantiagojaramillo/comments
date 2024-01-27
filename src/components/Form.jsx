import React, {useState} from 'react';

export const Form = ( {sendForm} ) => {
    const [user, setUser] = useState('');
    const [comment, setComment] = useState('');

    const send = (event) => {
        event.preventDefault();
        sendForm({user, comment});
        setUser('');
        setComment('');
    };

  return (
    <>
        <h1 className='text-center'>Form</h1>

        <div className='container justify-content-center align-items-center'>
            <form action="#" onSubmit={send}>
                <div className="mb-3">
                    <label for="exampleFormControlInput1" className="form-label">User</label>
                    <input type="text" className="form-control" value={user} onChange={(event) => setUser(event.target.value)} id="exampleFormControlInput1" placeholder="Pepe27" />
                </div>
                <div className="mb-3">
                    <label for="exampleFormControlTextarea1" className="form-label">Comments</label>
                    <textarea className="form-control" value={comment} onChange={(event) => setComment(event.target.value)} id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <div className='text-center'>
                    <button type='submit' className='btn btn-primary'>Send Comment</button>
                </div>
            </form>
        </div>
    
    </>
  )
}
