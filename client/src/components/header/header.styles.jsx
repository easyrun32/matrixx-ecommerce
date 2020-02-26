import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
`;
// apply to a <Link /> component
export const LogoContainer = styled(Link)`
  display: flex;
  align-items: center;
  height: 100%;
  width: 20px;
`;

export const OptionContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
//share styles <Link classname="option"/>
// and <div classname='option'></div>
export const OptionLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
`;
