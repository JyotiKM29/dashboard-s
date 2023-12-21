import React from "react";
// import { useTable } from 'react-table';
import { useAppData } from "../Data/data";
import { useTable, usePagination } from "react-table";

const Table = () => {
  const data = useAppData();

  const columns = React.useMemo(
    () => [
      {
        Header: "No",
        accessor: "no",
      },
      {
        Header: "App Name",
        accessor: "appName",
      },
      {
        Header: "Category",
        accessor: "category",
      },
      {
        Header: "Size",
        accessor: "size",
      },
      {
        Header: "Price",
        accessor: "price",
      },
      {
        Header: "Segmentation",
        accessor: "segmentation",
      },
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    pageOptions,
    state: { pageIndex, pageSize },
    previousPage,
    nextPage,
    canPreviousPage,
    canNextPage,
    setPageSize,
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0 },
    },
    usePagination
  );

  return (
    <div style={{ overflowX: "auto" }} className="p-8 pt-0 md:pl-16 h-screen">
      <table
        {...getTableProps()}
        style={{
          border: "1px solid black",
          width: "100%",
          minWidth: "600px",
        }}
      >
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th
                  {...column.getHeaderProps()}
                 
                  className="p-2 md:p-4 border bg-blue-200 border-blue-500 dark:bg-teal-200 dark:border-teal-500 text-blue-950 dark:text-teal-950"
                >
                  {column.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>

        <tbody {...getTableBodyProps()}>
          {page.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()} key={row.id}>
                {row.cells.map((cell) => (
                  <td
                    {...cell.getCellProps()}
                    className="p-1 md:p-3 pl-[2%] border bg-blue-50 border-blue-500 dark:bg-teal-50 dark:border-teal-500"
                  >
                    {cell.render("Cell")}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>

      <div className="flex justify-between my-4">
        <h5 className="dark:text-teal-500 text-blue-700  text-md md:text-xl cursor-pointer tracking-wide">
          Page{'  '}
          <span className="dark:text-teal-500 text-blue-700 font-bold text-md md:text-xl cursor-pointer">
            {pageIndex + 1}
          </span>
          {' '}of{' '}
          <span className="dark:text-teal-500 text-blue-700 font-bold text-md md:text-xl cursor-pointer">
            {pageOptions.length}
          </span>
        </h5>
        <div className="flex gap-4">
          <button
            onClick={() => previousPage()}
            disabled={!canPreviousPage}
            className="dark:text-teal-500 text-blue-700 font-bold text-md md:text-xl  cursor-pointer"
          >
            Prev
          </button>

          <button
            onClick={() => nextPage()}
            disabled={!canNextPage}
            className="dark:text-teal-500 text-blue-700 font-bold text-md md:text-xl  cursor-pointer"
          >
            Next
          </button>
          <select
            value={pageSize}
            onChange={(e) => setPageSize(Number(e.target.value))}
          >
            {[10, 15, 20].map((pageSize) => (
              <option key={pageSize} value={pageSize}>
                Show {pageSize}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default Table;
