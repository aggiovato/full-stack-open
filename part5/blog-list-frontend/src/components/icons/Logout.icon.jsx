const LogoutIcon = (props) => {
  return (
    <svg width={30} height={30} viewBox="0 0 30 30" {...props}>
      <defs>
        <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
          <feDropShadow
            dx="0"
            dy="0"
            stdDeviation="1.5"
            floodColor="#000000"
            floodOpacity="0.2"
          />
        </filter>
      </defs>
      <g filter="url(#shadow)">
        <path
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13.496 21H6.5c-1.105 0-2-1.151-2-2.571V5.57c0-1.419.895-2.57
            2-2.57h7"
        ></path>
        <g className="arrow">
          <path
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M16 15.5l3.5-3.5L16 8.5m-6.5 3.496h10"
          ></path>
        </g>
      </g>
    </svg>
  );
};

export default LogoutIcon;
