import { FilterInput, FilterContainer } from './Filter.styled';

export const Filter = ({ filterColumns }) => {
    return (
        <FilterContainer>
            <FilterInput placeholder='Search available columns...' type="text" onChange={filterColumns} />
        </FilterContainer>
    )
}