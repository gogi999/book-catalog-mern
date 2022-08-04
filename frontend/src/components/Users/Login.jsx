import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUserAction } from '../../redux/actions/users/usersActions';
import Loading from '../Loading/Loading';
import ErrorMessage from '../Error/ErrorMessage';

const Login = ({ history }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();
    const { loading, userInfo, error } = useSelector((state) => state.userAuth);

    const submitFormHandler = (e) => {
        e.preventDefault();

        dispatch(loginUserAction(email, password));
    }

    // Redirect if user is logged in or authenticated
    useEffect(() => {
        if (userInfo) history.push('/profile');
    }, [userInfo, history]);

    return (
        <div className='row container-height'>
            <div className='col-lg-6 col-md-6 m-auto'>
                <div className='container'>
                    {loading && <Loading />}
                    {error && <ErrorMessage>{error}</ErrorMessage>}
                    <form onSubmit={submitFormHandler}>
                        <fieldset>
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
                                Login
                            </button>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
