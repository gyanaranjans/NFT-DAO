import { useMemo } from "react";

const ArticleCard = ({ group245Left, rectangle81, rectangle81Left }) => {
  const groupButtonStyle = useMemo(() => {
    return {
      left: group245Left,
    };
  }, [group245Left]);

  const rectangleIconStyle = useMemo(() => {
    return {
      left: rectangle81Left,
    };
  }, [rectangle81Left]);

  return (
    <button
      className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[0px] left-[0px] w-[214px] h-[242px]"
      style={groupButtonStyle}
    >
      <div className="absolute top-[158px] left-[0px] text-base tracking-[0.02em] leading-[160%] capitalize font-merriweather text-white text-center flex items-center justify-center w-[214px] h-[84px]">
        Newest NFT Collection Minted and Distributed to all Wallets.
      </div>
      <img
        className="absolute top-[0px] left-[9px] rounded-lg w-52 h-[154px] object-cover"
        alt=""
        src={rectangle81}
        style={rectangleIconStyle}
      />
    </button>
  );
};

export default ArticleCard;
