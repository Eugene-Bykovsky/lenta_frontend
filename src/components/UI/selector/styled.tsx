import styled from 'styled-components'

export const SelectorBox = styled.div`
  width: 528px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 20px;

  label {
    padding-top: 10px;
    font-weight: var(--fw-400);
    font-size: var(--fs-16);
    line-height: var(--line-height-19);
    color: var(--color-black);
  }

  select {
    appearance: none;
    width: 304px;
    height: 56px;

    font-weight: var(--fw-300);
    font-size: var(--fs-16);
    line-height: var(--line-height-19);
    color: var(--color-grey-2);
    border: 1px solid black;
    border-radius: 8px;
    padding: 10px; /* Добавляем немного внутреннего отступа */

    /* Преобразовываем компонент Arrow в URL */
    background: url('data:image/svg+xml;base64,' + btoa(
          new XMLSerializer() .serializeToString(<Arrow / >)
        ))
      no-repeat right center;
    background-size: 20px; /* Размер изображения */
  }
`
