import React, { ReactNode, useState } from "react";
import styles from "./layout.module.scss";
import "../styles/reset.scss";
import Link from "next/link";

import Image from "next/image";
import Head from "next/head";

type LayoutProps = {
  children: ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <div className={styles.container}>
      <Head>
        <title>MeloBeat</title>
      </Head>
      <div
        className={`${styles.verticalNav} ${
          isMenuOpen ? styles.verticalNavExpanded : ""
        }`}
      >
        <div className={styles.container_menu_profil}>
          <div
            className={styles.menu}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Image src="/image/Menu.png" alt="Menu" width={20} height={20} />
          </div>
          <div className={styles.profil}>
            <Image src="/image/user.png" alt="Profil" width={40} height={40} />
          </div>
        </div>
        <div className={styles.links}>
          <Link href="/">
            <>
              <Image src="/image/Home.png" alt="Home" width={30} height={30} />
              {isMenuOpen && <span>Home</span>}
            </>
          </Link>
          <Link href="/recherche/Recherche">
            <>
              <Image
                src="/image/Search.png"
                alt="Search"
                width={30}
                height={30}
              />
              {isMenuOpen && <span>Search</span>}
            </>
          </Link>
          <Link href="/coeur/Coeur">
            <>
              <Image
                src="/image/Heart.png"
                alt="Heart"
                width={30}
                height={30}
              />
              {isMenuOpen && <span>Heart</span>}
            </>
          </Link>
          <Link href="/like/Like">
            <>
              <Image
                src="/image/pouce.png"
                alt="pouce"
                width={30}
                height={30}
              />
              {isMenuOpen && <span>Pouce</span>}
            </>
          </Link>
        </div>
      </div>
      <div className={styles.topContainer}>
        <div className={styles.topNav}>
          <div className={styles.logo}>
            <Image src="/image/logo.png" alt="logo" width={30} height={30} />
            <p>MeloBeat</p>
          </div>

          <div className={styles.Shutdown}>
            <div className={styles.container_insc_con}>
              <Link href="/inscription/Inscription">
                <p>Insciption</p>
              </Link>
              <Link href="/connexion/Connexion">
                <p>Connexion</p>
              </Link>
            </div>
            <Image
              src="/image/Shutdown.png"
              alt="Shutdown.png"
              width={30}
              height={30}
            />
          </div>
        </div>
        <main className={styles.content}>
          {children} {/* Contenu principal à charger */}
        </main>
      </div>
    </div>
  );
};
export default Layout;
