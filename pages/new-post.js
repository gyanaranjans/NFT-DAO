import { useCallback } from "react";
import { useRouter } from "next/router";

const NewPost = () => {
  const router = useRouter();

  const onFrameContainerClick = useCallback(() => {
    router.push("/announcements");
  }, [router]);

  const onNewPropsalButtonClick = useCallback(() => {
    router.push("/post-succes");
  }, [router]);

  const onNewPropsalButton1Click = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='rectangle']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onNewPropsalButton2Click = useCallback(() => {
    router.push("/new-proposal");
  }, [router]);

  const onFrameContainer1Click = useCallback(() => {
    router.push("/");
  }, [router]);

  const onProfileSettingsButtonClick = useCallback(() => {
    router.push("/d-a-o-dashboard-profile");
  }, [router]);

  return (
    <div className="relative bg-white w-full h-[1024px] overflow-hidden text-center text-xs text-white font-source-code-pro">
      <img
        className="absolute top-[0px] left-[0px] w-[1440px] h-[1024px]"
        alt=""
        src="../grad5.svg"
      />
      <div
        className="absolute top-[12px] left-[56px] flex flex-col p-2.5 items-start justify-start cursor-pointer"
        onClick={onFrameContainerClick}
      >
        <button className="cursor-pointer p-0 bg-[transparent] relative box-border w-20 h-0 shrink-0 [transform:_rotate(180deg)] [transform-origin:0_0] border-[3px] border-solid border-white" />
      </div>
      <button
        className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[818px] left-[234px] w-[120px] h-20"
        onClick={onNewPropsalButtonClick}
      >
        <div className="absolute top-[0px] left-[0px] rounded-lg bg-darkolivegreen-100 w-[120px] h-20" />
        <div className="absolute top-[26px] left-[28px] w-[63px] h-[27px]">
          <div className="absolute top-[0px] left-[0px] text-xs tracking-[-0.02em] leading-[115.2%] font-source-code-pro text-white text-center flex items-center justify-center w-[63px] h-[27px]">
            Submit Post
          </div>
        </div>
      </button>
      <div
        className="absolute top-[43px] left-[785px] w-[120px] h-[47px] opacity-[0] cursor-pointer"
        onClick={onNewPropsalButton1Click}
      >
        <div
          className="absolute top-[0px] left-[0px] rounded-lg bg-darkolivegreen-100 w-[120px] h-[47px]"
          data-scroll-to="rectangle"
        />
        <div className="absolute top-[7px] left-[16px] w-[88px] h-[29.09px]">
          <div className="absolute top-[14.4px] left-[0px] tracking-[-0.02em] leading-[115.2%] flex items-center justify-center w-[88px] h-[14.69px]">
            New ANN
          </div>
          <b className="absolute top-[0px] left-[27px] text-base tracking-[-0.02em] leading-[115.2%] flex items-center justify-center w-[33px] h-[14.1px]">
            +
          </b>
        </div>
      </div>
      <div
        className="absolute top-[43px] left-[945px] w-[120px] h-[47px] opacity-[0] cursor-pointer"
        onClick={onNewPropsalButton2Click}
      >
        <div className="absolute top-[0px] left-[0px] rounded-lg bg-darkolivegreen-100 w-[120px] h-[47px]" />
        <div className="absolute top-[7px] left-[16px] w-[88px] h-[29.09px]">
          <div className="absolute top-[14.4px] left-[0px] tracking-[-0.02em] leading-[115.2%] flex items-center justify-center w-[88px] h-[14.69px]">
            New Post
          </div>
          <b className="absolute top-[0px] left-[27px] text-base tracking-[-0.02em] leading-[115.2%] flex items-center justify-center w-[33px] h-[14.1px]">
            +
          </b>
        </div>
      </div>
      <button className="cursor-pointer [border:none] p-2.5 bg-[transparent] absolute top-[37px] left-[395px] flex flex-row items-center justify-start gap-[10px]">
        <img
          className="relative w-[24.93px] h-6 shrink-0 overflow-hidden"
          alt=""
          src="../walletsvgrepocom-11.svg"
        />
        <div className="relative text-xs tracking-[-0.02em] font-light font-source-code-pro text-white text-left flex items-center w-[101px] h-[21px] shrink-0">
          Connect Wallet
        </div>
        <img
          className="relative w-[12.47px] h-3 shrink-0"
          alt=""
          src="../ellipse-21.svg"
        />
      </button>
      <div
        className="absolute top-[41px] left-[64px] w-[189px] h-[49px] flex flex-row py-2.5 px-0 box-border items-start justify-start cursor-pointer text-left text-lg"
        onClick={onFrameContainer1Click}
      >
        <b className="relative tracking-[-0.01em] leading-[80.36%] flex items-center w-[199px] shrink-0">
          NFTPlug DAO LOGO
        </b>
      </div>
      <div
        className="absolute top-[27px] left-[1230px] w-[146px] h-16 cursor-pointer text-2xs"
        onClick={onProfileSettingsButtonClick}
      >
        <img
          className="absolute top-[21px] left-[122px] w-6 h-6 overflow-hidden"
          alt=""
          src="../settingssvgrepocom-13.svg"
        />
        <div className="absolute top-[0px] left-[0px] w-28 h-16 flex flex-row items-center justify-start">
          <img
            className="relative w-10 h-10 shrink-0"
            alt=""
            src="../mask-group20.svg"
          />
          <div className="flex flex-row p-2.5 items-start justify-start">
            <div className="relative tracking-[0.02em] font-semibold">
              NFTPlug01
            </div>
          </div>
        </div>
      </div>
      <input
        className="[border:none] font-merriweather text-lg bg-gray-100 absolute top-[621px] left-[64px] rounded-lg w-[464px] flex flex-row p-2.5 box-border items-start justify-start"
        type="text"
        placeholder="HEADING HERE"
      />
      <input
        className="absolute top-[112px] left-[64px] rounded-lg bg-silver w-[459px] h-[478px]"
        type="file"
      />
      <textarea
        className="[border:none] bg-white font-merriweather text-lg absolute top-[106px] left-[590px] rounded-lg w-[786px] h-[902px] overflow-y-auto flex flex-col p-2.5 box-border items-start justify-start opacity-[0.2]"
        placeholder="Enter Text Body Here"
      />
      <h4 className="m-0 absolute top-[227px] left-[100px] text-sm tracking-[0.02em] leading-[200%] capitalize font-normal font-merriweather text-gray-200 flex items-center justify-center w-[388px] h-[248px]">
        INSERT IMAGE
      </h4>
    </div>
  );
};

export default NewPost;
