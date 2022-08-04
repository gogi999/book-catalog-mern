import React, {  useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBooksAction } from '../../redux/actions/books/bookActions';
import Loading from '../Loading/Loading';

const Books = () => {
    const dispatch = useDispatch();
    const { books, loading } = useSelector((state) => state.bookList);

    useEffect(() => {
        dispatch(fetchBooksAction());
    }, [dispatch]);

    return (
      <div>
        <div className='row'>
          <div className='col'>
            <table className='table table-hover'>
              <thead>
                <tr>
                  <th scope='col'>Author</th>
                  <th scope='col'>Book Name</th>
                  <th scope='col'>Action</th>
                  <th scope='col'>Action</th>
                </tr>
              </thead>
              <tbody>
                {loading ? (
                  <Loading />
                ) : (
                  <>
                    {books &&
                      books.map((book, i) => {
                        return (
                          <>
                            <tr className='table-dark'>
                              <th scope='row' key={i}>{book.title}</th>
                              <td>{book.author}</td>
                              <td>
                                <i
                                  className='fas fa-trash '
                                  style={{
                                    color: 'red',
                                    cursor: 'progress',
                                  }}></i>
                              </td>
                              <td>
                                <i
                                  className='far fa-edit'
                                  style={{
                                    color: 'yellow',
                                    cursor: 'progress',
                                  }}></i>
                              </td>
                            </tr>
                          </>
                        );
                      })}
                  </>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
};

export default Books;
