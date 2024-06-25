import React from 'react'
import { Link } from 'react-router-dom'
import { Sidebar } from './Sidebar'
export const FavoriteCourses = () => {
  return (
   < div className='container mt-4'>
    <div className='row'>
        <aside className='col-md-3 '>
       <Sidebar/>
        </aside>
        <section className='col-md-9'>
        <div className='card mt-4'>
                    <h5 className='card-header'>Favourite courses</h5>
                    <div className='card-body'>
                        <table className='table table-bordered'>
                            <thead ><tr>
                                <th>Name</th>
                                <th>created by</th>
                                <th>action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <td>Php deve</td>
                                <td><Link to=''> created</Link></td>
                                <td>
                                    <button className='btn btn-danger btn-sm active '> DELETE</button>
                                </td>
                            </tbody>
                        </table>
                    </div>
                </div>
                </section>
    </div>
</div>
  )
}

