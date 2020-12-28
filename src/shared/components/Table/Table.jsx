import React from 'react';
import style from './Table.module.scss';

const Table = props => {
  const { list, children } = props;
  const heads = Object.keys(list[0]);
  const headsElem = heads.map(head => (
    <th className={style.tableHead}>{head}</th>
  ));
  let additionHeads = null;
  let additionCells = null;
  if (Array.isArray(children)) {
    additionHeads = children.map(child => (
      <th className={style.tableHead}>{child.props.children}</th>
    ));
    additionCells = children.map(child => (
      <td className={style.tableCell}>{child}</td>
    ));
  } else {
    additionHeads = (
      <td className={style.tableHead}>{children.props.children}</td>
    );
    additionCells = <td className={style.tableCell}>{children}</td>;
  }

  const tableElems = list.map(item => {
    const rowElems = Object.values(item);
    const cells = rowElems.map(cell => (
      <td className={style.tableCell}>{cell}</td>
    ));
    return (
      <tr className={style.tableRow}>
        {cells}
        {additionCells}
      </tr>
    );
  });

  return (
    <table className={style.table}>
      <thead className={style.tableRow}>
        <tr>
          {headsElem}
          {additionHeads}
        </tr>
      </thead>
      <tbody>{tableElems}</tbody>
    </table>
  );
};

export default Table;
