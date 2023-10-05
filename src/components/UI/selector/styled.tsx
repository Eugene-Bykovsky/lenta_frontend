import styled from 'styled-components'
export const CustomSelectWrapper = styled.div`
  position: relative;
  width: 528px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 20px;
`
export const SelectWrapper = styled.div`
  position: relative;
  width: 304px;
`

export const SelectButton = styled.button<{ isDefault: boolean }>`
  width: 304px;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  font-family: var(--ff-primary);
  font-size: var(--fs-16);

  color: ${({ isDefault }) => (isDefault ? '#898997' : '#111111')};
  background: var(--color-white);
  border: 1px solid #898997;
  border-radius: 8px;
  text-align: left;
`

export const Dropdown = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  width: 304px;
  max-height: 200px;

  overflow-y: auto;
  box-shadow: var(--custom-box-shadow);
  background: var(--color-white);
  border: 1px solid #898997;
  border-radius: 8px;
  list-style: none;
  padding: 0;
  margin: 0;
  z-index: 1;
`

export const DropdownItem = styled.li`
  padding: 10px;

  cursor: pointer;
  transition:
    background 0.3s ease-in-out,
    color 0.3s ease-in-out;

  &:hover {
    background: #f0f0f0;
  }

  &.selected {
    //
  }
`

export const Checkmark = styled.span`
  margin-left: 20px;
`

export const LabelText = styled.p`
  padding-top: 10px;
  font-weight: var(--fw-400);
  font-size: var(--fs-16);
  line-height: var(--line-height-19);
  color: var(--color-black);
`
