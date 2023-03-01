import { useMemo } from "react";

const ArticleSm = ({
  onGroupContainer1Click,
  group245Left,
  rectangle81,
  rectangle81Left,
  group245Top,
  group245Width,
  group245Height,
  newestNFTCollectionMintedMargin,
  newestNFTCollectionMintedTop,
  newestNFTCollectionMintedWidth,
  newestNFTCollectionMintedHeight,
  rectangle81Width,
  rectangle81Height,
  group245Cursor,
}) => {
  const groupDivStyle = useMemo(() => {
    return {
      left: group245Left,
      top: group245Top,
      width: group245Width,
      height: group245Height,
      cursor: group245Cursor,
    };
  }, [
    group245Left,
    group245Top,
    group245Width,
    group245Height,
    group245Cursor,
  ]);

  const rectangleIcon1Style = useMemo(() => {
    return {
      left: rectangle81Left,
      width: rectangle81Width,
      height: rectangle81Height,
    };
  }, [rectangle81Left, rectangle81Width, rectangle81Height]);

  const newestNFTCollectionStyle = useMemo(() => {
    return {
      margin: newestNFTCollectionMintedMargin,
      top: newestNFTCollectionMintedTop,
      width: newestNFTCollectionMintedWidth,
      height: newestNFTCollectionMintedHeight,
    };
  }, [
    newestNFTCollectionMintedMargin,
    newestNFTCollectionMintedTop,
    newestNFTCollectionMintedWidth,
    newestNFTCollectionMintedHeight,
  ]);

  return (
    <div
      className="absolute top-[0px] left-[0px] w-[214px] h-[242px] cursor-pointer text-center text-base text-white font-merriweather"
      onClick={onGroupContainer1Click}
      style={groupDivStyle}
    >
      <p
        className="m-0 absolute top-[158px] left-[0px] tracking-[0.02em] leading-[160%] capitalize flex items-center justify-center w-[214px] h-[84px]"
        style={newestNFTCollectionStyle}
      >
        Newest NFT Collection Minted and Distributed to all Wallets.
      </p>
      <img
        className="absolute top-[0px] left-[9px] rounded-lg w-52 h-[154px] object-cover"
        alt=""
        src={rectangle81}
        style={rectangleIcon1Style}
      />
    </div>
  );
};

export default ArticleSm;
