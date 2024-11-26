import { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import TableList from '../pages';
import { getListShoterUrls, saveUrl, deleteUrl, getUrl } from '../services/UrlShorterService';
import { Container } from 'react-bootstrap';

function UrlShortenerMain() {
    const [listUrls, setListUrls] = useState([]);

    const MySwal = withReactContent(Swal);

    const openModalCreate = () => {
        MySwal.fire({
            title: "Url Shorter",
            input: "text",
            inputAttributes: {
                autocapitalize: "off"
            },
            showCancelButton: true,
            confirmButtonText: "Shorter",
            showLoaderOnConfirm: true,
            preConfirm: async (url) => {
                const response = await saveUrl({ 'original': url });

                return response;
            },
            allowOutsideClick: () => !Swal.isLoading()
        }).then((result) => {

            if (result.isConfirmed) {

                if (result.value.code === 201) {
                    Swal.fire({
                        title: 'Information',
                        text: "the url has been shortened correctly"
                    });
                } else {
                    Swal.fire({
                        title: 'Error',
                        text: "the url has not been shortened correctly. Reason: " + JSON.stringify(result.value.errors)
                    });
                }

                init();
            }
        });
    }

    const openModalDelete = (id: number) => {
        MySwal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const response:any = await deleteUrl(id);

                if (Object.prototype.hasOwnProperty.call(response, 'wasDeleted') && response.wasDeleted == 1) {
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your url has been deleted.",
                        icon: "success"
                    });
                    init();
                } else {
                    Swal.fire({
                        title: "Warning",
                        text: "The url cannot be deleted",
                        icon: "error"
                    });
                }
            }
        });
    }

    const init = async () => {
        const data = await getListShoterUrls();
        setListUrls(data);
    }

    useEffect(() => {
        init();
    }, []);


    return (
        <Container className="p-3">
            <div className='bg-light p-5 rounded mt-3'>
                <h1>Shortened URL's</h1>
                <br />
                <button
                    type='button'
                    className='btn btn-primary'
                    onClick={() => {
                        openModalCreate();
                    }}><i className="bi bi-plus-circle-fill"></i></button>
                <br />
                <hr></hr>
                <TableList data={listUrls} onClickDelete={openModalDelete} />
            </div>
        </Container>
    );
}

export default UrlShortenerMain;