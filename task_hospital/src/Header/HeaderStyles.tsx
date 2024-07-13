// styles.ts
import styled from "@emotion/styled";

export const HeaderContainer = styled.header`
  background-color: #2c3e50;
  color: white;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  right: 10px;
  z-index: 1000;
`;

export const HeaderTitle = styled.h1`
  margin: 0;
  font-size: 24px;
`;

export const PopoverContainer = styled.div<{ visible: boolean }>`
  position: absolute;
  top: 40px;
  right: 30px;
  background: white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  display: ${(props) => (props.visible ? "block" : "none")};
`;

export const PopoverItem = styled.div`
  padding: 10px 20px;
  cursor: pointer;
  color: black;
  &:hover {
    background: #f0f0f0;
  }
`;

export const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-right: 40px;
  gap: 25px;
  position: relative;
`;

export const IconWithDropdown = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;

  span {
    margin-left: 5px;
    font-size: 15px;
  }
`;

export const DropdownMenu = styled.div`
  position: absolute;
  top: 100%;
  right: 90px;
  background-color: #fff;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  width: 100%;
`;

export const DropdownMenuItem = styled.div`
  padding: 10px;
  cursor: pointer;
  color: black;
  &:hover {
    background-color: #f0f0f0;
  }
`;
