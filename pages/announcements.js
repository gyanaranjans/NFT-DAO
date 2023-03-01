import { useCallback } from "react";
import { useRouter } from "next/router";
import ArticleBigCard from "../components/article-big-card";
import ArticleSm from "../components/article-sm";

const Announcements = () => {
  const router = useRouter();

  const onGroupContainer1Click = useCallback(() => {
    router.push("/posts-expanded");
  }, [router]);

  const onGroupContainer5Click = useCallback(() => {
    router.push("/posts-expanded");
  }, [router]);

  const onGroupContainer6Click = useCallback(() => {
    router.push("/posts-expanded");
  }, [router]);

  const onGroupContainer7Click = useCallback(() => {
    router.push("/posts-expanded");
  }, [router]);

  const onGroupContainer9Click = useCallback(() => {
    router.push("/posts-expanded");
  }, [router]);

  const onGroupContainer10Click = useCallback(() => {
    router.push("/posts-expanded");
  }, [router]);

  const onGroupContainer11Click = useCallback(() => {
    router.push("/posts-expanded");
  }, [router]);

  const onGroupContainer12Click = useCallback(() => {
    router.push("/posts-expanded");
  }, [router]);

  const onGroupContainer13Click = useCallback(() => {
    router.push("/posts-expanded");
  }, [router]);

  const onNewPropsalButtonClick = useCallback(() => {
    router.push("/new-proposal");
  }, [router]);

  const onNewPropsalButton1Click = useCallback(() => {
    router.push("/new-post");
  }, [router]);

  const onFrameContainerClick = useCallback(() => {
    router.push("/");
  }, [router]);

  const onProfileSettingsButtonClick = useCallback(() => {
    router.push("/d-a-o-dashboard-profile");
  }, [router]);

  const onGroupContainer2Click = useCallback(() => {
    router.push("/posts-expanded");
  }, [router]);

  const onGroupContainer3Click = useCallback(() => {
    router.push("/posts-expanded");
  }, [router]);

  const onGroupContainer4Click = useCallback(() => {
    router.push("/posts-expanded");
  }, [router]);

  return (
    <div className="relative bg-white w-full h-[1024px] overflow-hidden text-center text-base text-white font-merriweather">
      <img
        className="absolute top-[0px] left-[0px] w-[1440px] h-[1024px]"
        alt=""
        src="../grad9.svg"
      />
      <button
        className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[43px] left-[785px] w-[120px] h-[47px]"
        onClick={onNewPropsalButtonClick}
      >
        <div className="absolute top-[0px] left-[0px] rounded-lg bg-darkolivegreen-100 w-[120px] h-[47px]" />
        <div className="absolute top-[7px] left-[16px] w-[88px] h-[29.09px]">
          <div className="absolute top-[14.4px] left-[0px] text-xs tracking-[-0.02em] leading-[115.2%] font-source-code-pro text-white text-center flex items-center justify-center w-[88px] h-[14.69px]">
            New ANN
          </div>
          <b className="absolute top-[0px] left-[27px] text-base tracking-[-0.02em] leading-[115.2%] flex font-source-code-pro text-white text-center items-center justify-center w-[33px] h-[14.1px]">
            +
          </b>
        </div>
      </button>
      <button
        className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[43px] left-[945px] w-[120px] h-[47px]"
        onClick={onNewPropsalButton1Click}
      >
        <div className="absolute top-[0px] left-[0px] rounded-lg bg-darkolivegreen-100 w-[120px] h-[47px]" />
        <div className="absolute top-[7px] left-[16px] w-[88px] h-[29.09px]">
          <div className="absolute top-[14.4px] left-[0px] text-xs tracking-[-0.02em] leading-[115.2%] font-source-code-pro text-white text-center flex items-center justify-center w-[88px] h-[14.69px]">
            New Post
          </div>
          <b className="absolute top-[0px] left-[27px] text-base tracking-[-0.02em] leading-[115.2%] flex font-source-code-pro text-white text-center items-center justify-center w-[33px] h-[14.1px]">
            +
          </b>
        </div>
      </button>
      <button className="cursor-pointer [border:none] p-2.5 bg-[transparent] absolute top-[37px] left-[395px] flex flex-row items-center justify-start gap-[10px]">
        <img
          className="relative w-[24.93px] h-6 shrink-0 overflow-hidden"
          alt=""
          src="../walletsvgrepocom-15.svg"
        />
        <div className="relative text-xs tracking-[-0.02em] font-light font-source-code-pro text-white text-left flex items-center w-[101px] h-[21px] shrink-0">
          Connect Wallet
        </div>
        <img
          className="relative w-[12.47px] h-3 shrink-0"
          alt=""
          src="../ellipse-25.svg"
        />
      </button>
      <div
        className="absolute top-[50px] left-[64px] w-[189px] h-5 flex flex-row items-start justify-start cursor-pointer text-left text-lg font-source-code-pro"
        onClick={onFrameContainerClick}
      >
        <b className="relative tracking-[-0.01em] leading-[80.36%] flex items-center w-[199px] shrink-0">
          NFTPlug DAO LOGO
        </b>
      </div>
      <button
        className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[27px] left-[1230px] w-[146px] h-16"
        onClick={onProfileSettingsButtonClick}
      >
        <img
          className="absolute top-[21px] left-[122px] w-6 h-6 overflow-hidden"
          alt=""
          src="../settingssvgrepocom-17.svg"
        />
        <div className="absolute top-[0px] left-[0px] w-28 h-16 flex flex-row items-center justify-start">
          <img
            className="relative w-10 h-10 shrink-0"
            alt=""
            src="../mask-group24.svg"
          />
          <div className="flex flex-row p-2.5 items-start justify-start">
            <div className="relative text-2xs tracking-[0.02em] font-semibold font-source-code-pro text-white text-center">
              NFTPlug01
            </div>
          </div>
        </div>
      </button>
      <ArticleBigCard />
      <ArticleSm
        onGroupContainer1Click={onGroupContainer1Click}
        group245Left="534px"
        rectangle81="../rectangle-803@2x.png"
        rectangle81Left="0px"
        group245Top="127px"
        group245Width="371px"
        group245Height="307px"
        newestNFTCollectionMintedMargin="unset"
        newestNFTCollectionMintedTop="266px"
        newestNFTCollectionMintedWidth="371px"
        newestNFTCollectionMintedHeight="41px"
        rectangle81Width="371px"
        rectangle81Height="248px"
      />
      <div
        className="absolute top-[125px] left-[945px] w-[371px] h-[307px] cursor-pointer"
        onClick={onGroupContainer2Click}
      >
        <div className="absolute top-[266px] left-[0px] tracking-[0.02em] leading-[160%] capitalize flex items-center justify-center w-[371px] h-[41px]">
          Newest NFT Collection Minted and Distributed to all Wallets.
        </div>
        <img
          className="absolute top-[0px] left-[0px] rounded-lg w-[371px] h-[248px] object-cover"
          alt=""
          src="../rectangle-803@2x.png"
        />
      </div>
      <div className="absolute top-[490px] left-[64px] w-[1312px] h-[534px] overflow-y-auto flex flex-col items-end justify-start gap-[40px]">
        <div className="relative w-[1321px] h-[242px] shrink-0">
          <article
            className="absolute top-[0px] left-[0px] w-[214px] h-[242px] cursor-pointer text-center text-base text-white font-merriweather"
            onClick={onGroupContainer3Click}
          >
            <p className="m-0 absolute top-[158px] left-[0px] tracking-[0.02em] leading-[160%] capitalize flex items-center justify-center w-[214px] h-[84px]">
              Newest NFT Collection Minted and Distributed to all Wallets.
            </p>
            <img
              className="absolute top-[0px] left-[9px] rounded-lg w-52 h-[154px] object-cover"
              alt=""
              src="../rectangle-81@2x.png"
            />
          </article>
          <div
            className="absolute top-[0px] left-[276px] w-[214px] h-[242px] cursor-pointer"
            onClick={onGroupContainer4Click}
          >
            <p className="m-0 absolute top-[158px] left-[0px] tracking-[0.02em] leading-[160%] capitalize flex items-center justify-center w-[214px] h-[84px]">
              Newest NFT Collection Minted and Distributed to all Wallets.
            </p>
            <img
              className="absolute top-[0px] left-[3px] rounded-lg w-52 h-[154px] object-cover"
              alt=""
              src="../rectangle-82@2x.png"
            />
          </div>
          <ArticleSm
            onGroupContainer1Click={onGroupContainer5Click}
            group245Left="552px"
            rectangle81="../rectangle-83@2x.png"
          />
          <ArticleSm
            onGroupContainer1Click={onGroupContainer6Click}
            group245Left="831px"
            rectangle81="../rectangle-84@2x.png"
            rectangle81Left="3px"
          />
          <ArticleSm
            onGroupContainer1Click={onGroupContainer7Click}
            group245Left="1107px"
            rectangle81="../rectangle-85@2x.png"
            rectangle81Left="3px"
          />
        </div>
        <div className="relative w-[1318px] h-[242px] shrink-0">
          <ArticleSm
            onGroupContainer1Click={onGroupContainer9Click}
            rectangle81="../rectangle-839@2x.png"
          />
          <ArticleSm
            onGroupContainer1Click={onGroupContainer10Click}
            group245Left="276px"
            rectangle81="../rectangle-84@2x.png"
            rectangle81Left="0px"
          />
          <ArticleSm
            onGroupContainer1Click={onGroupContainer11Click}
            group245Left="552px"
            rectangle81="../rectangle-819@2x.png"
            rectangle81Left="3px"
          />
          <ArticleSm
            onGroupContainer1Click={onGroupContainer12Click}
            group245Left="828px"
            rectangle81="../rectangle-85@2x.png"
            rectangle81Left="3px"
          />
          <ArticleSm
            onGroupContainer1Click={onGroupContainer13Click}
            group245Left="1104px"
            rectangle81="../rectangle-82@2x.png"
            rectangle81Left="3px"
          />
        </div>
        <div className="relative w-[1321px] h-[242px] shrink-0">
          <div className="absolute top-[0px] left-[0px] w-[214px] h-[242px]">
            <p className="m-0 absolute top-[158px] left-[0px] tracking-[0.02em] leading-[160%] capitalize flex items-center justify-center w-[214px] h-[84px]">
              Newest NFT Collection Minted and Distributed to all Wallets.
            </p>
            <img
              className="absolute top-[0px] left-[3px] rounded-lg w-52 h-[154px] object-cover"
              alt=""
              src="../rectangle-8110@2x.png"
            />
          </div>
          <div className="absolute top-[0px] left-[276px] w-[214px] h-[242px]">
            <p className="m-0 absolute top-[158px] left-[0px] tracking-[0.02em] leading-[160%] capitalize flex items-center justify-center w-[214px] h-[84px]">
              Newest NFT Collection Minted and Distributed to all Wallets.
            </p>
            <img
              className="absolute top-[0px] left-[3px] rounded-lg w-52 h-[154px] object-cover"
              alt=""
              src="../rectangle-8110@2x.png"
            />
          </div>
          <div className="absolute top-[0px] left-[552px] w-[217px] h-[242px]">
            <p className="m-0 absolute top-[158px] left-[0px] tracking-[0.02em] leading-[160%] capitalize flex items-center justify-center w-[214px] h-[84px]">
              Newest NFT Collection Minted and Distributed to all Wallets.
            </p>
            <img
              className="absolute top-[0px] left-[9px] rounded-lg w-52 h-[154px] object-cover"
              alt=""
              src="../rectangle-8110@2x.png"
            />
          </div>
          <ArticleSm
            group245Left="831px"
            rectangle81="../rectangle-8110@2x.png"
            rectangle81Left="3px"
            group245Cursor="unset"
          />
          <div className="absolute top-[0px] left-[1107px] w-[214px] h-[242px]">
            <div className="absolute top-[158px] left-[0px] tracking-[0.02em] leading-[160%] capitalize flex items-center justify-center w-[214px] h-[84px]">
              Newest NFT Collection Minted and Distributed to all Wallets.
            </div>
            <img
              className="absolute top-[0px] left-[3px] rounded-lg w-52 h-[154px] object-cover"
              alt=""
              src="../rectangle-8110@2x.png"
            />
          </div>
        </div>
        <div className="relative w-[1318px] h-[242px] shrink-0">
          <div className="absolute top-[0px] left-[0px] w-[214px] h-[242px]">
            <p className="m-0 absolute top-[158px] left-[0px] tracking-[0.02em] leading-[160%] capitalize flex items-center justify-center w-[214px] h-[84px]">
              Newest NFT Collection Minted and Distributed to all Wallets.
            </p>
            <img
              className="absolute top-[0px] left-[4px] rounded-lg w-52 h-[154px] object-cover"
              alt=""
              src="../rectangle-8110@2x.png"
            />
          </div>
          <div className="absolute top-[0px] left-[276px] w-[214px] h-[242px]">
            <p className="m-0 absolute top-[158px] left-[0px] tracking-[0.02em] leading-[160%] capitalize flex items-center justify-center w-[214px] h-[84px]">
              Newest NFT Collection Minted and Distributed to all Wallets.
            </p>
            <img
              className="absolute top-[0px] left-[0px] rounded-lg w-52 h-[154px] object-cover"
              alt=""
              src="../rectangle-8110@2x.png"
            />
          </div>
          <div className="absolute top-[0px] left-[552px] w-[214px] h-[242px]">
            <div className="absolute top-[158px] left-[0px] tracking-[0.02em] leading-[160%] capitalize flex items-center justify-center w-[214px] h-[84px]">
              Newest NFT Collection Minted and Distributed to all Wallets.
            </div>
            <img
              className="absolute top-[0px] left-[3px] rounded-lg w-52 h-[154px] object-cover"
              alt=""
              src="../rectangle-8110@2x.png"
            />
          </div>
          <div className="absolute top-[0px] left-[828px] w-[214px] h-[242px]">
            <p className="m-0 absolute top-[158px] left-[0px] tracking-[0.02em] leading-[160%] capitalize flex items-center justify-center w-[214px] h-[84px]">
              Newest NFT Collection Minted and Distributed to all Wallets.
            </p>
            <img
              className="absolute top-[0px] left-[3px] rounded-lg w-52 h-[154px] object-cover"
              alt=""
              src="../rectangle-8110@2x.png"
            />
          </div>
          <div className="absolute top-[0px] left-[1104px] w-[214px] h-[242px]">
            <p className="m-0 absolute top-[158px] left-[0px] tracking-[0.02em] leading-[160%] capitalize flex items-center justify-center w-[214px] h-[84px]">
              Newest NFT Collection Minted and Distributed to all Wallets.
            </p>
            <img
              className="absolute top-[0px] left-[3px] rounded-lg w-52 h-[154px] object-cover"
              alt=""
              src="../rectangle-8110@2x.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Announcements;
