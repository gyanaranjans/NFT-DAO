import { useCallback } from "react";
import { Box, Slider } from "@mui/material";
import PoolCard from "../components/pool-card";
import { useRouter } from "next/router";
import PoolArticle from "../components/pool-article";

const DAODashboardProposals = () => {
  const router = useRouter();

  const onFrameContainer4Click = useCallback(() => {
    router.push("/");
  }, [router]);

  const onProfileSettingsButtonClick = useCallback(() => {
    router.push("/d-a-o-dashboard-profile");
  }, [router]);

  const onNewPropsalButtonClick = useCallback(() => {
    router.push("/new-proposal");
  }, [router]);

  return (
    <div className="relative bg-white w-full h-[1024px] overflow-hidden text-left text-sm text-white font-source-code-pro">
      <img
        className="absolute top-[0px] left-[0px] w-[1440px] h-[1024px]"
        alt=""
        src="../grad4.svg"
      />
      <div className="absolute top-[180px] left-[54px] w-[250px] h-[220px]">
        <PoolCard />
        <Box className="absolute top-[167px] left-[56px]" sx={{ width: 109 }}>
          <Slider color="secondary" orientation="horizontal" />
        </Box>
        <div className="absolute top-[16px] left-[13px] text-base tracking-[-0.02em] leading-[162.2%] font-medium flex items-center w-56">
          Plugdev01 to take charge of charity disbursements for the community.
        </div>
        <b className="absolute top-[181px] left-[13px] tracking-[0.05em] flex text-darkolivegreen-100 items-center w-[121px] h-[31px]">{`Proposed By: `}</b>
        <div className="absolute top-[184px] left-[165px] w-[72px] h-6 flex flex-row items-center justify-start text-center text-2xs">
          <img
            className="relative w-4 h-4 shrink-0"
            alt=""
            src="../mask-group13.svg"
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
        <b className="absolute top-[152px] left-[13px] tracking-[0.05em] flex items-center w-[29px] h-[30px]">
          No
        </b>
        <img
          className="absolute top-[126.73px] left-[56.99px] w-[50.78px] h-[11.55px]"
          alt=""
          src="../arrow-1.svg"
        />
      </div>
      <div className="absolute top-[440px] left-[54px] w-[250px] h-[220px]">
        <PoolCard />
        <Box className="absolute top-[167px] left-[56px]" sx={{ width: 109 }}>
          <Slider color="secondary" orientation="horizontal" />
        </Box>
        <div className="absolute top-[16px] left-[13px] text-base tracking-[-0.02em] leading-[162.2%] font-medium flex items-center w-56">
          Plugdev01 to take charge of charity disbursements for the community.
        </div>
        <b className="absolute top-[181px] left-[13px] tracking-[0.05em] flex text-darkolivegreen-100 items-center w-[121px] h-[31px]">{`Proposed By: `}</b>
        <div className="absolute top-[184px] left-[165px] w-[72px] h-6 flex flex-row items-center justify-start text-center text-2xs">
          <img
            className="relative w-4 h-4 shrink-0"
            alt=""
            src="../mask-group14.svg"
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
        <b className="absolute top-[152px] left-[13px] tracking-[0.05em] flex items-center w-[29px] h-[30px]">
          No
        </b>
        <img
          className="absolute top-[126.73px] left-[56.99px] w-[50.78px] h-[11.55px]"
          alt=""
          src="../arrow-1.svg"
        />
      </div>
      <div className="absolute top-[700px] left-[54px] w-[250px] h-[220px]">
        <PoolCard />
        <Box className="absolute top-[167px] left-[56px]" sx={{ width: 109 }}>
          <Slider color="secondary" orientation="horizontal" />
        </Box>
        <div className="absolute top-[16px] left-[13px] text-base tracking-[-0.02em] leading-[162.2%] font-medium flex items-center w-56">
          Plugdev01 to take charge of charity disbursements for the community.
        </div>
        <b className="absolute top-[181px] left-[13px] tracking-[0.05em] flex text-darkolivegreen-100 items-center w-[121px] h-[31px]">{`Proposed By: `}</b>
        <div className="absolute top-[184px] left-[165px] w-[72px] h-6 flex flex-row items-center justify-start text-center text-2xs">
          <img
            className="relative w-4 h-4 shrink-0"
            alt=""
            src="../mask-group15.svg"
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
        <b className="absolute top-[152px] left-[13px] tracking-[0.05em] flex items-center w-[29px] h-[30px]">
          No
        </b>
        <img
          className="absolute top-[126.73px] left-[56.99px] w-[50.78px] h-[11.55px]"
          alt=""
          src="../arrow-1.svg"
        />
      </div>
      <div className="absolute top-[112px] left-[64px] text-lg tracking-[-0.02em] leading-[80.36%] font-medium">
        Latest Proposals
      </div>
      <div className="absolute top-[112px] left-[591px] flex flex-row items-start justify-start text-lg">
        <div className="relative tracking-[-0.02em] leading-[80.36%] font-semibold">
          Proposals
        </div>
      </div>
      <div
        className="absolute top-[41px] left-[64px] w-[189px] h-[49px] flex flex-row py-2.5 px-0 box-border items-start justify-start cursor-pointer text-lg"
        onClick={onFrameContainer4Click}
      >
        <b className="relative tracking-[-0.01em] leading-[80.36%] flex items-center w-[199px] shrink-0">
          NFTPlug DAO LOGO
        </b>
      </div>
      <div
        className="absolute top-[27px] left-[1230px] w-[146px] h-16 cursor-pointer text-center text-2xs"
        onClick={onProfileSettingsButtonClick}
      >
        <img
          className="absolute top-[21px] left-[122px] w-6 h-6 overflow-hidden"
          alt=""
          src="../settingssvgrepocom-12.svg"
        />
        <div className="absolute top-[0px] left-[0px] w-28 h-16 flex flex-row items-center justify-start">
          <img
            className="relative w-10 h-10 shrink-0"
            alt=""
            src="../mask-group16.svg"
          />
          <div className="flex flex-row p-2.5 items-start justify-start">
            <div className="relative tracking-[0.02em] font-semibold">
              NFTPlug01
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[180px] left-[328px] h-[740px] overflow-y-auto flex flex-col items-start justify-start gap-[40px]">
        <div className="relative w-[696px] h-[220px] shrink-0">
          <PoolArticle />
          <p className="m-0 absolute top-[36px] left-[14px] w-[666px] h-[88px] overflow-hidden flex flex-row p-1 box-border items-start justify-start text-base">
            <div className="relative tracking-[-0.02em] leading-[162.2%] font-medium flex items-center w-[701px] shrink-0">
              Plugdev01 to take charge of charity disbursements for the
              community, Plugdev01 to take charge of charity disbursements for
              the community., Plugdev01 to take charge of charity disbursements
              for the community, Plugdev01 to take charge of charity
              disbursements for the community, Plugdev01 to take charge of
              charity disbursements for the community, Plugdev01 to take charge
              of charity disbursements for the community, Plugdev01 to take
              charge of charity disbursements for the community. Plugdev01 to
              take charge of charity disbursements for the community, Plugdev01
              to take charge of charity disbursements for the community.,
              Plugdev01 to take charge of charity disbursements for the
              community, Plugdev01 to take charge of charity disbursements for
              the community, Plugdev01 to take charge of charity disbursements
              for the community, Plugdev01 to take charge of charity
              disbursements for the community, Plugdev01 to take charge of
              charity disbursements for the community.
            </div>
          </p>
          <button className="cursor-pointer [border:none] py-1 px-2 bg-darkolivegreen-100 absolute top-[170px] left-[19px] rounded flex flex-row items-start justify-start">
            <b className="relative text-sm tracking-[0.05em] font-source-code-pro text-white text-center">
              <p className="[margin-block-start:0] [margin-block-end:0px]">
                Vote
              </p>
              <p className="m-0">Yes</p>
            </b>
          </button>
          <button className="cursor-pointer [border:none] py-1 px-2 bg-red absolute top-[170px] left-[250px] rounded flex flex-row items-start justify-start">
            <b className="relative text-sm tracking-[0.05em] font-source-code-pro text-white text-center">
              <p className="[margin-block-start:0] [margin-block-end:0px]">
                Vote
              </p>
              <p className="m-0">No</p>
            </b>
          </button>
          <img
            className="absolute top-[182.73px] left-[76.99px] w-[50.78px] h-[11.55px]"
            alt=""
            src="../arrow-1.svg"
          />
          <Box
            className="absolute top-[198px] left-[134px]"
            sx={{ width: 109 }}
          >
            <Slider color="secondary" orientation="horizontal" />
          </Box>
          <b className="absolute top-[191px] left-[76px] tracking-[0.05em] flex items-center w-[38px] h-[19px]">
            29%
          </b>
          <b className="absolute top-[178px] left-[208px] tracking-[0.05em] flex items-center w-[35px] h-3.5">
            71%
          </b>
          <h3 className="m-0 absolute top-[180px] left-[389px] text-lg tracking-[0.05em] font-bold font-inherit text-mediumspringgreen flex items-center w-[164px] h-[31px]">{`Proposed By: `}</h3>
          <div className="absolute top-[184px] left-[584px] w-[72px] h-6 flex flex-row items-center justify-start text-center text-2xs">
            <img
              className="relative w-4 h-4 shrink-0"
              alt=""
              src="../mask-group17.svg"
            />
            <div className="flex flex-row items-start justify-start">
              <div className="relative tracking-[0.02em] font-black">
                NFTPlug01
              </div>
            </div>
          </div>
        </div>
        <div className="relative w-[696px] h-[220px] shrink-0">
          <PoolArticle />
          <p className="m-0 absolute top-[36px] left-[14px] w-[666px] h-[88px] overflow-hidden flex flex-row p-1 box-border items-start justify-start text-base">
            <div className="relative tracking-[-0.02em] leading-[162.2%] font-medium flex items-center w-[701px] shrink-0">
              Plugdev01 to take charge of charity disbursements for the
              community, Plugdev01 to take charge of charity disbursements for
              the community., Plugdev01 to take charge of charity disbursements
              for the community, Plugdev01 to take charge of charity
              disbursements for the community, Plugdev01 to take charge of
              charity disbursements for the community, Plugdev01 to take charge
              of charity disbursements for the community, Plugdev01 to take
              charge of charity disbursements for the community. Plugdev01 to
              take charge of charity disbursements for the community, Plugdev01
              to take charge of charity disbursements for the community.,
              Plugdev01 to take charge of charity disbursements for the
              community, Plugdev01 to take charge of charity disbursements for
              the community, Plugdev01 to take charge of charity disbursements
              for the community, Plugdev01 to take charge of charity
              disbursements for the community, Plugdev01 to take charge of
              charity disbursements for the community.
            </div>
          </p>
          <button className="cursor-pointer [border:none] py-1 px-2 bg-darkolivegreen-100 absolute top-[170px] left-[19px] rounded flex flex-row items-start justify-start">
            <b className="relative text-sm tracking-[0.05em] font-source-code-pro text-white text-center">
              <p className="[margin-block-start:0] [margin-block-end:0px]">
                Vote
              </p>
              <p className="m-0">Yes</p>
            </b>
          </button>
          <button className="cursor-pointer [border:none] py-1 px-2 bg-red absolute top-[170px] left-[250px] rounded flex flex-row items-start justify-start">
            <b className="relative text-sm tracking-[0.05em] font-source-code-pro text-white text-center">
              <p className="[margin-block-start:0] [margin-block-end:0px]">
                Vote
              </p>
              <p className="m-0">No</p>
            </b>
          </button>
          <img
            className="absolute top-[182.73px] left-[76.99px] w-[50.78px] h-[11.55px]"
            alt=""
            src="../arrow-1.svg"
          />
          <Box
            className="absolute top-[198px] left-[134px]"
            sx={{ width: 109 }}
          >
            <Slider color="secondary" orientation="horizontal" />
          </Box>
          <b className="absolute top-[191px] left-[76px] tracking-[0.05em] flex items-center w-[38px] h-[19px]">
            29%
          </b>
          <b className="absolute top-[178px] left-[208px] tracking-[0.05em] flex items-center w-[35px] h-3.5">
            71%
          </b>
          <h3 className="m-0 absolute top-[180px] left-[389px] text-lg tracking-[0.05em] font-bold font-inherit text-mediumspringgreen flex items-center w-[164px] h-[31px]">{`Proposed By: `}</h3>
          <div className="absolute top-[184px] left-[584px] w-[72px] h-6 flex flex-row items-center justify-start text-center text-2xs">
            <img
              className="relative w-4 h-4 shrink-0"
              alt=""
              src="../mask-group18.svg"
            />
            <div className="flex flex-row items-start justify-start">
              <div className="relative tracking-[0.02em] font-black">
                NFTPlug01
              </div>
            </div>
          </div>
        </div>
        <div className="relative w-[696px] h-[220px] shrink-0">
          <PoolArticle />
          <p className="m-0 absolute top-[36px] left-[14px] w-[666px] h-[88px] overflow-hidden flex flex-row p-1 box-border items-start justify-start text-base">
            <div className="relative tracking-[-0.02em] leading-[162.2%] font-medium flex items-center w-[701px] shrink-0">
              Plugdev01 to take charge of charity disbursements for the
              community, Plugdev01 to take charge of charity disbursements for
              the community., Plugdev01 to take charge of charity disbursements
              for the community, Plugdev01 to take charge of charity
              disbursements for the community, Plugdev01 to take charge of
              charity disbursements for the community, Plugdev01 to take charge
              of charity disbursements for the community, Plugdev01 to take
              charge of charity disbursements for the community. Plugdev01 to
              take charge of charity disbursements for the community, Plugdev01
              to take charge of charity disbursements for the community.,
              Plugdev01 to take charge of charity disbursements for the
              community, Plugdev01 to take charge of charity disbursements for
              the community, Plugdev01 to take charge of charity disbursements
              for the community, Plugdev01 to take charge of charity
              disbursements for the community, Plugdev01 to take charge of
              charity disbursements for the community.
            </div>
          </p>
          <button className="cursor-pointer [border:none] py-1 px-2 bg-darkolivegreen-100 absolute top-[170px] left-[19px] rounded flex flex-row items-start justify-start">
            <b className="relative text-sm tracking-[0.05em] font-source-code-pro text-white text-center">
              <p className="[margin-block-start:0] [margin-block-end:0px]">
                Vote
              </p>
              <p className="m-0">Yes</p>
            </b>
          </button>
          <button className="cursor-pointer [border:none] py-1 px-2 bg-red absolute top-[170px] left-[250px] rounded flex flex-row items-start justify-start">
            <b className="relative text-sm tracking-[0.05em] font-source-code-pro text-white text-center">
              <p className="[margin-block-start:0] [margin-block-end:0px]">
                Vote
              </p>
              <p className="m-0">No</p>
            </b>
          </button>
          <img
            className="absolute top-[182.73px] left-[76.99px] w-[50.78px] h-[11.55px]"
            alt=""
            src="../arrow-1.svg"
          />
          <Box
            className="absolute top-[198px] left-[134px]"
            sx={{ width: 109 }}
          >
            <Slider color="secondary" orientation="horizontal" />
          </Box>
          <b className="absolute top-[191px] left-[76px] tracking-[0.05em] flex items-center w-[38px] h-[19px]">
            29%
          </b>
          <b className="absolute top-[178px] left-[208px] tracking-[0.05em] flex items-center w-[35px] h-3.5">
            71%
          </b>
          <h3 className="m-0 absolute top-[180px] left-[389px] text-lg tracking-[0.05em] font-bold font-inherit text-mediumspringgreen flex items-center w-[164px] h-[31px]">{`Proposed By: `}</h3>
          <div className="absolute top-[184px] left-[584px] w-[72px] h-6 flex flex-row items-center justify-start text-center text-2xs">
            <img
              className="relative w-4 h-4 shrink-0"
              alt=""
              src="../mask-group19.svg"
            />
            <div className="flex flex-row items-start justify-start">
              <div className="relative tracking-[0.02em] font-black">
                NFTPlug01
              </div>
            </div>
          </div>
        </div>
        <div className="relative w-[696px] h-[220px] shrink-0">
          <PoolArticle />
          <p className="m-0 absolute top-[36px] left-[14px] w-[666px] h-[88px] overflow-hidden flex flex-row p-1 box-border items-start justify-start text-base">
            <div className="relative tracking-[-0.02em] leading-[162.2%] font-medium flex items-center w-[701px] shrink-0">
              Plugdev01 to take charge of charity disbursements for the
              community, Plugdev01 to take charge of charity disbursements for
              the community., Plugdev01 to take charge of charity disbursements
              for the community, Plugdev01 to take charge of charity
              disbursements for the community, Plugdev01 to take charge of
              charity disbursements for the community, Plugdev01 to take charge
              of charity disbursements for the community, Plugdev01 to take
              charge of charity disbursements for the community. Plugdev01 to
              take charge of charity disbursements for the community, Plugdev01
              to take charge of charity disbursements for the community.,
              Plugdev01 to take charge of charity disbursements for the
              community, Plugdev01 to take charge of charity disbursements for
              the community, Plugdev01 to take charge of charity disbursements
              for the community, Plugdev01 to take charge of charity
              disbursements for the community, Plugdev01 to take charge of
              charity disbursements for the community.
            </div>
          </p>
          <button className="cursor-pointer [border:none] py-1 px-2 bg-darkolivegreen-100 absolute top-[170px] left-[19px] rounded flex flex-row items-start justify-start">
            <b className="relative text-sm tracking-[0.05em] font-source-code-pro text-white text-center">
              <p className="[margin-block-start:0] [margin-block-end:0px]">
                Vote
              </p>
              <p className="m-0">Yes</p>
            </b>
          </button>
          <button className="cursor-pointer [border:none] py-1 px-2 bg-red absolute top-[170px] left-[250px] rounded flex flex-row items-start justify-start">
            <b className="relative text-sm tracking-[0.05em] font-source-code-pro text-white text-center">
              <p className="[margin-block-start:0] [margin-block-end:0px]">
                Vote
              </p>
              <p className="m-0">No</p>
            </b>
          </button>
          <img
            className="absolute top-[188.5px] left-[76.99px] w-[45.01px] h-0"
            alt=""
          />
          <Box
            className="absolute top-[198px] left-[134px]"
            sx={{ width: 109 }}
          >
            <Slider color="secondary" orientation="horizontal" />
          </Box>
          <b className="absolute top-[191px] left-[76px] tracking-[0.05em] flex items-center w-[38px] h-[19px]">
            29%
          </b>
          <b className="absolute top-[178px] left-[208px] tracking-[0.05em] flex items-center w-[35px] h-3.5">
            71%
          </b>
          <h3 className="m-0 absolute top-[180px] left-[389px] text-lg tracking-[0.05em] font-bold font-inherit text-mediumspringgreen flex items-center w-[164px] h-[31px]">{`Proposed By: `}</h3>
          <div className="absolute top-[184px] left-[584px] w-[72px] h-6 flex flex-row items-center justify-start text-center text-2xs">
            <img className="relative w-4 h-4 shrink-0" alt="" />
            <div className="flex flex-row items-start justify-start">
              <div className="relative tracking-[0.02em] font-black">
                NFTPlug01
              </div>
            </div>
          </div>
        </div>
      </div>
      <button
        className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[180px] left-[1256px] w-[120px] h-20"
        onClick={onNewPropsalButtonClick}
      >
        <div className="absolute top-[0px] left-[0px] rounded-lg bg-darkolivegreen-100 w-[120px] h-20" />
        <div className="absolute top-[28px] left-[9px] w-[102px] h-6">
          <div className="absolute top-[5px] left-[15px] text-xs tracking-[-0.02em] leading-[115.2%] font-source-code-pro text-white text-left flex items-center w-[87px] h-[13px]">
            New Proposal
          </div>
          <b className="absolute top-[0px] left-[0px] text-base tracking-[-0.02em] leading-[115.2%] flex font-source-code-pro text-white text-left items-center w-[17px] h-6">
            +
          </b>
        </div>
      </button>
    </div>
  );
};

export default DAODashboardProposals;
