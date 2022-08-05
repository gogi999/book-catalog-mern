import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateUserProfileAction } from '../../redux/actions/users/usersActions';
import ErrorMessage from '../Error/ErrorMessage';
import Loading from '../Loading/Loading';

const UpdateProfile = ({ history }) => {
    const dispatch = useDispatch();
    const { userInfo } = useSelector((state) => state.userAuth);

    const [name, setName] = useState(userInfo?.name);
    const [email, setEmail] = useState(userInfo?.email);
    const [password, setPassword] = useState('');

    const { user, loading, success, error } = useSelector((state) => state.updatedUser);

    const formSubmitHandler = (e) => {
        e.preventDefault();

        dispatch(updateUserProfileAction(name, email, password));    
    }

  return (
    <div className='row container-height'>
      <div className='col-lg-6 col-md-6 m-auto'>
        <div className='container'>
            {error && <ErrorMessage />}
            {loading && <Loading />}
          <h1 className='text-center'>Update User Profile</h1>
          <form onSubmit={formSubmitHandler}>
            <fieldset>
              <div className='form-group'>
                <label htmlFor='exampleInputEmail1'>Name</label>
                <input
                  type='text'
                  className='form-control'
                  id='exampleInputEmail1'
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  aria-describedby='emailHelp'
                  placeholder='Enter Name'
                />
              </div>
              <div className='form-group'>
                <label htmlFor='exampleInputEmail1'>Email address</label>
                <input
                  type='email'
                  className='form-control'
                  id='exampleInputEmail1'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  aria-describedby='emailHelp'
                  placeholder='Enter email'
                />
              </div>
              <div className='form-group'>
                <label htmlFor='exampleInputPassword1'>Password</label>
                <input
                  type='password'
                  className='form-control'
                  id='exampleInputPassword1'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder='Password'
                />
              </div>
              <button type='submit' className='btn btn-info m-auto'>
                Update User Profile
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfile;