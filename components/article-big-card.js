import { useCallback } from "react";
import { useRouter } from "next/router";

const ArticleBigCard = () => {
  const router = useRouter();

  const onGroupContainerClick = useCallback(() => {
    router.push("/posts-expanded");
  }, [router]);

  return (
    <article
      className="absolute top-[127px] left-[123px] w-[371px] h-[307px] cursor-pointer text-center text-base text-white font-merriweather"
      onClick={onGroupContainerClick}
    >
      <p className="m-0 absolute top-[266px] left-[0px] tracking-[0.02em] leading-[160%] capitalize flex items-center justify-center w-[371px] h-[41px]">
        Newest NFT Collection Minted and Distributed to all Wallets.
      </p>
      <img
        className="absolute top-[0px] left-[0px] rounded-lg w-[371px] h-[248px] object-cover"
        alt=""
        src="../rectangle-803@2x.png"
      />
    </article>
  );
};

export default ArticleBigCard;
