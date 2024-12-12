import styled from "styled-components";

const PepiconsPrintPhoneOff = (props) => {
  return (
    <svg width={20} height={20} viewBox="0 0 20 20" {...props}>
      <g fill="currentColor">
        <path
          d="m12.439 11.774l.582-.582a3 3 0 0 1 4.243 0l1.414 1.415a3 3 0 0 1 0 4.242l-2.806 2.806a1 1 0 0 1-1.064.227C8.318 17.404 3.874 12.93 1.5 6.57a1 1 0 0 1 .23-1.057l2.806-2.806a3 3 0 0 1 4.242 0l1.414 1.414a3 3 0 0 1 0 4.243l-.58.58a31 31 0 0 0 2.827 2.83"
          opacity={0.3}
        ></path>
        <path
          fillRule="evenodd"
          d="m12.874 9.546l-.91.911A32 32 0 0 1 8.428 6.92l.91-.91a2.5 2.5 0 0 0 0-3.535L7.925 1.06a2.5 2.5 0 0 0-3.536 0L1.583 3.866a.5.5 0 0 0-.114.529c2.324 6.226 6.661 10.593 13.018 13.02a.5.5 0 0 0 .531-.114l2.806-2.805a2.5 2.5 0 0 0 0-3.536L16.41 9.546a2.5 2.5 0 0 0-3.536 0m4.243 2.121a1.5 1.5 0 0 1 0 2.122l-2.575 2.575c-5.821-2.306-9.811-6.32-12.023-12.02l2.577-2.576a1.5 1.5 0 0 1 2.122 0l1.414 1.414a1.5 1.5 0 0 1 0 2.121L7.398 6.537a.5.5 0 0 0-.032.673a32.7 32.7 0 0 0 4.307 4.31a.5.5 0 0 0 .673-.031l1.236-1.236a1.5 1.5 0 0 1 2.12 0z"
          clipRule="evenodd"
        ></path>
        <path d="M1.15 1.878a.514.514 0 0 1 .728-.727l16.971 16.971a.514.514 0 0 1-.727.727z"></path>
      </g>
    </svg>
  );
};

/**
 *
 * Styled components
 *
 */

export const NavbarContainer = styled.nav`
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px) {
    /* Mobile */
    margin: 10px;
  }
`;

export const NavbarContainerUl = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;

  li:first-child {
    border-radius: 5px 5px 0 0;
    border-bottom: 2px solid #5a5a5a;
    background-color: #dcdcdca6;
  }

  &:has(li:hover) li:first-child {
    border-bottom: 2px solid #f5f5f5;
    background-color: #f5f5f5;
  }

  &:has(li:hover) li:first-child:hover {
    border-radius: 5px 5px 0 0;
    border-bottom: 2px solid #5a5a5a;
    background-color: #dcdcdca6;
  }

  li:hover {
    transition: color 0.3s ease;
    border-radius: 5px 5px 0 0;
    border-bottom: 2px solid #5a5a5a;
    background-color: #dcdcdca6;
  }

  @media (max-width: 768px) {
    /* Mobile */
    align-items: center;
    justify-content: center;
  }
`;

export const NavbarLine = styled.li`
  list-style: none;
  padding: 5px 2px;

  @media (max-width: 768px) {
    /* Mobile */
    padding: 5px 0px;
`;

export const NavbarLink = styled.a`
  color: #5a5a5a;
  text-decoration: none;
  padding: 1rem;
  font-size: 1.1rem;

  @media (max-width: 768px) {
    /* Mobile */
    padding: 0.7rem;
    font-size: 1rem;
  }
`;

export const BrandTitle = styled.h1`
  color: #5a5a5a;
  font-size: 1.8rem;
  text-align: center;
  user-select: none;

  @media (max-width: 768px) {
    /* Mobile */
    font-size: 1.6rem;
    padding: 5px;
    margin: 0;
  }
`;

export const StyIcon = styled(PepiconsPrintPhoneOff)`
  color: #444;
  margin-right: 8px;
  rotate: 20deg;
  width: 28px;
  height: 28px;

  @media (max-width: 768px) {
    /* Mobile */
    margin-right: 4px;
    width: 20px;
    height: 20px;
  }
`;
