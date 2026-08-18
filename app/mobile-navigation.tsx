"use client";

import { usePathname } from "next/navigation";
import { FiMoreHorizontal } from "react-icons/fi";

import { brand, nav } from "./site-data";

const primaryMobileHrefs = new Set(["/", "/software", "/ecosistema", "/lead-generation", "/crm"]);
const mobilePrimaryNav = nav.filter((item) => primaryMobileHrefs.has(item.href));
const mobileSecondaryNav = nav.filter((item) => !primaryMobileHrefs.has(item.href));

function isActivePath(pathname: string, href: string) {
  if (href === "/") {
    return pathname === "/";
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}

export function MobileMenu() {
  const pathname = usePathname();

  return (
    <details className="mobile-menu">
      <summary aria-label="Altro">
        <FiMoreHorizontal aria-hidden="true" />
      </summary>
      <div>
        {mobileSecondaryNav.map((item) => (
          <a key={item.href} href={item.href} aria-current={isActivePath(pathname, item.href) ? "page" : undefined}>
            {item.label}
          </a>
        ))}
        <a className="mobile-menu-cta" href={`mailto:${brand.email}`}>
          Prenota una call
        </a>
      </div>
    </details>
  );
}

export function MobileTabBar() {
  const pathname = usePathname();

  return (
    <nav className="mobile-tabbar" aria-label="Navigazione mobile rapida">
      {mobilePrimaryNav.map((item) => (
        <a key={item.href} href={item.href} aria-current={isActivePath(pathname, item.href) ? "page" : undefined}>
          {item.label === "Lead Generation" ? "Lead" : item.label}
        </a>
      ))}
    </nav>
  );
}
