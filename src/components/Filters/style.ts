import styled from 'styled-components';

export const FilterContainer = styled.div`
  width: 296px;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const FilterContainerLabel = styled.div`
  font-size: 13px;
  color: ${({ theme }) => theme.gray};
`;

export const FilterContainerContent = styled.div`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  padding: 1rem 2rem;
  gap: 10px;
`;