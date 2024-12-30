import styled from "styled-components";

export const ViewIcon = (props) => {
  return (
    <svg width={20} height={20} viewBox="0 -5 25 25" {...props}>
      <g
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        color="#444"
      >
        <path d="M21.544 11.045c.304.426.456.64.456.955c0 .316-.152.529-.456.955C20.178 14.871 16.689 19 12 19c-4.69 0-8.178-4.13-9.544-6.045C2.152 12.529 2 12.315 2 12c0-.316.152-.529.456-.955C3.822 9.129 7.311 5 12 5c4.69 0 8.178 4.13 9.544 6.045"></path>
        <path d="M15 12a3 3 0 1 0-6 0a3 3 0 0 0 6 0"></path>
      </g>
    </svg>
  );
};

export const HideIcon = (props) => {
  return (
    <svg width={19.5} height={19.5} viewBox="0 -6 34 34" {...props}>
      <path
        fill="#444"
        d="m5.24 22.51l1.43-1.42A14.06 14.06 0 0 1 3.07 16C5.1 10.93 10.7 7 16 7a12.4 12.4 0 0 1 4 .72l1.55-1.56A14.7 14.7 0 0 0 16 5A16.69 16.69 0 0 0 1.06 15.66a1 1 0 0 0 0 .68a16 16 0 0 0 4.18 6.17"
        opacity={0.5}
      ></path>
      <path
        fill="#444"
        d="M12 15.73a4 4 0 0 1 3.7-3.7l1.81-1.82a6 6 0 0 0-7.33 7.33zm18.94-.07a16.4 16.4 0 0 0-5.74-7.44L30 3.41L28.59 2L2 28.59L3.41 30l5.1-5.1A15.3 15.3 0 0 0 16 27a16.69 16.69 0 0 0 14.94-10.66a1 1 0 0 0 0-.68M20 16a4 4 0 0 1-6 3.44L19.44 14a4 4 0 0 1 .56 2m-4 9a13.05 13.05 0 0 1-6-1.58l2.54-2.54a6 6 0 0 0 8.35-8.35l2.87-2.87A14.54 14.54 0 0 1 28.93 16C26.9 21.07 21.3 25 16 25"
      ></path>
    </svg>
  );
};

export const LikeIcon = (props) => {
  return (
    <svg width={20} height={20} viewBox="0 0 24 24" {...props}>
      <path
        fill="#444"
        d="m20.975 12.185l-.739-.128zm-.705 4.08l-.74-.128zM6.938 20.477l-.747.065zm-.812-9.393l.747-.064zm7.869-5.863l.74.122zm-.663 4.045l.74.121zm-6.634.411l-.49-.568zm1.439-1.24l.49.569zm2.381-3.653l-.726-.189zm.476-1.834l.726.188zm1.674-.886l-.23.714zm.145.047l.229-.714zM9.862 6.463l.662.353zm4.043-3.215l-.726.188zm-2.23-1.116l-.326-.675zm8.561 9.925l-.705 4.08l1.478.256l.705-4.08zm-6.991 9.193H8.596v1.5h4.649zm-5.56-.837l-.812-9.393l-1.495.129l.813 9.393zm11.846-4.276c-.507 2.93-3.15 5.113-6.286 5.113v1.5c3.826 0 7.126-2.669 7.764-6.357zM13.255 5.1l-.663 4.045l1.48.242l.663-4.044zm-6.067 5.146l1.438-1.24l-.979-1.136L6.21 9.11zm4.056-5.274l.476-1.834l-1.452-.376l-.476 1.833zm1.194-2.194l.145.047l.459-1.428l-.145-.047zm-1.915 4.038a8.4 8.4 0 0 0 .721-1.844l-1.452-.377A7 7 0 0 1 9.2 6.11zm2.06-3.991a.89.89 0 0 1 .596.61l1.452-.376a2.38 2.38 0 0 0-1.59-1.662zm-.863.313a.51.51 0 0 1 .28-.33l-.651-1.351c-.532.256-.932.73-1.081 1.305zm.28-.33a.6.6 0 0 1 .438-.03l.459-1.428a2.1 2.1 0 0 0-1.548.107zm2.154 8.176h5.18v-1.5h-5.18zm.581-5.641a5.5 5.5 0 0 0-.104-2.284l-1.452.377a4 4 0 0 1 .076 1.664zM8.596 21.25a.916.916 0 0 1-.911-.837l-1.494.129a2.416 2.416 0 0 0 2.405 2.208zm.03-12.244c.68-.586 1.413-1.283 1.898-2.19L9.2 6.109c-.346.649-.898 1.196-1.553 1.76zm13.088 3.307a2.416 2.416 0 0 0-2.38-2.829v1.5c.567 0 1 .512.902 1.073zm-9.122-3.168a1.583 1.583 0 0 0 1.562 1.84v-1.5a.083.083 0 0 1-.082-.098zm-5.72 1.875a.92.92 0 0 1 .316-.774l-.98-1.137a2.42 2.42 0 0 0-.83 2.04z"
      ></path>
      <path
        fill="#444"
        d="m3.972 21.47l-.748.066zM3 10.235l.747-.064a.75.75 0 0 0-1.497.064zm1.719 11.172L3.747 10.17l-1.494.129l.971 11.237zm-.969.107v-11.28h-1.5v11.279zm-.526.022a.263.263 0 0 1 .263-.285v1.5c.726 0 1.294-.622 1.232-1.344zm.263-.285c.146 0 .263.119.263.263h-1.5c0 .682.553 1.237 1.237 1.237z"
        opacity={0.5}
      ></path>
    </svg>
  );
};

export const BlogContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 10px;
  padding: 10px;
  border: 2px solid #444;
  border-radius: 8px;
  background-color: #f3f3f3;
  color: #444;

  .title {
    display: flex;
    align-items: center;
    gap: 6px;
    font-weight: bold;
    font-size: 19px;
  }

  .view-hide {
    font-size: 10px;
    font-weight: lighter;
    color: #f5f5f5;
    margin-top: 4px;
    padding: 3px 10px;
    background-color: #666;
    border-radius: 5px;
  }

  .url {
    color: #444;
    text-decoration: none;
  }

  .url:hover {
    color: #666;
    text-decoration: underline;
  }

  .author {
    font-style: italic;
    font-weight: bold;
  }

  .small {
    font-style: italic;
    font-size: 13px;
    color: #666;
  }

  .likes {
    display: flex;
    align-items: center;
    gap: 5px;
  }
`;

export const StyButton = styled.button`
  border: none;
  padding: 0;
  margin: 0;
  margin-left: 10px;
  background-color: transparent;

  &:hover {
    cursor: pointer;
  }
`;
