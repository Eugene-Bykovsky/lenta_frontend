import styled from 'styled-components'

export const TableContainer = styled.div`
  width: 1758px;
  height: 878px;
`

export const ButtonRow = styled.button`
  padding: 0 12px;
  margin: 0 4px 0;
  border: none;
  min-width: 40px;
  height: 40px;
  font-family: var(--ff-primary);
  font-size: var(--fs-14);
  line-height: var(--line-height-16);

  button:hover {
    color: var(--color-white);
    background: var(--color-button-blue-1);
  }

  border-radius: 10px;
  cursor: pointer;
  transition:
    background 0.3s ease-in-out,
    color 0.3s ease-in-out;

  &:hover {
    color: var(--color-white);
    background: var(--color-button-blue-1);
  }
`

export const TableWrapper = styled.div`
  height: 705px;
  border: 1px solid black;
  box-shadow: var(--custom-box-shadow-table);
`

export const PaginationBox = styled.div`
  margin-top: 30px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: start;
  gap: 10px;

  input {
    width: 94px;
    height: 40px;
  }

  button:hover {
    color: var(--color-white);
    background: var(--color-button-blue-1);
  }
`

export const PageBtn = styled.button<{
  $specialColor?: boolean
}>`
  padding: 0 12px;
  margin: 0 4px 0;
  border: none;
  min-width: 40px;
  height: 40px;
  font-family: var(--ff-primary);
  font-size: var(--fs-14);
  line-height: var(--line-height-16);
  background: ${({ $specialColor }) =>
    $specialColor ? 'var(--color-button-blue-2)' : 'var(--color-grey-3)'};
  border-radius: 10px;
  cursor: pointer;
  transition:
    background 0.3s ease-in-out,
    color 0.3s ease-in-out;

  &:hover {
    color: var(--color-white);
    background: var(--color-button-blue-1);
  }
`

export const TableBox = styled.div`
  margin: auto;
  padding: 0;
  width: 1756px;
  height: 500px;

  overflow-x: auto;
  text-align: left;

  border-bottom: solid 1px black;
  box-shadow: var(--custom-box-shadow-table);

  table {
    width: 100%;

    border-collapse: collapse;
  }

  thead {
    height: 40px;
    background: var(--color-table-Gr);
  }

  tr:nth-child(even) {
    background: var(--color-table-Gr-light);
  }

  th,
  td {
    padding: 8px;
    min-width: 156px;
    max-width: 156px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  th:nth-child(1),
  td:nth-child(1) {
    min-width: 40px;
    max-width: 40px;
  }

  th:nth-child(10),
  td:nth-child(10) {
    min-width: 192px;
    max-width: 192px;
  }
`
