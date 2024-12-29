import styled from "styled-components";

export const ViewIcon = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={20}
      height={20}
      viewBox="0 -5 25 25"
      {...props}
    >
      <g
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        color="currentColor"
      >
        <path d="M21.544 11.045c.304.426.456.64.456.955c0 .316-.152.529-.456.955C20.178 14.871 16.689 19 12 19c-4.69 0-8.178-4.13-9.544-6.045C2.152 12.529 2 12.315 2 12c0-.316.152-.529.456-.955C3.822 9.129 7.311 5 12 5c4.69 0 8.178 4.13 9.544 6.045"></path>
        <path d="M15 12a3 3 0 1 0-6 0a3 3 0 0 0 6 0"></path>
      </g>
    </svg>
  );
};

export const HideIcon = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={19.5}
      height={19.5}
      viewBox="0 -6 34 34"
      {...props}
    >
      <path
        fill="currentColor"
        d="m5.24 22.51l1.43-1.42A14.06 14.06 0 0 1 3.07 16C5.1 10.93 10.7 7 16 7a12.4 12.4 0 0 1 4 .72l1.55-1.56A14.7 14.7 0 0 0 16 5A16.69 16.69 0 0 0 1.06 15.66a1 1 0 0 0 0 .68a16 16 0 0 0 4.18 6.17"
      ></path>
      <path
        fill="currentColor"
        d="M12 15.73a4 4 0 0 1 3.7-3.7l1.81-1.82a6 6 0 0 0-7.33 7.33zm18.94-.07a16.4 16.4 0 0 0-5.74-7.44L30 3.41L28.59 2L2 28.59L3.41 30l5.1-5.1A15.3 15.3 0 0 0 16 27a16.69 16.69 0 0 0 14.94-10.66a1 1 0 0 0 0-.68M20 16a4 4 0 0 1-6 3.44L19.44 14a4 4 0 0 1 .56 2m-4 9a13.05 13.05 0 0 1-6-1.58l2.54-2.54a6 6 0 0 0 8.35-8.35l2.87-2.87A14.54 14.54 0 0 1 28.93 16C26.9 21.07 21.3 25 16 25"
      ></path>
    </svg>
  );
};

export const BlogContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;
  padding: 10px;
  border: 2px solid #16423c;
  border-radius: 8px;
  background-color: #e9efec;
  color: #16423c;
`;

export const BlogTitle = styled.div`
  font-weight: bold;
  font-size: 18px;
`;

export const ShowHideButton = styled.button`
  border: none;
  padding: 0;
  margin: 0;
  margin-left: 10px;
  background-color: transparent;

  &:hover {
    cursor: pointer;
  }
`;
