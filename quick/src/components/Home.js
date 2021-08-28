import React, { useEffect, useState } from 'react';
import ItemPicker from './subcomponents/ItemPicker';
import PageService from '../services/PageService';
import TablePaginate from './subcomponents/TablePaginate';

const columns = [
    {
        name: "Atleta",
        data: 'athlete',
        className: 'text-capitalize'
    },
    {
        name: "Edad",
        data: 'age',
        className: 'text-capitalize'
    },
    {
        name: "País",
        data: 'country',
        className: 'text-capitalize'
    },
    {
        name: "Fecha",
        data: 'date',
    },
    {
        name: "Deporte",
        data: 'sport',
        className: 'text-capitalize'
    },
    {
        name: "Oro",
        data: 'gold',
        className: 'text-capitalize'
    },
    {
        name: "Plata",
        data: 'silver',
        className: 'text-capitalize'
    },
    {
        name: "Bronce",
        data: 'bronze',
        className: 'text-capitalize'
    },    {
        name: "Total",
        data: 'total',
        className: 'text-capitalize'
    },
];
const itemsPerPage = 15;
function Home() {
    const [winners, setWinners] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    useEffect(() => {
        PageService.getWinners().then(setWinners);
    }, []);
    const changePage = (page) => {
        setCurrentPage(page);
    }
    return <div>
        {/* item picker */}
        <div className="container pt-2">
            <TablePaginate columns={columns} data={winners.slice((currentPage-1)*itemsPerPage, currentPage*itemsPerPage)} lastPagePaginator={Math.ceil(winners.length/itemsPerPage)} currentPage={currentPage} changePage={(e) => changePage(e)} />
        </div>

    </div>
}

export default Home;