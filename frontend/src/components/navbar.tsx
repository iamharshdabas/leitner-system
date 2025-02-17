import { Link } from "@heroui/link";
import {
  Navbar as HeroUINavbar,
  NavbarBrand,
  NavbarContent,
} from "@heroui/navbar";

import { ThemeSwitch } from "./theme-switch";

import { text } from "@/config/custom-styles";
import { siteConfig, siteHref } from "@/config/site";

export const Navbar = ({}) => {
  return (
    <HeroUINavbar maxWidth="xl" position="sticky">
      <NavbarContent>
        <NavbarBrand>
          <Link color="foreground" href={siteHref.home}>
            <p
              className={text({
                size: "xs",
                wide: true,
                bold: true,
                class: "font-mono",
              })}
            >
              {siteConfig.name}
            </p>
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent justify="end">
        <ThemeSwitch />
      </NavbarContent>
    </HeroUINavbar>
  );
};
