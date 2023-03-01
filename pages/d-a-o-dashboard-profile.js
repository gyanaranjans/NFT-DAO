import { useCallback } from "react";
import { Box, Slider } from "@mui/material";
import { useRouter } from "next/router";

const DAODashboardProfile = () => {
  const router = useRouter();

  const onFrameContainerClick = useCallback(() => {
    router.push("/");
  }, [router]);

  const onProfileSettingsDissappearClick = useCallback(() => {
    router.push("/");
  }, [router]);

  return (
    <div className="relative bg-white w-full h-[1024px] overflow-hidden text-left text-xs text-white font-source-code-pro">
      <img
        className="absolute top-[0px] left-[0px] w-[1440px] h-[1024px]"
        alt=""
        src="../grad2.svg"
      />
      <div className="absolute top-[114px] left-[1066px] rounded-lg [background:linear-gradient(180deg,_rgba(171,_26,_139,_0.49),_rgba(0,_0,_0,_0.76)_13.38%)] w-[310px] h-[396px]" />
      <a className="[text-decoration:none] absolute top-[37px] left-[395px] flex flex-row p-2.5 items-center justify-start gap-[10px] text-[inherit]">
        <img
          className="relative w-[24.93px] h-6 shrink-0 overflow-hidden"
          alt=""
          src="../walletsvgrepocom-1.svg"
        />
        <div className="relative tracking-[-0.02em] font-light flex items-center w-[101px] h-[21px] shrink-0">
          Connect Wallet
        </div>
        <img
          className="relative w-[12.47px] h-3 shrink-0"
          alt=""
          src="../ellipse-2.svg"
        />
      </a>
      <div
        className="absolute top-[41px] left-[64px] w-[189px] h-[49px] flex flex-row py-2.5 px-0 box-border items-start justify-start cursor-pointer text-lg"
        onClick={onFrameContainerClick}
      >
        <b className="relative tracking-[-0.01em] leading-[80.36%] flex items-center w-[199px] shrink-0">
          NFTPlug DAO LOGO
        </b>
      </div>
      <div className="absolute top-[114px] left-[64px] rounded-lg [background:linear-gradient(180deg,_rgba(171,_26,_139,_0.49),_rgba(0,_0,_0,_0.76)_13.38%)] w-[310px] h-[396px]" />
      <div className="absolute top-[540px] left-[64px] rounded-lg [background:linear-gradient(180deg,_rgba(171,_26,_139,_0.49),_rgba(0,_0,_0,_0.76)_13.38%)] w-[310px] h-[443px]" />
      <div className="absolute top-[114px] left-[398px] rounded-lg [background:linear-gradient(180deg,_rgba(171,_26,_139,_0.49),_rgba(0,_0,_0,_0.76)_7.33%)] w-[644px] h-[878px]" />
      <div className="absolute top-[309px] left-[512px] h-[601px] overflow-y-auto flex flex-col items-start justify-start">
        <div className="relative w-[493px] h-[167px] shrink-0">
          <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[0px] left-[5px] w-[109px] h-[35px]">
            <img
              className="absolute top-[7.44px] left-[0px] w-[17.02px] h-[20.47px]"
              alt=""
              src="../mask-group.svg"
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
          <div className="absolute top-[31px] left-[0px] rounded-lg [background:linear-gradient(266.55deg,_#000,_rgba(255,_255,_255,_0)_90.22%)] w-[493px] flex flex-row p-2.5 box-border items-start justify-start text-sm">
            <div className="relative tracking-[0.01em] leading-[160%] flex items-center w-[482px] shrink-0">
              I have a feeling that almost anyone could use Chat GPT seeking to
              enhance some aspects of their routine. They just need to go "down
              the rabbit hole" a few times and they'll found many useful ideias
              to implement.
            </div>
          </div>
          <div className="absolute top-[12px] left-[335px] flex flex-row items-start justify-start">
            <div className="relative tracking-[-0.02em] leading-[115.2%]">
              Jan 5,2023
            </div>
          </div>
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
            src="../8687061-ic-fluent-emoji-add-regular-icon-1.svg"
          />
          <img
            className="absolute top-[147px] left-[14px] w-[18px] h-[18px] overflow-hidden"
            alt=""
            src="../4830808-emoji-kiss-smiley-icon-1.svg"
          />
          <div className="absolute top-[153px] left-[35px] flex flex-row items-start justify-start">
            <div className="relative tracking-[-0.02em] leading-[115.2%]">
              +13
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[135px] left-[167px] flex flex-row items-start justify-start text-lg">
        <div className="relative tracking-[-0.02em] leading-[80.36%] font-medium">
          Proposals
        </div>
      </div>
      <h3 className="m-0 absolute top-[125px] left-[588px] flex flex-row p-2.5 items-start justify-start text-lg font-inherit">
        <div className="relative tracking-[-0.02em] leading-[80.36%] font-medium">
          Community Discussions
        </div>
      </h3>
      <div className="absolute top-[560px] left-[143px] flex flex-row items-start justify-start text-lg">
        <div className="relative tracking-[-0.02em] leading-[80.36%] font-medium">
          Announcements
        </div>
      </div>
      <div className="absolute top-[173px] left-[94px] h-[245px] overflow-y-auto flex flex-col items-start justify-start gap-[40px] text-sm">
        <form className="relative w-[250px] h-[220px] shrink-0">
          <div className="absolute top-[0px] left-[0px] rounded-lg bg-darkslategray w-[250px] h-[220px]" />
          <Box className="absolute top-[167px] left-[56px]" sx={{ width: 109 }}>
            <Slider color="secondary" orientation="horizontal" />
          </Box>
          <div className="absolute top-[16px] left-[13px] text-base tracking-[-0.02em] leading-[162.2%] font-medium font-source-code-pro text-white text-left flex items-center w-56">
            Plugdev01 to take charge of charity disbursements for the community.
          </div>
          <b className="absolute top-[181px] left-[13px] text-sm tracking-[0.05em] flex font-source-code-pro text-darkolivegreen-100 text-left items-center w-[121px] h-[31px]">{`Proposed By: `}</b>
          <div className="absolute top-[184px] left-[165px] w-[72px] h-6 flex flex-row items-center justify-start">
            <img
              className="relative w-4 h-4 shrink-0"
              alt=""
              src="../mask-group1.svg"
            />
            <div className="flex flex-row items-start justify-start">
              <div className="relative text-2xs tracking-[0.02em] font-black font-source-code-pro text-white text-center">
                NFTPlug01
              </div>
            </div>
          </div>
          <b className="absolute top-[123px] left-[209px] text-sm tracking-[0.05em] flex font-source-code-pro text-white text-left items-center w-[38px] h-[19px]">
            29%
          </b>
          <b className="absolute top-[155px] left-[209px] text-sm tracking-[0.05em] flex font-source-code-pro text-white text-left items-center w-[38px] h-[25px]">
            71%
          </b>
          <b className="absolute top-[122px] left-[13px] text-sm tracking-[0.05em] flex font-source-code-pro text-white text-left items-center w-[41px] h-[21px]">
            Yes
          </b>
          <b className="absolute top-[152px] left-[13px] text-sm tracking-[0.05em] flex font-source-code-pro text-white text-left items-center w-[29px] h-[30px]">
            No
          </b>
          <button className="cursor-pointer p-0 bg-[transparent] absolute top-[132.5px] left-[56.99px] box-border w-[45.01px] h-0 border-[2px] border-solid border-mediumspringgreen" />
        </form>
        <div className="relative w-[250px] h-[220px] shrink-0">
          <div className="absolute top-[0px] left-[0px] rounded-lg bg-darkslategray w-[250px] h-[220px]" />
          <Box className="absolute top-[167px] left-[56px]" sx={{ width: 109 }}>
            <Slider color="secondary" orientation="horizontal" />
          </Box>
          <div className="absolute top-[16px] left-[13px] text-base tracking-[-0.02em] leading-[162.2%] font-medium flex items-center w-56">
            Plugdev01 to take charge of charity disbursements for the community.
          </div>
          <b className="absolute top-[181px] left-[13px] tracking-[0.05em] flex text-darkolivegreen-100 items-center w-[121px] h-[31px]">{`Proposed By: `}</b>
          <div className="absolute top-[184px] left-[165px] w-[72px] h-6 flex flex-row items-center justify-start text-center text-2xs">
            <img className="relative w-4 h-4 shrink-0" alt="" />
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
          <b className="absolute top-[152px] left-[13px] tracking-[0.05em] flex items-center w-[29px] h-[30px]">
            No
          </b>
          <img
            className="absolute top-[132.5px] left-[56.99px] w-[45.01px] h-0"
            alt=""
          />
        </div>
        <div className="relative w-[250px] h-[220px] shrink-0">
          <div className="absolute top-[0px] left-[0px] rounded-lg bg-darkslategray w-[250px] h-[220px]" />
          <Box className="absolute top-[167px] left-[56px]" sx={{ width: 109 }}>
            <Slider color="secondary" orientation="horizontal" />
          </Box>
          <div className="absolute top-[16px] left-[13px] text-base tracking-[-0.02em] leading-[162.2%] font-medium flex items-center w-56">
            Plugdev01 to take charge of charity disbursements for the community.
          </div>
          <b className="absolute top-[181px] left-[13px] tracking-[0.05em] flex text-darkolivegreen-100 items-center w-[121px] h-[31px]">{`Proposed By: `}</b>
          <div className="absolute top-[184px] left-[165px] w-[72px] h-6 flex flex-row items-center justify-start text-center text-2xs">
            <img className="relative w-4 h-4 shrink-0" alt="" />
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
          <b className="absolute top-[152px] left-[13px] tracking-[0.05em] flex items-center w-[29px] h-[30px]">
            No
          </b>
          <img
            className="absolute top-[132.5px] left-[56.99px] w-[45.01px] h-0"
            alt=""
          />
        </div>
        <div className="relative w-[250px] h-[220px] shrink-0">
          <div className="absolute top-[0px] left-[0px] rounded-lg bg-darkslategray w-[250px] h-[220px]" />
          <Box className="absolute top-[167px] left-[56px]" sx={{ width: 109 }}>
            <Slider color="secondary" orientation="horizontal" />
          </Box>
          <div className="absolute top-[16px] left-[13px] text-base tracking-[-0.02em] leading-[162.2%] font-medium flex items-center w-56">
            Plugdev01 to take charge of charity disbursements for the community.
          </div>
          <b className="absolute top-[181px] left-[13px] tracking-[0.05em] flex text-darkolivegreen-100 items-center w-[121px] h-[31px]">{`Proposed By: `}</b>
          <div className="absolute top-[184px] left-[165px] w-[72px] h-6 flex flex-row items-center justify-start text-center text-2xs">
            <img className="relative w-4 h-4 shrink-0" alt="" />
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
          <b className="absolute top-[152px] left-[13px] tracking-[0.05em] flex items-center w-[29px] h-[30px]">
            No
          </b>
          <img
            className="absolute top-[132.5px] left-[56.99px] w-[45.01px] h-0"
            alt=""
          />
        </div>
      </div>
      <div className="absolute top-[350px] left-[401px] flex flex-col items-end justify-start gap-[2px] text-right">
        <div className="relative tracking-[-0.02em] leading-[115.2%] flex items-center w-[103px] h-6 shrink-0">
          All Members
        </div>
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
      <div className="absolute top-[189px] left-[520px] tracking-[-0.02em] leading-[115.2%] flex items-center w-[70px] h-8">
        Admins:
      </div>
      <div className="absolute top-[226px] left-[526px] w-60 h-[54px] overflow-hidden text-center text-2xs">
        <div className="absolute top-[0px] left-[0px] w-[67px] h-[54.43px]">
          <img
            className="absolute top-[0px] left-[17.15px] w-[35.98px] h-[33.17px]"
            alt=""
            src="../mask-group2.svg"
          />
          <div className="absolute top-[26px] left-[0px] w-[67px] h-[28.43px] overflow-hidden flex flex-row p-2.5 box-border items-start justify-start">
            <div className="relative tracking-[-0.04em]">NFTPlug01</div>
          </div>
        </div>
        <div className="absolute top-[0px] left-[83px] w-[67px] h-[54.43px]">
          <img
            className="absolute top-[0px] left-[17.15px] w-[35.98px] h-[33.17px]"
            alt=""
            src="../mask-group3.svg"
          />
          <div className="absolute top-[26px] left-[0px] w-[67px] h-[28.43px] overflow-hidden flex flex-row p-2.5 box-border items-start justify-start">
            <div className="relative tracking-[-0.04em]">NFTPlug01</div>
          </div>
        </div>
        <div className="absolute top-[0px] left-[166px] w-[67px] h-[54.43px]">
          <img
            className="absolute top-[0px] left-[17.15px] w-[35.98px] h-[33.17px]"
            alt=""
            src="../mask-group4.svg"
          />
          <div className="absolute top-[26px] left-[0px] w-[67px] h-[28.43px] overflow-hidden flex flex-row p-2.5 box-border items-start justify-start">
            <div className="relative tracking-[-0.04em]">NFTPlug01</div>
          </div>
        </div>
        <div className="absolute top-[0px] left-[249px] w-[67px] h-[54.43px] text-mediumspringgreen">
          <img
            className="absolute top-[0px] left-[17.15px] w-[35.98px] h-[33.17px]"
            alt=""
          />
          <div className="absolute top-[26px] left-[0px] w-[67px] h-[28.43px] overflow-hidden flex flex-row p-2.5 box-border items-start justify-start">
            <div className="relative tracking-[-0.04em]">NFTPlug01</div>
          </div>
        </div>
        <div className="absolute top-[0px] left-[332px] w-[67px] h-[54.43px] text-mediumspringgreen">
          <img
            className="absolute top-[0px] left-[17.15px] w-[35.98px] h-[33.17px]"
            alt=""
          />
          <div className="absolute top-[26px] left-[0px] w-[67px] h-[28.43px] overflow-hidden flex flex-row p-2.5 box-border items-start justify-start">
            <div className="relative tracking-[-0.04em]">NFTPlug01</div>
          </div>
        </div>
        <div className="absolute top-[0px] left-[415px] w-[67px] h-[54.43px] text-mediumspringgreen">
          <img
            className="absolute top-[0px] left-[17.15px] w-[35.98px] h-[33.17px]"
            alt=""
          />
          <div className="absolute top-[26px] left-[0px] w-[67px] h-[28.43px] overflow-hidden flex flex-row p-2.5 box-border items-start justify-start">
            <div className="relative tracking-[-0.04em]">NFTPlug01</div>
          </div>
        </div>
      </div>
      <div className="absolute top-[201px] left-[834px] w-[78px] h-[76px] text-center">
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
      <div className="absolute top-[201px] left-[920px] w-[78px] h-[76px] text-center">
        <div className="absolute top-[0px] left-[0px] rounded bg-darkolivegreen-100 w-[78px] h-[76px]" />
        <b className="absolute top-[17px] left-[14px] tracking-[-0.04em] leading-[96%] flex items-center justify-center w-12 h-[18px]">
          Online Members
        </b>
        <b className="absolute top-[41px] left-[13px] tracking-[-0.04em] flex items-center justify-center w-[52px] h-5">
          12,300
        </b>
      </div>
      <div className="absolute top-[432px] left-[93px] w-32 h-6">
        <div className="absolute top-[6px] left-[25px] tracking-[-0.02em] leading-[115.2%] flex items-center w-[103px] h-[13px]">
          New Proposal
        </div>
        <b className="absolute top-[0px] left-[0px] text-xl tracking-[-0.02em] leading-[115.2%] flex items-center w-[17px] h-6">
          +
        </b>
      </div>
      <div className="absolute top-[471px] left-[94px] w-[58px] h-6">
        <div className="absolute top-[0px] left-[24px] tracking-[-0.02em] leading-[115.2%] flex items-center w-[34px] h-6">
          Vote
        </div>
        <img
          className="absolute top-[4px] left-[0px] w-4 h-4 overflow-hidden"
          alt=""
          src="../326568-check-circle-icon-1.svg"
        />
      </div>
      <div className="absolute top-[657px] left-[94px] rounded-lg bg-darkslategray w-[250px] h-[220px]" />
      <div className="absolute top-[834px] left-[207px] flex flex-row p-2.5 items-start justify-start text-2xs text-palegreen">
        <div className="relative tracking-[0.02em]">topdev01</div>
      </div>
      <div className="absolute top-[843px] left-[161px] tracking-[-0.02em] leading-[115.2%] flex items-center w-[52px] h-[13px]">
        Author:
      </div>
      <b className="absolute top-[696px] left-[102px] text-lg tracking-[-0.02em] inline-block text-whitesmoke text-center w-60 h-[26px]">
        NEW NFT LAUNCH!
      </b>
      <div className="absolute top-[741px] left-[101px] h-[78px] overflow-y-auto flex flex-row p-0.5 box-border items-start justify-start text-center text-sm">
        <div className="relative tracking-[-0.02em] font-medium flex items-center justify-center w-[232px] shrink-0">{`We are Pleased to announce the launch of our integrated NFTs! `}</div>
      </div>
      <div
        className="absolute top-[27px] left-[1230px] w-[146px] h-16 cursor-pointer text-center text-2xs"
        onClick={onProfileSettingsDissappearClick}
      >
        <img
          className="absolute top-[21px] left-[122px] w-6 h-6 overflow-hidden"
          alt=""
          src="../settingssvgrepocom-1.svg"
        />
        <div className="absolute top-[0px] left-[0px] w-28 h-16 flex flex-row items-center justify-start">
          <img
            className="relative w-10 h-10 shrink-0"
            alt=""
            src="../mask-group5.svg"
          />
          <div className="flex flex-row p-2.5 items-start justify-start">
            <div className="relative tracking-[0.02em] font-semibold">
              NFTPlug01
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[629px] left-[126px]" />
      <textarea className="[border:none] bg-gainsboro-100 absolute top-[936px] left-[575px] rounded-3xl w-[365px] h-12" />
      <img
        className="absolute top-[936px] left-[944px] w-12 h-12 overflow-hidden"
        alt=""
        src="../6934310-delivery-send-share-icon-1.svg"
      />
      <img
        className="absolute top-[936px] left-[523px] w-12 h-12"
        alt=""
        src="../group-65.svg"
      />
      <div className="absolute top-[945px] left-[720px] tracking-[0.02em] font-light font-merriweather text-gray-400 text-right flex items-center w-[55px] h-7">
        Message
      </div>
      <h3 className="m-0 absolute top-[125px] left-[1118px] flex flex-row p-2.5 items-start justify-start text-lg font-inherit">
        <div className="relative tracking-[-0.02em] leading-[80.36%] font-medium">
          Profile Settings
        </div>
      </h3>
      <label className="absolute top-[193px] left-[1093px] tracking-[-0.02em] leading-[115.2%] flex items-center w-[57px] h-6">
        Name:
      </label>
      <p className="m-0 absolute top-[241px] left-[1093px] tracking-[-0.02em] leading-[115.2%] flex items-center w-[83px] h-6">
        Color:
      </p>
      <div className="absolute top-[289px] left-[1093px] tracking-[-0.02em] leading-[115.2%] flex items-center w-[151px] h-6">
        Pop-up Notifications:
      </div>
      <input
        className="cursor-pointer absolute top-[241px] left-[1248px] rounded bg-mediumspringgreen w-6 h-6"
        type="checkbox"
      />
      <input
        className="cursor-pointer absolute top-[241px] left-[1284px] rounded bg-mediumvioletred w-6 h-6"
        type="checkbox"
      />
      <input
        className="cursor-pointer absolute top-[241px] left-[1320px] rounded bg-lightcoral w-6 h-6"
        type="checkbox"
      />
      <div className="absolute top-[193px] left-[1248px] rounded bg-gainsboro-200 w-24 h-6" />
      <p className="m-0 absolute top-[198px] left-[1250px] w-[93px] overflow-hidden flex flex-row items-start justify-start text-center">
        <div className="relative tracking-[-0.02em] leading-[115.2%]">
          Anthony
        </div>
      </p>
      <div className="absolute top-[289px] left-[1248px] tracking-[-0.02em] leading-[115.2%] flex items-center w-[18px] h-6">
        On
      </div>
      <div className="absolute top-[289px] left-[1322px] tracking-[-0.02em] leading-[115.2%] flex items-center w-6 h-6">
        Off
      </div>
      <img
        className="absolute top-[298.11px] left-[1270px] w-[44.89px] h-[5.77px]"
        alt=""
        src="../arrow-3.svg"
      />
    </div>
  );
};

export default DAODashboardProfile;
