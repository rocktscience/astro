import React from "react";
import { Helmet } from "react-helmet-async";
import { useTable, useSortBy } from "react-table";

import { Card, Container, Table } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSort,
  faSortUp,
  faSortDown,
} from "@fortawesome/free-solid-svg-icons";

import { tableData, tableColumns } from "./data.js";

const ColumnSortingTable = ({ columns, data }) => {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable(
      {
        columns,
        data,
      },
      useSortBy
    );

  return (
    <Card>
      <Card.Header>
        <Card.Title>Column Sorting</Card.Title>
        <h6 className="card-subtitle text-muted">
          Column sorting by react-table
        </h6>
      </Card.Header>
      <Card.Body>
        <Table striped bordered {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup) => {
              const { key, ...headerGroupProps } =
                headerGroup.getHeaderGroupProps();

              return (
                <tr key={key} {...headerGroupProps}>
                  {headerGroup.headers.map((column) => {
                    const { key, ...headerProps } = column.getHeaderProps(
                      column.getSortByToggleProps()
                    );
                    // Add the sorting props to control sorting. For this example
                    // we can add them into the header props
                    return (
                      <th key={key} {...headerProps} style={column.style}>
                        {column.render("Header")}
                        {/* Add a sort direction indicator */}
                        <span>
                          {column.isSorted ? (
                            column.isSortedDesc ? (
                              <FontAwesomeIcon
                                icon={faSortUp}
                                className="ms-2"
                              />
                            ) : (
                              <FontAwesomeIcon
                                icon={faSortDown}
                                className="ms-2"
                              />
                            )
                          ) : (
                            <FontAwesomeIcon icon={faSort} className="ms-2" />
                          )}
                        </span>
                      </th>
                    );
                  })}
                </tr>
              );
            })}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row, i) => {
              prepareRow(row);
              const { key, ...rowProps } = row.getRowProps();
              return (
                <tr key={key} {...rowProps}>
                  {row.cells.map((cell) => {
                    const { key, ...cellProps } = cell.getCellProps();
                    return (
                      <td key={key} {...cellProps}>
                        {cell.render("Cell")}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  );
};

const ColumnSorting = () => (
  <React.Fragment>
    <Helmet title="Column Sorting" />
    <Container fluid className="p-0">
      <h1 className="h3 mb-3">Column Sorting</h1>

      <ColumnSortingTable
        columns={tableColumns}
        data={tableData.slice(0, 15)}
      />
    </Container>
  </React.Fragment>
);

export default ColumnSorting;
