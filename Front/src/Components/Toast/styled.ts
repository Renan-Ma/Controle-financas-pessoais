import styled from "styled-components";

export const Container = styled.div<{ type: "success" | "error" }>`
  position: fixed;
  bottom: 24px;
  right: 24px;
  padding: 14px 24px;
  border-radius: 6px;
  color: #fff;
  font-size: 14px;
  z-index: 2000;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  background-color: ${(props) => (props.type === "success" ? "#27ae60" : "#e74c3c")};
`;
