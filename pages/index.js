import { useCallback } from "react";
import { Box, Slider } from "@mui/material";
import { useRouter } from "next/router";

const DAODashboardHome = () => {
  const router = useRouter();

  const onGroupContainerClick = useCallback(() => {
    router.push("/d-a-o-dashboard-proposals");
  }, [router]);

  const onNewProposalClick = useCallback(() => {
    router.push("/new-proposal");
  }, [router]);

  const onVoteButtonClick = useCallback(() => {
    router.push("/d-a-o-dashboard-proposals");
  }, [router]);

  const onGroupContainer6Click = useCallback(() => {
    router.push("/announcements");
  }, [router]);

  const onNewPostClick = useCallback(() => {
    router.push("/new-post");
  }, [router]);

  const onProfileSettingsButtonClick = useCallback(() => {
    router.push("/d-a-o-dashboard-profile");
  }, [router]);

  return (
    <div className="absolute bg-black w-full h-[4000px] overflow-hidden text-left text-xs text-white font-source-code-pro">
      <img
        className="absolute top-[0px] left-[0px] w-[1440px] h-[1024px]"
        alt=""
        src="../grad10.svg"
      />
      <a className="[text-decoration:none] absolute top-[37px] left-[395px] flex flex-row p-2.5 items-center justify-start gap-[10px] text-[inherit] hover:animate-[1s_ease_0s_infinite_normal_none_scale-up] hover:opacity-[1] active:animate-[1s_ease_0s_infinite_normal_none_scale-down-center] active:opacity-[1]">
        <img
          className="relative w-[24.93px] h-6 shrink-0 overflow-hidden"
          alt=""
          src="../walletsvgrepocom-16.svg"
        />
        <div className="relative tracking-[-0.02em] font-light flex items-center w-[101px] h-[21px] shrink-0">
          Connect Wallet
        </div>
        <img
          className="relative w-[12.47px] h-3 shrink-0"
          alt=""
          src="../ellipse-25.svg"
        />
      </a>
      <div className="absolute top-[41px] left-[64px] w-[189px] h-[49px] flex flex-row py-2.5 px-0 box-border items-start justify-start text-lg">
        <b className="relative tracking-[-0.01em] leading-[80.36%] flex items-center w-[199px] shrink-0">
          NFTPlug DAO LOGO
        </b>
      </div>
      <div className="absolute top-[114px] left-[398px] rounded-lg [background:linear-gradient(180deg,_rgba(171,_26,_139,_0.49),_rgba(0,_0,_0,_0.76)_7.33%)] w-[644px] h-[878px]" />
      <h2
        className="m-0 absolute top-[125px] left-[588px] flex flex-row p-2.5 items-start justify-start text-lg font-inherit"
        id="heading"
      >
        <div className="relative tracking-[-0.02em] leading-[80.36%] font-medium">
          Community Discussions
        </div>
      </h2>
      <div
        className="absolute top-[114px] left-[64px] w-[310px] h-[319px] cursor-pointer text-lg hover:animate-[1s_ease_0s_1_normal_none_shadow-pop-tr] hover:opacity-[1] active:animate-[1s_ease_0s_infinite_normal_none_shadow-inset-center] active:opacity-[1]"
        id="proposal"
        onClick={onGroupContainerClick}
      >
        <div className="absolute top-[0px] left-[0px] rounded-lg [background:linear-gradient(180deg,_rgba(171,_26,_139,_0.49),_rgba(0,_0,_0,_0.76)_17.52%)] w-[310px] h-[319px]" />
        <div className="absolute top-[21px] left-[103px] flex flex-row items-start justify-start">
          <div className="relative tracking-[-0.02em] leading-[80.36%] font-medium">
            Proposals
          </div>
        </div>
        <div className="absolute top-[59px] left-[30px] h-[245px] overflow-y-auto flex flex-col items-start justify-start text-sm">
          <div className="relative w-[250px] h-[220px] shrink-0">
            <div className="absolute top-[0px] left-[0px] rounded-lg bg-darkslategray w-[250px] h-[220px]" />
            <Box
              className="absolute top-[161.23px] left-[56px]"
              sx={{ width: 114.77350616455078 }}
            >
              <Slider
                color="secondary"
                min={0}
                max={100}
                orientation="horizontal"
              />
            </Box>
            <div className="absolute top-[16px] left-[13px] text-base tracking-[-0.02em] leading-[162.2%] font-medium flex items-center w-56">
              Plugdev01 to take charge of charity disbursements for the
              community.
            </div>
            <b className="absolute top-[181px] left-[13px] tracking-[0.05em] flex text-darkolivegreen-100 items-center w-[121px] h-[31px]">{`Proposed By: `}</b>
            <div className="absolute top-[184px] left-[165px] w-[72px] h-6 flex flex-row items-center justify-start text-center text-xs">
              <img
                className="relative w-4 h-4 shrink-0"
                alt=""
                src="../mask-group25.svg"
              />
              <div className="flex flex-row items-start justify-start">
                <div className="relative tracking-[0.02em] font-black">
                  NFTPlug01
                </div>
              </div>
            </div>
            <b className="absolute top-[123px] left-[209px] tracking-[0.05em] flex items-center w-[38px] h-[19px]">
              29%
            </b>
            <b className="absolute top-[155px] left-[209px] tracking-[0.05em] flex items-center w-[38px] h-[25px]">
              71%
            </b>
            <b className="absolute top-[122px] left-[13px] tracking-[0.05em] flex items-center w-[41px] h-[21px]">
              Yes
            </b>
            <b className="absolute top-[157px] left-[13px] tracking-[0.05em] flex items-center w-[22px] h-5">
              No
            </b>
            <img
              className="absolute top-[126.73px] left-[56.99px] w-[50.78px] h-[11.55px]"
              alt=""
              src="../arrow-1-stroke.svg"
            />
          </div>
        </div>
      </div>
      <div className="absolute top-[350px] left-[401px] flex flex-col items-end justify-start gap-[2px] text-right">
        <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-xs tracking-[-0.02em] leading-[115.2%] font-source-code-pro text-white text-right flex items-center w-[103px] h-6 shrink-0">
          All Members
        </button>
        <div className="relative tracking-[-0.02em] leading-[115.2%] flex items-center w-[89px] h-8 shrink-0">
          Core Team
        </div>
        <div className="relative tracking-[-0.02em] leading-[115.2%] flex items-center w-[89px] h-8 shrink-0">
          Game Devs
        </div>
        <div className="relative tracking-[-0.02em] leading-[115.2%] flex items-center w-[100px] h-8 shrink-0">
          Animation Team
        </div>
        <div className="relative tracking-[-0.02em] leading-[115.2%] flex items-center w-[83px] h-8 shrink-0">
          Stock ID
        </div>
        <div className="relative tracking-[-0.02em] leading-[115.2%] flex items-center w-[74px] h-8 shrink-0">
          Values
        </div>
        <div className="relative tracking-[-0.02em] leading-[115.2%] flex items-center w-[69px] h-8 shrink-0">
          Rules
        </div>
      </div>
      <div className="absolute top-[170px] left-[509px] rounded-lg w-[519px] h-[740px]" />
      <h3 className="m-0 absolute top-[189px] left-[520px] text-[inherit] tracking-[-0.02em] leading-[115.2%] font-normal font-inherit flex items-center w-[70px] h-8">
        Admins:
      </h3>
      <div
        className="absolute top-[226px] left-[526px] w-60 h-[54px] overflow-hidden text-center text-mediumspringgreen"
        id="profile-pic"
      >
        <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[0px] left-[0px] w-[67px] h-[54.43px]">
          <img
            className="absolute top-[0px] left-[17.15px] w-[35.98px] h-[33.17px]"
            alt=""
            src="../mask-group26.svg"
          />
          <div className="absolute top-[26px] left-[0px] w-[67px] h-[28.43px] overflow-hidden flex flex-row p-2.5 box-border items-start justify-start">
            <div className="relative text-xs tracking-[-0.04em] font-source-code-pro text-white text-center">
              NFTPlug01
            </div>
          </div>
        </button>
        <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[0px] left-[83px] w-[67px] h-[54.43px]">
          <img
            className="absolute top-[0px] left-[17.15px] w-[35.98px] h-[33.17px]"
            alt=""
            src="../mask-group27.svg"
          />
          <div className="absolute top-[26px] left-[0px] w-[67px] h-[28.43px] overflow-hidden flex flex-row p-2.5 box-border items-start justify-start">
            <div className="relative text-xs tracking-[-0.04em] font-source-code-pro text-white text-center">
              NFTPlug01
            </div>
          </div>
        </button>
        <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[0px] left-[166px] w-[67px] h-[54.43px]">
          <img
            className="absolute top-[0px] left-[17.15px] w-[35.98px] h-[33.17px]"
            alt=""
            src="../mask-group28.svg"
          />
          <div className="absolute top-[26px] left-[0px] w-[67px] h-[28.43px] overflow-hidden flex flex-row p-2.5 box-border items-start justify-start">
            <div className="relative text-xs tracking-[-0.04em] font-source-code-pro text-white text-center">
              NFTPlug01
            </div>
          </div>
        </button>
        <div className="absolute top-[0px] left-[249px] w-[67px] h-[54.43px]">
          <img
            className="absolute top-[0px] left-[17.15px] w-[35.98px] h-[33.17px]"
            alt=""
          />
          <div className="absolute top-[26px] left-[0px] w-[67px] h-[28.43px] overflow-hidden flex flex-row p-2.5 box-border items-start justify-start">
            <div className="relative tracking-[-0.04em]">NFTPlug01</div>
          </div>
        </div>
        <div className="absolute top-[0px] left-[332px] w-[67px] h-[54.43px]">
          <img
            className="absolute top-[0px] left-[17.15px] w-[35.98px] h-[33.17px]"
            alt=""
          />
          <div className="absolute top-[26px] left-[0px] w-[67px] h-[28.43px] overflow-hidden flex flex-row p-2.5 box-border items-start justify-start">
            <div className="relative tracking-[-0.04em]">NFTPlug01</div>
          </div>
        </div>
        <div className="absolute top-[0px] left-[415px] w-[67px] h-[54.43px]">
          <img
            className="absolute top-[0px] left-[17.15px] w-[35.98px] h-[33.17px]"
            alt=""
          />
          <div className="absolute top-[26px] left-[0px] w-[67px] h-[28.43px] overflow-hidden flex flex-row p-2.5 box-border items-start justify-start">
            <div className="relative tracking-[-0.04em]">NFTPlug01</div>
          </div>
        </div>
      </div>
      <div
        className="absolute top-[201px] left-[834px] w-[78px] h-[76px] cursor-pointer text-center"
        id="sm-p"
      >
        <div className="absolute top-[0px] left-[0px] rounded bg-darkolivegreen-200 w-[78px] h-[76px]" />
        <b className="absolute top-[14px] left-[16px] tracking-[-0.04em] leading-[97.36%] flex items-center w-[49px] h-[22px]">
          <span className="[line-break:anywhere] w-full">
            <p className="[margin-block-start:0] [margin-block-end:0px]">{`Total `}</p>
            <p className="m-0">Members</p>
          </span>
        </b>
        <b className="absolute top-[41px] left-[10px] tracking-[-0.04em] flex items-center justify-center w-[58px] h-5">
          20,135
        </b>
      </div>
      <div
        className="absolute top-[201px] left-[920px] w-[78px] h-[76px] cursor-pointer text-center"
        id="sm-p"
      >
        <div className="absolute top-[0px] left-[0px] rounded bg-darkolivegreen-100 w-[78px] h-[76px]" />
        <b className="absolute top-[17px] left-[14px] tracking-[-0.04em] leading-[96%] flex items-center justify-center w-12 h-[18px]">
          Online Members
        </b>
        <b className="absolute top-[41px] left-[13px] tracking-[-0.04em] flex items-center justify-center w-[52px] h-5">
          12,300
        </b>
      </div>
      <div className="absolute top-[309px] left-[512px] h-[601px] overflow-y-auto flex flex-col items-start justify-start">
        <div className="relative w-[493px] h-[167px] shrink-0">
          <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[0px] left-[5px] w-[109px] h-[35px]">
            <img
              className="absolute top-[7.44px] left-[0px] w-[17.02px] h-[20.47px]"
              alt=""
              src="../mask-group29.svg"
            />
            <div className="absolute top-[0px] left-[5px] w-[104px] flex flex-row p-2.5 box-border items-start justify-start">
              <div className="relative text-xs tracking-[0.02em] font-source-code-pro text-palegreen text-left">
                topdev01
              </div>
            </div>
            <img
              className="absolute top-[12px] left-[77px] w-3 h-3"
              alt=""
              src="../ellipse-4.svg"
            />
          </button>
          <div
            className="absolute top-[31px] left-[0px] rounded-lg [background:linear-gradient(266.55deg,_#000,_rgba(255,_255,_255,_0)_90.22%)] w-[493px] flex flex-row p-2.5 box-border items-start justify-start text-sm"
            id="para"
          >
            <p className="m-0 relative tracking-[0.01em] leading-[160%] flex items-center w-[482px] shrink-0">
              I have a feeling that almost anyone could use Chat GPT seeking to
              enhance some aspects of their routine. They just need to go "down
              the rabbit hole" a few times and they'll found many useful ideias
              to implement.
            </p>
          </div>
          <label className="absolute top-[12px] left-[335px] flex flex-row items-start justify-start">
            <div className="relative tracking-[-0.02em] leading-[115.2%]">
              Jan 5,2023
            </div>
          </label>
          <div className="absolute top-[12px] left-[421px] flex flex-row items-start justify-start">
            <div className="relative tracking-[-0.02em] leading-[115.2%]">
              01:27AM
            </div>
          </div>
          <div className="absolute top-[149px] left-[407px] tracking-[-0.02em] leading-[115.2%]">
            Reply
          </div>
          <img
            className="absolute top-[147px] left-[452px] rounded-sm w-[18px] h-[18px] overflow-hidden"
            alt=""
            src="../8687061-ic-fluent-emoji-add-regular-icon-11.svg"
          />
          <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[147px] left-[14px] w-[18px] h-[18px] overflow-hidden">
            <img
              className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="../vector.svg"
            />
            <img
              className="absolute h-[23.44%] w-[23.44%] top-[25%] right-[57.81%] bottom-[51.56%] left-[18.75%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="../vector1.svg"
            />
            <img
              className="absolute h-[14.06%] w-[14.06%] top-[29.69%] right-[62.5%] bottom-[56.25%] left-[23.44%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="../vector2.svg"
            />
            <img
              className="absolute h-[10.26%] w-[27.82%] top-[27.81%] right-[14.12%] bottom-[61.93%] left-[58.06%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="../group.svg"
            />
            <img
              className="absolute h-[26.28%] w-[9.97%] top-[55.19%] right-[41.66%] bottom-[18.53%] left-[48.38%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="../group1.svg"
            />
            <img
              className="absolute h-[32.31%] w-[36.51%] top-[42.14%] right-[-0.06%] bottom-[25.55%] left-[63.55%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="../vector3.svg"
            />
          </button>
          <div className="absolute top-[153px] left-[35px] flex flex-row items-start justify-start">
            <div className="relative tracking-[-0.02em] leading-[115.2%]">
              +13
            </div>
          </div>
        </div>
      </div>
      <button
        className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[432px] left-[93px] w-32 h-6"
        onClick={onNewProposalClick}
      >
        <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[6px] left-[25px] text-xs tracking-[-0.02em] leading-[115.2%] font-source-code-pro text-white text-left flex items-center w-[103px] h-[13px]">
          New Proposal
        </button>
        <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[0px] left-[0px] text-xl tracking-[-0.02em] leading-[115.2%] font-bold font-source-code-pro text-white text-left flex items-center w-[17px] h-6">
          +
        </button>
      </button>
      <button
        className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[471px] left-[94px] w-[58px] h-6"
        onClick={onVoteButtonClick}
      >
        <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[0px] left-[24px] text-xs tracking-[-0.02em] leading-[115.2%] font-source-code-pro text-white text-left flex items-center w-[34px] h-6">
          Vote
        </button>
        <img
          className="absolute top-[4px] left-[0px] w-4 h-4 overflow-hidden"
          alt=""
          src="../326568-check-circle-icon-11.svg"
        />
      </button>
      <div
        className="absolute top-[540px] left-[64px] w-[310px] h-[370px] cursor-pointer text-lg hover:animate-[1s_ease_0s_1_normal_none_shadow-pop-tr] hover:opacity-[1] active:animate-[1s_ease_0s_1_normal_none_shadow-inset-center] active:opacity-[1]"
        onClick={onGroupContainer6Click}
      >
        <div className="absolute top-[0px] left-[0px] rounded-lg [background:linear-gradient(180deg,_rgba(171,_26,_139,_0.49),_rgba(0,_0,_0,_0.76)_13.38%)] w-[310px] h-[370px]" />
        <h3 className="m-0 absolute top-[16.7px] left-[79px] h-[13.36px] flex flex-row items-start justify-start text-[inherit] font-inherit">
          <div className="relative tracking-[-0.02em] leading-[80.36%] font-medium">
            Announcements
          </div>
        </h3>
        <div className="absolute top-[97.72px] left-[30px] rounded-lg bg-darkslategray w-[250px] h-[183.75px]" />
        <p className="m-0 absolute top-[239px] left-[143px] h-[27.56px] flex flex-row p-2.5 box-border items-start justify-start text-xs text-palegreen">
          <div className="relative tracking-[0.02em]">topdev01</div>
        </p>
        <p className="m-0 absolute top-[253.07px] left-[97px] text-xs tracking-[-0.02em] leading-[115.2%] flex items-center w-[52px] h-[10.86px]">
          Author:
        </p>
        <h3 className="m-0 absolute top-[130.29px] left-[38px] text-[inherit] tracking-[-0.02em] font-bold font-inherit text-center inline-block w-60 h-[21.72px]">
          NEW NFT LAUNCH!
        </h3>
        <div className="absolute top-[167.88px] left-[37px] h-[65.15px] overflow-y-auto flex flex-row p-0.5 box-border items-start justify-start text-center text-sm">
          <p className="m-0 relative tracking-[-0.02em] font-medium flex items-center justify-center w-[232px] shrink-0">{`We are Pleased to announce the launch of our integrated NFTs! `}</p>
        </div>
      </div>
      <button
        className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[920px] left-[94px] w-32 h-6"
        onClick={onNewPostClick}
      >
        <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[6px] left-[25px] text-xs tracking-[-0.02em] leading-[115.2%] font-source-code-pro text-white text-left flex items-center w-[103px] h-[13px]">
          New Post
        </button>
        <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[0px] left-[0px] text-xl tracking-[-0.02em] leading-[115.2%] font-bold font-source-code-pro text-white text-left flex items-center w-[17px] h-6">
          +
        </button>
      </button>
      <button
        className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[27px] left-[1230px] w-[146px] h-16"
        onClick={onProfileSettingsButtonClick}
      >
        <img
          className="absolute top-[21px] left-[122px] w-6 h-6 overflow-hidden"
          alt=""
          src="../settingssvgrepocom-18.svg"
        />
        <div className="absolute top-[0px] left-[0px] w-28 h-16 flex flex-row items-center justify-start">
          <img
            className="relative w-10 h-10 shrink-0"
            alt=""
            src="../mask-group30.svg"
          />
          <div className="flex flex-row p-2.5 items-start justify-start">
            <div className="relative text-xs tracking-[0.02em] font-semibold font-source-code-pro text-white text-center">
              NFTPlug01
            </div>
          </div>
        </div>
      </button>
      <input
        className="[border:none] bg-gainsboro-100 absolute top-[936px] left-[575px] rounded-3xl w-[365px] h-12"
        type="text"
        autoFocus
      />
      <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[936px] left-[944px] w-12 h-12 overflow-hidden">
        <img
          className="absolute h-[50.2%] w-[53.67%] top-[24.9%] right-[23.16%] bottom-[24.9%] left-[23.16%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="../vector4.svg"
        />
        <img
          className="absolute h-[1.8%] w-[26.11%] top-[49.1%] right-[41.86%] bottom-[49.1%] left-[32.03%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="../vector5.svg"
        />
      </button>
      <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[936px] left-[523px] w-12 h-12">
        <img
          className="absolute top-[0px] left-[0px] w-12 h-12"
          alt=""
          src="../ellipse-3.svg"
        />
        <img
          className="absolute top-[12px] left-[12px] w-6 h-6 overflow-hidden"
          alt=""
          src="../185066-picture-icon-1.svg"
        />
      </button>
      <label className="cursor-pointer absolute top-[945px] left-[720px] tracking-[0.02em] font-light font-merriweather text-gray-400 text-right flex items-center w-[55px] h-7">
        Message
      </label>
    </div>
  );
};

export default DAODashboardHome;
