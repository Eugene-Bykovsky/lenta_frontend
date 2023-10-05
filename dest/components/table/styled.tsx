import styled from 'styled-components'

export const TableBox = styled.div`
  margin: auto;
  padding: 0;
  width: 1756px;
  height: 500px;
  overflow-x: auto;

  border: solid 1px black;
  border-radius: 8px;
  box-shadow: var(--custom-box-shadow-table);

  table {
    width: 100%;
    border-collapse: collapse;
  }

  thead {
    height: 40px;
    text-align: left;
    background: var(--color-table-Gr);
  }

  // Заголовок столбца - table header cell
  th {
    padding: 8px;
    max-width: 192px;
  }

  // Установка ширины первой колонки
  th:first-child {
    width: 36px;
  }

  // Определение строки в столбце
  tr:nth-child(even) {
    background: var(--color-table-Gr-light);
  }

  // Ячейки с данными - table data cell / или колонка
  td {
    padding: 8px;
    max-width: 192px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`
