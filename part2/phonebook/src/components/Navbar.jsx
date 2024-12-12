// STYLES
import {
  BrandTitle,
  StyIcon,
  NavbarContainer,
  NavbarContainerUl,
  NavbarLine,
  NavbarLink,
} from "@styles/Navbar.styles.jsx";

/************************************************************************ */

// COMPONENT

const Navbar = () => {
  return (
    <NavbarContainer>
      <BrandTitle>
        <StyIcon />
        Phonebook
      </BrandTitle>
      <nav>
        <NavbarContainerUl>
          <NavbarLine>
            <NavbarLink href="/">Home</NavbarLink>
          </NavbarLine>
          <NavbarLine>
            <NavbarLink href="/info">Info</NavbarLink>
          </NavbarLine>
          <NavbarLine>
            <NavbarLink href="/api">Api</NavbarLink>
          </NavbarLine>
        </NavbarContainerUl>
      </nav>
    </NavbarContainer>
  );
};

export default Navbar;
