import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import './Profile.css';
import pic from '../../assets/img/bookpic.jpg';
import { getUserProfileAction } from '../../redux/actions/users/usersActions';
import Loading from '../Loading/Loading';
import ErrorMessage from '../Error/ErrorMessage';

const Profile = () => {
    const dispatch = useDispatch();
    const { error, loading, user } = useSelector((state) => state.userProfile);

    useEffect(() => {
        dispatch(getUserProfileAction());
    }, [dispatch]);

    return (
        <>
            {error && <ErrorMessage />}
            {loading ? <Loading /> : (
                <>
                    <div className='container'>
                        <div className='row'>
                            <div className='col mt-5'>
                                <div className='card m-auto ' style={{ width: '50%' }}>
                                    <img src={pic} className='card-img-top' alt='...' />
                                    <div className='card-body'>
                                        <h5 className='card-title'>{user?.email}</h5>
                                        <p className='card-text'>{user?.name}</p>
                                        <Link to='/user-update' className='btn btn-primary'>
                                            Update your profile
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <table className='table table-hover'>
                        <thead>
                            <tr>
                                <th scope='col'>Author</th>
                                <th scope='col'>Book Name</th>
                                <th scope='col'>Delete</th>
                                <th scope='col'>Update</th>
                            </tr>
                        </thead>
                        <tbody>
                            {user?.books.map((book, i) => (
                                <tr className='table-dark' key={i}>
                                    <th scope='row'>{book.author}</th>
                                    <td>{book.title}</td>
                                    <td>Delete</td>
                                    <td>Update</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </>
            )}
        </>
    );
};

export default Profile;
