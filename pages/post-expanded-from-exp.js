import { useCallback } from "react";
import { useRouter } from "next/router";
import ArticleCard from "../components/article-card";

const PostExpandedFromExp = () => {
  const router = useRouter();

  const onFrameContainerClick = useCallback(() => {
    router.push("/announcements");
  }, [router]);

  const onNewPropsalButtonClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='rectangleButton']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onNewPropsalButton1Click = useCallback(() => {
    router.push("/new-post");
  }, [router]);

  const onFrameContainer1Click = useCallback(() => {
    router.push("/");
  }, [router]);

  const onProfileSettingsButtonClick = useCallback(() => {
    router.push("/d-a-o-dashboard-profile");
  }, [router]);

  return (
    <div className="relative bg-white w-full h-[1024px] overflow-hidden text-center text-lg text-white font-merriweather">
      <img
        className="absolute top-[0px] left-[0px] w-[1440px] h-[1024px]"
        alt=""
        src="../grad7.svg"
      />
      <div
        className="absolute top-[16px] left-[55px] flex flex-col p-2.5 items-start justify-start cursor-pointer"
        onClick={onFrameContainerClick}
      >
        <img
          className="relative w-20 h-[17.32px] shrink-0"
          alt=""
          src="../arrow-4.svg"
        />
      </div>
      <div className="absolute top-[776px] left-[64px] w-[1312px] h-[534px] overflow-y-auto flex flex-col items-end justify-start gap-[40px] text-base">
        <div className="relative w-[1321px] h-[242px] shrink-0">
          <ArticleCard rectangle81="../rectangle-81@2x.png" />
          <ArticleCard
            group245Left="276px"
            rectangle81="../rectangle-82@2x.png"
            rectangle81Left="3px"
          />
          <ArticleCard
            group245Left="552px"
            rectangle81="../rectangle-83@2x.png"
          />
          <ArticleCard
            group245Left="831px"
            rectangle81="../rectangle-84@2x.png"
            rectangle81Left="3px"
          />
          <ArticleCard
            group245Left="1107px"
            rectangle81="../rectangle-85@2x.png"
            rectangle81Left="3px"
          />
        </div>
        <div className="relative w-[1318px] h-[242px] shrink-0">
          <div className="absolute top-[0px] left-[0px] w-[214px] h-[242px]">
            <div className="absolute top-[158px] left-[0px] tracking-[0.02em] leading-[160%] capitalize flex items-center justify-center w-[214px] h-[84px]">
              Newest NFT Collection Minted and Distributed to all Wallets.
            </div>
            <img
              className="absolute top-[0px] left-[4px] rounded-lg w-52 h-[154px] object-cover"
              alt=""
              src="../rectangle-831@2x.png"
            />
          </div>
          <div className="absolute top-[0px] left-[276px] w-[214px] h-[242px]">
            <div className="absolute top-[158px] left-[0px] tracking-[0.02em] leading-[160%] capitalize flex items-center justify-center w-[214px] h-[84px]">
              Newest NFT Collection Minted and Distributed to all Wallets.
            </div>
            <img
              className="absolute top-[0px] left-[0px] rounded-lg w-52 h-[154px] object-cover"
              alt=""
              src="../rectangle-831@2x.png"
            />
          </div>
          <div className="absolute top-[0px] left-[552px] w-[214px] h-[242px]">
            <div className="absolute top-[158px] left-[0px] tracking-[0.02em] leading-[160%] capitalize flex items-center justify-center w-[214px] h-[84px]">
              Newest NFT Collection Minted and Distributed to all Wallets.
            </div>
            <img
              className="absolute top-[0px] left-[3px] rounded-lg w-52 h-[154px] object-cover"
              alt=""
              src="../rectangle-831@2x.png"
            />
          </div>
          <div className="absolute top-[0px] left-[828px] w-[214px] h-[242px]">
            <div className="absolute top-[158px] left-[0px] tracking-[0.02em] leading-[160%] capitalize flex items-center justify-center w-[214px] h-[84px]">
              Newest NFT Collection Minted and Distributed to all Wallets.
            </div>
            <img
              className="absolute top-[0px] left-[3px] rounded-lg w-52 h-[154px] object-cover"
              alt=""
              src="../rectangle-831@2x.png"
            />
          </div>
          <div className="absolute top-[0px] left-[1104px] w-[214px] h-[242px]">
            <div className="absolute top-[158px] left-[0px] tracking-[0.02em] leading-[160%] capitalize flex items-center justify-center w-[214px] h-[84px]">
              Newest NFT Collection Minted and Distributed to all Wallets.
            </div>
            <img
              className="absolute top-[0px] left-[3px] rounded-lg w-52 h-[154px] object-cover"
              alt=""
              src="../rectangle-831@2x.png"
            />
          </div>
        </div>
        <div className="relative w-[1321px] h-[242px] shrink-0">
          <div className="absolute top-[0px] left-[0px] w-[214px] h-[242px]">
            <div className="absolute top-[158px] left-[0px] tracking-[0.02em] leading-[160%] capitalize flex items-center justify-center w-[214px] h-[84px]">
              Newest NFT Collection Minted and Distributed to all Wallets.
            </div>
            <img
              className="absolute top-[0px] left-[3px] rounded-lg w-52 h-[154px] object-cover"
              alt=""
              src="../rectangle-831@2x.png"
            />
          </div>
          <div className="absolute top-[0px] left-[276px] w-[214px] h-[242px]">
            <div className="absolute top-[158px] left-[0px] tracking-[0.02em] leading-[160%] capitalize flex items-center justify-center w-[214px] h-[84px]">
              Newest NFT Collection Minted and Distributed to all Wallets.
            </div>
            <img
              className="absolute top-[0px] left-[3px] rounded-lg w-52 h-[154px] object-cover"
              alt=""
              src="../rectangle-831@2x.png"
            />
          </div>
          <div className="absolute top-[0px] left-[552px] w-[217px] h-[242px]">
            <div className="absolute top-[158px] left-[0px] tracking-[0.02em] leading-[160%] capitalize flex items-center justify-center w-[214px] h-[84px]">
              Newest NFT Collection Minted and Distributed to all Wallets.
            </div>
            <img
              className="absolute top-[0px] left-[9px] rounded-lg w-52 h-[154px] object-cover"
              alt=""
              src="../rectangle-831@2x.png"
            />
          </div>
          <div className="absolute top-[0px] left-[831px] w-[214px] h-[242px]">
            <div className="absolute top-[158px] left-[0px] tracking-[0.02em] leading-[160%] capitalize flex items-center justify-center w-[214px] h-[84px]">
              Newest NFT Collection Minted and Distributed to all Wallets.
            </div>
            <img
              className="absolute top-[0px] left-[3px] rounded-lg w-52 h-[154px] object-cover"
              alt=""
              src="../rectangle-831@2x.png"
            />
          </div>
          <div className="absolute top-[0px] left-[1107px] w-[214px] h-[242px]">
            <div className="absolute top-[158px] left-[0px] tracking-[0.02em] leading-[160%] capitalize flex items-center justify-center w-[214px] h-[84px]">
              Newest NFT Collection Minted and Distributed to all Wallets.
            </div>
            <img
              className="absolute top-[0px] left-[3px] rounded-lg w-52 h-[154px] object-cover"
              alt=""
              src="../rectangle-831@2x.png"
            />
          </div>
        </div>
        <div className="relative w-[1318px] h-[242px] shrink-0">
          <div className="absolute top-[0px] left-[0px] w-[214px] h-[242px]">
            <div className="absolute top-[158px] left-[0px] tracking-[0.02em] leading-[160%] capitalize flex items-center justify-center w-[214px] h-[84px]">
              Newest NFT Collection Minted and Distributed to all Wallets.
            </div>
            <img
              className="absolute top-[0px] left-[4px] rounded-lg w-52 h-[154px] object-cover"
              alt=""
              src="../rectangle-831@2x.png"
            />
          </div>
          <div className="absolute top-[0px] left-[276px] w-[214px] h-[242px]">
            <div className="absolute top-[158px] left-[0px] tracking-[0.02em] leading-[160%] capitalize flex items-center justify-center w-[214px] h-[84px]">
              Newest NFT Collection Minted and Distributed to all Wallets.
            </div>
            <img
              className="absolute top-[0px] left-[0px] rounded-lg w-52 h-[154px] object-cover"
              alt=""
              src="../rectangle-831@2x.png"
            />
          </div>
          <div className="absolute top-[0px] left-[552px] w-[214px] h-[242px]">
            <div className="absolute top-[158px] left-[0px] tracking-[0.02em] leading-[160%] capitalize flex items-center justify-center w-[214px] h-[84px]">
              Newest NFT Collection Minted and Distributed to all Wallets.
            </div>
            <img
              className="absolute top-[0px] left-[3px] rounded-lg w-52 h-[154px] object-cover"
              alt=""
              src="../rectangle-831@2x.png"
            />
          </div>
          <div className="absolute top-[0px] left-[828px] w-[214px] h-[242px]">
            <div className="absolute top-[158px] left-[0px] tracking-[0.02em] leading-[160%] capitalize flex items-center justify-center w-[214px] h-[84px]">
              Newest NFT Collection Minted and Distributed to all Wallets.
            </div>
            <img
              className="absolute top-[0px] left-[3px] rounded-lg w-52 h-[154px] object-cover"
              alt=""
              src="../rectangle-831@2x.png"
            />
          </div>
          <div className="absolute top-[0px] left-[1104px] w-[214px] h-[242px]">
            <div className="absolute top-[158px] left-[0px] tracking-[0.02em] leading-[160%] capitalize flex items-center justify-center w-[214px] h-[84px]">
              Newest NFT Collection Minted and Distributed to all Wallets.
            </div>
            <img
              className="absolute top-[0px] left-[3px] rounded-lg w-52 h-[154px] object-cover"
              alt=""
              src="../rectangle-831@2x.png"
            />
          </div>
        </div>
      </div>
      <button
        className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[43px] left-[785px] w-[120px] h-[47px]"
        onClick={onNewPropsalButtonClick}
      >
        <button
          className="cursor-pointer [border:none] p-0 bg-darkolivegreen-100 absolute top-[0px] left-[0px] rounded-lg w-[120px] h-[47px]"
          data-scroll-to="rectangleButton"
        />
        <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[7px] left-[16px] w-[88px] h-[29.09px]">
          <div className="absolute top-[14.4px] left-[0px] text-xs tracking-[-0.02em] leading-[115.2%] font-source-code-pro text-white text-center flex items-center justify-center w-[88px] h-[14.69px]">
            New ANN
          </div>
          <b className="absolute top-[0px] left-[27px] text-base tracking-[-0.02em] leading-[115.2%] flex font-source-code-pro text-white text-center items-center justify-center w-[33px] h-[14.1px]">
            +
          </b>
        </button>
      </button>
      <button
        className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[43px] left-[945px] w-[120px] h-[47px]"
        onClick={onNewPropsalButton1Click}
      >
        <button className="cursor-pointer [border:none] p-0 bg-darkolivegreen-100 absolute top-[0px] left-[0px] rounded-lg w-[120px] h-[47px]" />
        <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[7px] left-[16px] w-[88px] h-[29.09px]">
          <div className="absolute top-[14.4px] left-[0px] text-xs tracking-[-0.02em] leading-[115.2%] font-source-code-pro text-white text-center flex items-center justify-center w-[88px] h-[14.69px]">
            New Post
          </div>
          <b className="absolute top-[0px] left-[27px] text-base tracking-[-0.02em] leading-[115.2%] flex font-source-code-pro text-white text-center items-center justify-center w-[33px] h-[14.1px]">
            +
          </b>
        </button>
      </button>
      <button className="cursor-pointer [border:none] p-2.5 bg-[transparent] absolute top-[37px] left-[395px] flex flex-row items-center justify-start gap-[10px]">
        <img
          className="relative w-[24.93px] h-6 shrink-0 overflow-hidden"
          alt=""
          src="../walletsvgrepocom-13.svg"
        />
        <div className="relative text-xs tracking-[-0.02em] font-light font-source-code-pro text-white text-left flex items-center w-[101px] h-[21px] shrink-0">
          Connect Wallet
        </div>
        <img
          className="relative w-[12.47px] h-3 shrink-0"
          alt=""
          src="../ellipse-2.svg"
        />
      </button>
      <div
        className="absolute top-[41px] left-[64px] w-[189px] h-[49px] flex flex-row py-2.5 px-0 box-border items-start justify-start cursor-pointer text-left font-source-code-pro"
        onClick={onFrameContainer1Click}
      >
        <b className="relative tracking-[-0.01em] leading-[80.36%] flex items-center w-[199px] shrink-0">
          NFTPlug DAO LOGO
        </b>
      </div>
      <div
        className="absolute top-[27px] left-[1230px] w-[146px] h-16 cursor-pointer text-2xs font-source-code-pro"
        onClick={onProfileSettingsButtonClick}
      >
        <img
          className="absolute top-[21px] left-[122px] w-6 h-6 overflow-hidden"
          alt=""
          src="../settingssvgrepocom-15.svg"
        />
        <div className="absolute top-[0px] left-[0px] w-28 h-16 flex flex-row items-center justify-start">
          <img
            className="relative w-10 h-10 shrink-0"
            alt=""
            src="../mask-group22.svg"
          />
          <div className="flex flex-row p-2.5 items-start justify-start">
            <div className="relative tracking-[0.02em] font-semibold">
              NFTPlug01
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[621px] left-[105px] tracking-[0.02em] leading-[160%] capitalize flex items-center justify-center w-[371px] h-[72px]">
        Newest NFT Collection Minted and Distributed to all Wallets.
      </div>
      <img
        className="absolute top-[112px] left-[64px] rounded-lg w-[459px] h-[478px] object-cover"
        alt=""
        src="../rectangle-80@2x.png"
      />
      <div className="absolute top-[106px] left-[590px] w-[786px] h-[574px] overflow-y-auto flex flex-col p-2.5 box-border items-start justify-start text-justify text-sm">
        <div className="relative tracking-[0.02em] leading-[200%] capitalize inline-block w-[774px]">
          <p className="[margin-block-start:0] [margin-block-end:16px]">{`Newest NFT Collection Minted and Distributed to all Wallets. Newest NFT Collection Minted and Distributed to all Wallets. Newest NFT Collection Minted and Distributed to all Wallets. Newest NFT Collection Minted and Distributed to all Wallets. Newest NFT Collection Minted and Distributed to all Wallets. Newest NFT Collection Minted and Distributed to all Wallets. Newest NFT Collection Minted and Distributed to all Wallets. `}</p>
          <p className="[margin-block-start:0] [margin-block-end:16px]">
            Newest NFT Collection Minted and Distributed to all Wallets. Newest
            NFT Collection Minted and Distributed to all Wallets. Newest NFT
            Collection Minted and Distributed to all Wallets.
          </p>
          <p className="[margin-block-start:0] [margin-block-end:16px]">{`Newest NFT Collection Minted and Distributed to all Wallets. Newest NFT Collection Minted and Distributed to all Wallets. Newest NFT Collection Minted and Distributed to all Wallets. Newest NFT Collection Minted and Distributed to all Wallets. Newest NFT Collection Minted and Distributed to all Wallets. Newest NFT Collection Minted and Distributed to all Wallets. Newest NFT Collection Minted and Distributed to all Wallets. Newest NFT Collection Minted and Distributed to all Wallets. Newest NFT Collection Minted and Distributed to all Wallets. Newest NFT Collection Minted and Distributed to all Wallets. Newest NFT Collection Minted and Distributed to all Wallets. `}</p>
          <p className="m-0">{`Newest NFT Collection Minted and Distributed to all Wallets. Newest NFT Collection Minted and Distributed to all Wallets. Newest NFT Collection Minted and Distributed to all Wallets. Newest NFT Collection Minted and Distributed to all Wallets. Newest NFT Collection Minted and Distributed to all Wallets. Newest NFT Collection Minted and Distributed to all Wallets. Newest NFT Collection Minted and Distributed to all Wallets. Newest NFT Collection Minted and Distributed to all Wallets. Newest NFT Collection Minted and Distributed to all Wallets. Newest NFT Collection Minted and Distributed to all Wallets. Newest NFT Collection Minted and Distributed to all Wallets. Newest NFT Collection Minted and Distributed to all Wallets. Newest NFT Collection Minted and Distributed to all Wallets. Newest NFT Collection Minted and Distributed to all Wallets. Newest NFT Collection Minted and Distributed to all Wallets. `}</p>
        </div>
      </div>
    </div>
  );
};

export default PostExpandedFromExp;
