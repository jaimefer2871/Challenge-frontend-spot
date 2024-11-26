import {
    Table,
} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';


interface dataResponse {
    id?: number,
    original?: string,
    shortened?: string,
    created_at?: string,
    updated_at?: string
}

function TableList({ data, onClickDelete }: { data: Array<dataResponse>, onClickDelete: CallableFunction }) {
    const navigate = useNavigate();

    return (
        <Table bordered hover>
            <thead>
                <tr className='text-center table-primary'>
                    <th>Id</th>
                    <th>Code</th>
                    <th>Original Url</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    data.length === 0 ?
                        <tr>
                            <td colSpan={4} className="text-center">
                                <div className="alert alert-info" role="alert">
                                    Lista Vacia
                                </div>
                            </td>
                        </tr> : data.map((item) => {
                            return (
                                <tr className='text-center' key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.shortened}</td>
                                    <td>{item.original}</td>
                                    <td>
                                        <div className="btn-group" role="group">
                                            <button type="button" className="btn btn-primary btn-sm" onClick={() => {
                                                navigate(`/${item.shortened}`)
                                            }}><i className="bi bi-arrow-up-right-circle"></i></button>
                                            <button type="button" className="btn btn-danger btn-sm" onClick={() => {
                                                onClickDelete(item.id)
                                            }}><i className="bi bi-trash"></i></button>
                                        </div>
                                    </td>
                                </tr>
                            );
                        })
                }
            </tbody>
        </Table>
    );
}

export default TableList;