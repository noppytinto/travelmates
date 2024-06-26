import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import "./globals.scss";
import styles from "./layout.module.scss";
import Link from "next/link";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faInfo } from "@fortawesome/free-solid-svg-icons";
import { Providers } from "./providers";

const font = Poppins({ subsets: ["latin"], weight: ["400", "600"] });

export const metadata: Metadata = {
  title: "Travelmates",
  description: "Travelmates - your companion travel app",
  appleWebApp: {
    title: "Travelmates",
    capable: true,
    statusBarStyle: "black-translucent",
  },
  other: {
    "mobile-web-app-capable": "yes",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  // userScalable: false,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light">
      <body className={font.className}>
        <Providers>
          {children}

          {/*<nav className={styles.navigation}>*/}
          {/*  <ul className={styles.navigation__items}>*/}
          {/*    <li className={styles.navigation__item}>*/}
          {/*      <Link href="/" className={styles.navigation__link}>*/}
          {/*        <FontAwesomeIcon icon={faHome} />*/}
          {/*      </Link>*/}
          {/*    </li>*/}
          {/*    <li className={styles.navigation__item}>*/}
          {/*      <Link href="/about" className={styles.navigation__link}>*/}
          {/*        <FontAwesomeIcon icon={faInfo} />*/}
          {/*      </Link>*/}
          {/*    </li>*/}
          {/*  </ul>*/}
          {/*</nav>*/}
        </Providers>
      </body>
    </html>
  );
}
