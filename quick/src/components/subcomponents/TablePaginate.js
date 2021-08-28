import React from 'react';
import '../../styles/tablePaginate.css';
import { formatDate } from '../../utils/Utils';

const types = {
    date: 'date',
    number: 'number',
}

function TablePaginate({ data, columns, lastPagePaginator, currentPage, changePage, onClickRow }) {
    function parse(string, type) {
        if (type) {
            if (type == types.date) {
                return formatDate(string);
            }
            if (type == types.date) {
                let date = new Date(string);
                return `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;
            }
        }
        return string;
    }
    function getFive(page) {
        let tempArray = [...Array(lastPagePaginator).keys()];
        if (lastPagePaginator <= 9) return tempArray;
        else if (page <= 5)
            return tempArray.slice(0, 9);
        else if (page >= lastPagePaginator - 5)
            return tempArray.slice(-9);
        else return tempArray.slice(currentPage - 4, currentPage+4);

    }
    return <div className="row">
        <div className="col-12 overflow-auto">
            <table className="table py-4 table-hover">
                <thead>
                    <tr>
                        {columns.map((column, index) => <th scope="col" key={index}>{column.name}</th>)}
                    </tr>
                </thead>
                <tbody>
                    {data.map((row, index) => <tr key={index} onClick={() => onClickRow(row)}>
                        {columns.map((column, index) => <td key={index} className={column.className}>
                            {parse(column.key_name ? (column.key_name + row[column.data]) : row[column.data], column.type, column.translateIt)}
                        </td>)}
                    </tr>)}
                </tbody>
            </table>
        </div>
        <div className="d-flex justify-content-center w-100">
            {lastPagePaginator > 1 ? <div className="paginator mb-5 mt-3">
                <div className={"optionPaginator" + (currentPage == 1 ? " disabled" : "")} onClick={() =>
                    changePage(1)}><i className="material-icons">arrow_back_ios</i></div>
                {getFive(currentPage).map((e, index) => <div key={index} className={"optionPaginator" + (currentPage == e + 1 ? " active" : "")} onClick={() => changePage( e+ 1)}>{e + 1}</div>)}
                <div className={"optionPaginator" + (currentPage == lastPagePaginator ? " disabled" : "")} onClick={() => changePage(lastPagePaginator)}><i className="material-icons">arrow_forward_ios</i></div>
            </div> : ''}
        </div>
    </div>
}

export default TablePaginate;