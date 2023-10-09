import { FC } from 'react'
import { setDays } from '../../features/filters/filtersSlice'
import {
  ButtonBox,
  FilterBlock,
  Selectors,
} from '../../features/table-forecast/styled'
import { useAppDispatch } from '../../hooks'
import { TSelectorsConfig } from '../../services/types'
import { ButtonRemoveFilters, ButtonSearch } from '../UI/button/ButtonUI'
import CustomSelect from '../UI/selector/CustomSelect'

const FilterBox: FC<{ selectors: TSelectorsConfig; text: string }> = ({
  selectors,
  text,
}) => {
  const dispatch = useAppDispatch()

  const handleSelect = (
    name: string,
    selected: string,
    selectedIndex: number,
    id?: string
  ) => {
    id === 'day' && dispatch(setDays(selectedIndex + 1))
  }

  return (
    <FilterBlock>
      <Selectors text={text}>
        {selectors.map((item) => (
          <CustomSelect
            id={item.id}
            key={item.name}
            name={item.name}
            options={item.options}
            onSelect={(selected, selectedIndex) =>
              handleSelect(item.name, selected, selectedIndex, item.id)
            }
          />
        ))}
        <ButtonBox>
          <ButtonSearch />
          <ButtonRemoveFilters />
        </ButtonBox>
      </Selectors>
    </FilterBlock>
  )
}

export { FilterBox }
