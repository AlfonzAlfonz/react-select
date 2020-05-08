import styled from "styled-components";

export const ContainerStyle = styled.div`
  position: relative;
  min-width: 200px;
  margin: 1rem 0;
  border-radius: 0.25rem;
  border: 1px solid transparent;

  :focus {
    outline: none;
    border-color: #ccc;
  }
`;

export const InputStyle = styled.div`
  border: 1px solid #ccc;
  border-radius: 0.2rem;
  padding: 0.4rem 0.6rem;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  font-size: 0.8rem;
  min-height: 1.2rem;
  align-items: center;
  user-select: none;
`;

export const IndicatorStyle = styled.div<{ open: boolean }>`
  transition: transform 500ms;
  transform: ${p =>
    !p.open ? "rotateZ(-45deg)" : "rotateZ(-225deg)"};
  transform-origin: 40% 60%;

  color: #ccc;

  ::after {
    content: "∟";
  }
`;

export const MenuStyle = styled.div`
  position: absolute;
  width: 100%;
  border: 1px solid #ccc;
  background: white;
  margin-top: 0.2rem;
  border-radius: 0.2rem;
  z-index: 99;
`;

export const ItemStyle = styled.div<{ selected?: boolean }>`
  padding: 0.4rem;
  cursor: pointer;
  background: ${p => (p.selected ? "rgba(0, 0, 0, 0.025)" : "transparent")};
  font-size: 0.8rem;

  :hover {
    background: rgba(0, 0, 0, 0.05);
  }
`;

export const GroupStyle = styled.div`
  display: flex;
`;

export const SelectedStyle = styled.div`
  border-radius: 0.1rem;
  padding: 0.1rem 0.2rem;
  margin-right: 0.4rem;
  background: rgba(0, 0, 0, 0.1);
`;
