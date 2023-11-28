import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import checkedIcon from "../../assets/images/common/check.svg";

const StyledLabel = styled.label`
  position: relative;
  display: flex;
  user-select: none;
  align-items: center;

  p {
    color: #999;
    font-size: 1.2rem;
    font-weight: 400;
    line-height: 1.2rem;
    letter-spacing: -0.024rem;
  }

  // 체크하기 전 스타일
  &:before {
    content: "";
    width: 2rem;
    height: 2rem;
    border: 1px solid #bbb;
    background: #fff;
    border-radius: 0.4rem;
  }

  /* 체크하고 난 후 스타일 */
  &:after {
    opacity: 0;
    content: "";
    position: absolute;

    width: 2rem;
    height: 2rem;
    border: 1px solid #bbb;
    background: #fff;
    border-radius: 0.4rem;

    border-color: transparent;
    background-size: 100% 100%;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url(${checkedIcon});
    background-color: #333;
  }
`;

const StyledInput = styled.input`
  position: absolute;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  white-space: nowrap;
  width: 1px;

  /* INPUT이 체크 상태일 때 after영역 보이도록 */
  &:checked + ${StyledLabel} {
    &:after {
      opacity: 1;
    }
    p {
      color: #333;
    }
  }
`;

const StyledP = styled.p`
  margin-left: 0.4rem;
`;

export default function Checkbox({ checkName, copy }) {
  return (
    <>
      <StyledInput
        type="checkbox"
        id={checkName}
        name={checkName}
        onClick={(e) => {}}
      />
      <StyledLabel htmlFor={checkName}>
        {copy !== "" ? (
          <>
            <StyledP>{copy}</StyledP>
          </>
        ) : (
          <></>
        )}
      </StyledLabel>
      {copy !== "" ? (
        <></>
      ) : (
        <>
          <StyledP>{copy}</StyledP>
        </>
      )}
    </>
  );
}
