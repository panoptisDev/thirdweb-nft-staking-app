import type { NextPage } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const router = useRouter();

  return (
    <div className={styles.container}>
      {/* Top Section */}
      <h1 className={styles.h1}>Staking Vault</h1>
      <div className={styles.nftBoxGrid}>
        <div
          className={styles.optionSelectBox}
          role="button"
          onClick={() => router.push(`/mint`)}
        >
          {/* Mint a new NFT */}
          <Image src="/icons/simp192x192.png" alt="drop" width={64} height={64} />
          <h2 className={styles.selectBoxTitle}>Mint a new Shrimp NFT</h2>
          <p className={styles.selectBoxDescription}>
            Come on in and claim a Shrimp from the collection.
          </p>
        </div>

        <div
          className={styles.optionSelectBox}
          role="button"
          onClick={() => router.push(`/stake`)}
        >
          {/* Staking an NFT */}
          <Image src="/icons/jelly200x200.png" alt="token" width={64} height={64} />
          <h2 className={styles.selectBoxTitle}>Stake Your Shrimp NFT and receive JELLY Tokens</h2>
          <p className={styles.selectBoxDescription}>
            Use our <b>Staking vault</b>{" "}
            to stake your NFTs, and earn JELLY tokens from the <b>Treasury</b> vault.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
