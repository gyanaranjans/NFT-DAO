import { useCallback } from "react";
import { Box, Slider } from "@mui/material";
import { useRouter } from "next/router";
import PoolCard from "../components/pool-card";
import PoolArticle from "../components/pool-article";

const NewProposal = () => {
  const router = useRouter();

  const onNewPropsalButtonClick = useCallback(() => {
    router.push("/proposal-success");
  }, [router]);

  const onFrameContainer3Click = useCallback(() => {
    router.push("/");
  }, [router]);

  const onProfileSettingsButtonClick = useCallback(() => {
    router.push("/d-a-o-dashboard-profile");
  }, [router]);

  return (
    <div className="relative bg-white w-full h-[1024px] overflow-hidden text-left text-lg text-white font-source-code-pro">
      <img
        className="absolute top-[0px] left-[0px] w-[1440px] h-[1024px]"
        alt=""
        src="../grad3.svg"
      />
      <button
        className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[440px] left-[1182px] w-[120px] h-20"
        onClick={onNewPropsalButtonClick}
      >
        <button className="cursor-pointer [border:none] p-0 bg-darkolivegreen-100 absolute top-[0px] left-[0px] rounded-lg w-[120px] h-20" />
        <div className="absolute top-[26px] left-[28px] w-[63px] h-[27px]">
          <div className="absolute top-[0px] left-[0px] text-xs tracking-[-0.02em] leading-[115.2%] font-source-code-pro text-white text-center flex items-center justify-center w-[63px] h-[27px]">
            Submit Proposal
          </div>
        </div>
      </button>
      <article className="absolute top-[180px] left-[54px] w-[250px] h-[220px] text-left text-sm text-white font-source-code-pro">
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
            src="../mask-group6.svg"
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
      </article>
      <article className="absolute top-[440px] left-[54px] w-[250px] h-[220px] text-left text-sm text-white font-source-code-pro">
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
            src="../mask-group7.svg"
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
      </article>
      <article className="absolute top-[700px] left-[54px] w-[250px] h-[220px] text-left text-sm text-white font-source-code-pro">
        <PoolCard />
        <img
          className="absolute top-[161.23px] left-[56px] w-[114.77px] h-[11.55px]"
          alt=""
          src="../arrow-2.svg"
        />
        <div className="absolute top-[16px] left-[13px] text-base tracking-[-0.02em] leading-[162.2%] font-medium flex items-center w-56">
          Plugdev01 to take charge of charity disbursements for the community.
        </div>
        <b className="absolute top-[181px] left-[13px] tracking-[0.05em] flex text-darkolivegreen-100 items-center w-[121px] h-[31px]">{`Proposed By: `}</b>
        <div className="absolute top-[184px] left-[165px] w-[72px] h-6 flex flex-row items-center justify-start text-center text-2xs">
          <img
            className="relative w-4 h-4 shrink-0"
            alt=""
            src="../mask-group8.svg"
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
      </article>
      <h3 className="m-0 absolute top-[112px] left-[64px] text-[inherit] tracking-[-0.02em] leading-[80.36%] font-medium font-inherit">
        Latest Proposals
      </h3>
      <h3 className="m-0 absolute top-[112px] left-[591px] flex flex-row items-start justify-start text-[inherit] font-inherit">
        <div className="relative tracking-[-0.02em] leading-[80.36%] font-semibold">
          Proposals
        </div>
      </h3>
      <div
        className="absolute top-[41px] left-[64px] w-[189px] h-[49px] flex flex-row py-2.5 px-0 box-border items-start justify-start cursor-pointer"
        onClick={onFrameContainer3Click}
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
          src="../settingssvgrepocom-11.svg"
        />
        <div className="absolute top-[0px] left-[0px] w-28 h-16 flex flex-row items-center justify-start">
          <img
            className="relative w-10 h-10 shrink-0"
            alt=""
            src="../mask-group9.svg"
          />
          <div className="flex flex-row p-2.5 items-start justify-start">
            <div className="relative text-2xs tracking-[0.02em] font-semibold font-source-code-pro text-white text-center">
              NFTPlug01
            </div>
          </div>
        </div>
      </button>
      <div className="absolute top-[180px] left-[328px] h-[740px] overflow-y-auto flex flex-col items-start justify-start gap-[40px]">
        <form className="relative w-[696px] h-[220px] shrink-0" method="post">
          <PoolArticle />
          <div className="absolute top-[36px] left-[14px] w-[666px] h-[88px] overflow-hidden flex flex-row p-1 box-border items-start justify-start">
            <div className="relative text-base tracking-[-0.02em] leading-[162.2%] font-medium font-source-code-pro text-white text-left flex items-center w-[701px] shrink-0">
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
          </div>
          <div className="absolute top-[170px] left-[19px] rounded bg-darkolivegreen-100 flex flex-row py-1 px-2 items-start justify-start">
            <b className="relative text-sm tracking-[0.05em] font-source-code-pro text-white text-center">
              <p className="[margin-block-start:0] [margin-block-end:0px]">
                Vote
              </p>
              <p className="m-0">Yes</p>
            </b>
          </div>
          <div className="absolute top-[170px] left-[250px] rounded bg-red flex flex-row py-1 px-2 items-start justify-start">
            <b className="relative text-sm tracking-[0.05em] font-source-code-pro text-white text-center">
              <p className="[margin-block-start:0] [margin-block-end:0px]">
                Vote
              </p>
              <p className="m-0">No</p>
            </b>
          </div>
          <img
            className="absolute top-[182.73px] left-[76.99px] w-[50.78px] h-[11.55px]"
            alt=""
            src="../arrow-13.svg"
          />
          <img
            className="absolute top-[192.23px] left-[128.23px] w-[114.77px] h-[11.55px]"
            alt=""
            src="../arrow-21.svg"
          />
          <b className="absolute top-[191px] left-[76px] text-sm tracking-[0.05em] flex font-source-code-pro text-white text-left items-center w-[38px] h-[19px]">
            29%
          </b>
          <b className="absolute top-[178px] left-[208px] text-sm tracking-[0.05em] flex font-source-code-pro text-white text-left items-center w-[35px] h-3.5">
            71%
          </b>
          <b className="absolute top-[180px] left-[389px] text-lg tracking-[0.05em] flex font-source-code-pro text-mediumspringgreen text-left items-center w-[164px] h-[31px]">{`Proposed By: `}</b>
          <div className="absolute top-[184px] left-[584px] w-[72px] h-6 flex flex-row items-center justify-start">
            <img
              className="relative w-4 h-4 shrink-0"
              alt=""
              src="../mask-group10.svg"
            />
            <div className="flex flex-row items-start justify-start">
              <div className="relative text-2xs tracking-[0.02em] font-black font-source-code-pro text-white text-center">
                NFTPlug01
              </div>
            </div>
          </div>
        </form>
        <form className="relative w-[696px] h-[220px] shrink-0">
          <PoolArticle />
          <div className="absolute top-[36px] left-[14px] w-[666px] h-[88px] overflow-hidden flex flex-row p-1 box-border items-start justify-start">
            <div className="relative text-base tracking-[-0.02em] leading-[162.2%] font-medium font-source-code-pro text-white text-left flex items-center w-[701px] shrink-0">
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
          </div>
          <div className="absolute top-[170px] left-[19px] rounded bg-darkolivegreen-100 flex flex-row py-1 px-2 items-start justify-start">
            <b className="relative text-sm tracking-[0.05em] font-source-code-pro text-white text-center">
              <p className="[margin-block-start:0] [margin-block-end:0px]">
                Vote
              </p>
              <p className="m-0">Yes</p>
            </b>
          </div>
          <div className="absolute top-[170px] left-[250px] rounded bg-red flex flex-row py-1 px-2 items-start justify-start">
            <b className="relative text-sm tracking-[0.05em] font-source-code-pro text-white text-center">
              <p className="[margin-block-start:0] [margin-block-end:0px]">
                Vote
              </p>
              <p className="m-0">No</p>
            </b>
          </div>
          <img
            className="absolute top-[182.73px] left-[76.99px] w-[50.78px] h-[11.55px]"
            alt=""
            src="../arrow-13.svg"
          />
          <img
            className="absolute top-[192.23px] left-[128.23px] w-[114.77px] h-[11.55px]"
            alt=""
            src="../arrow-21.svg"
          />
          <b className="absolute top-[191px] left-[76px] text-sm tracking-[0.05em] flex font-source-code-pro text-white text-left items-center w-[38px] h-[19px]">
            29%
          </b>
          <b className="absolute top-[178px] left-[208px] text-sm tracking-[0.05em] flex font-source-code-pro text-white text-left items-center w-[35px] h-3.5">
            71%
          </b>
          <b className="absolute top-[180px] left-[389px] text-lg tracking-[0.05em] flex font-source-code-pro text-mediumspringgreen text-left items-center w-[164px] h-[31px]">{`Proposed By: `}</b>
          <div className="absolute top-[184px] left-[584px] w-[72px] h-6 flex flex-row items-center justify-start">
            <img
              className="relative w-4 h-4 shrink-0"
              alt=""
              src="../mask-group11.svg"
            />
            <div className="flex flex-row items-start justify-start">
              <div className="relative text-2xs tracking-[0.02em] font-black font-source-code-pro text-white text-center">
                NFTPlug01
              </div>
            </div>
          </div>
        </form>
        <form className="relative w-[696px] h-[220px] shrink-0">
          <PoolArticle />
          <div className="absolute top-[36px] left-[14px] w-[666px] h-[88px] overflow-hidden flex flex-row p-1 box-border items-start justify-start">
            <div className="relative text-base tracking-[-0.02em] leading-[162.2%] font-medium font-source-code-pro text-white text-left flex items-center w-[701px] shrink-0">
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
          </div>
          <div className="absolute top-[170px] left-[19px] rounded bg-darkolivegreen-100 flex flex-row py-1 px-2 items-start justify-start">
            <b className="relative text-sm tracking-[0.05em] font-source-code-pro text-white text-center">
              <p className="[margin-block-start:0] [margin-block-end:0px]">
                Vote
              </p>
              <p className="m-0">Yes</p>
            </b>
          </div>
          <div className="absolute top-[170px] left-[250px] rounded bg-red flex flex-row py-1 px-2 items-start justify-start">
            <b className="relative text-sm tracking-[0.05em] font-source-code-pro text-white text-center">
              <p className="[margin-block-start:0] [margin-block-end:0px]">
                Vote
              </p>
              <p className="m-0">No</p>
            </b>
          </div>
          <img
            className="absolute top-[182.73px] left-[76.99px] w-[50.78px] h-[11.55px]"
            alt=""
            src="../arrow-13.svg"
          />
          <img
            className="absolute top-[192.23px] left-[128.23px] w-[114.77px] h-[11.55px]"
            alt=""
            src="../arrow-21.svg"
          />
          <b className="absolute top-[191px] left-[76px] text-sm tracking-[0.05em] flex font-source-code-pro text-white text-left items-center w-[38px] h-[19px]">
            29%
          </b>
          <b className="absolute top-[178px] left-[208px] text-sm tracking-[0.05em] flex font-source-code-pro text-white text-left items-center w-[35px] h-3.5">
            71%
          </b>
          <b className="absolute top-[180px] left-[389px] text-lg tracking-[0.05em] flex font-source-code-pro text-mediumspringgreen text-left items-center w-[164px] h-[31px]">{`Proposed By: `}</b>
          <div className="absolute top-[184px] left-[584px] w-[72px] h-6 flex flex-row items-center justify-start">
            <img
              className="relative w-4 h-4 shrink-0"
              alt=""
              src="../mask-group12.svg"
            />
            <div className="flex flex-row items-start justify-start">
              <div className="relative text-2xs tracking-[0.02em] font-black font-source-code-pro text-white text-center">
                NFTPlug01
              </div>
            </div>
          </div>
        </form>
        <form className="relative w-[696px] h-[220px] shrink-0">
          <PoolArticle />
          <div className="absolute top-[36px] left-[14px] w-[666px] h-[88px] overflow-hidden flex flex-row p-1 box-border items-start justify-start">
            <div className="relative text-base tracking-[-0.02em] leading-[162.2%] font-medium font-source-code-pro text-white text-left flex items-center w-[701px] shrink-0">
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
          </div>
          <div className="absolute top-[170px] left-[19px] rounded bg-darkolivegreen-100 flex flex-row py-1 px-2 items-start justify-start">
            <b className="relative text-sm tracking-[0.05em] font-source-code-pro text-white text-center">
              <p className="[margin-block-start:0] [margin-block-end:0px]">
                Vote
              </p>
              <p className="m-0">Yes</p>
            </b>
          </div>
          <div className="absolute top-[170px] left-[250px] rounded bg-red flex flex-row py-1 px-2 items-start justify-start">
            <b className="relative text-sm tracking-[0.05em] font-source-code-pro text-white text-center">
              <p className="[margin-block-start:0] [margin-block-end:0px]">
                Vote
              </p>
              <p className="m-0">No</p>
            </b>
          </div>
          <img
            className="absolute top-[188.5px] left-[76.99px] w-[45.01px] h-0"
            alt=""
          />
          <img
            className="absolute top-[198px] left-[134px] w-[109px] h-0"
            alt=""
          />
          <b className="absolute top-[191px] left-[76px] text-sm tracking-[0.05em] flex font-source-code-pro text-white text-left items-center w-[38px] h-[19px]">
            29%
          </b>
          <b className="absolute top-[178px] left-[208px] text-sm tracking-[0.05em] flex font-source-code-pro text-white text-left items-center w-[35px] h-3.5">
            71%
          </b>
          <b className="absolute top-[180px] left-[389px] text-lg tracking-[0.05em] flex font-source-code-pro text-mediumspringgreen text-left items-center w-[164px] h-[31px]">{`Proposed By: `}</b>
          <div className="absolute top-[184px] left-[584px] w-[72px] h-6 flex flex-row items-center justify-start">
            <img className="relative w-4 h-4 shrink-0" alt="" />
            <div className="flex flex-row items-start justify-start">
              <div className="relative text-2xs tracking-[0.02em] font-black font-source-code-pro text-white text-center">
                NFTPlug01
              </div>
            </div>
          </div>
        </form>
      </div>
      <textarea
        className="[border:none] bg-gray-300 font-medium font-source-code-pro text-sm absolute top-[180px] left-[1122px] rounded-lg h-[220px] flex flex-col p-2.5 box-border items-center justify-center"
        placeholder="Write Proposal Here"
      />
    </div>
  );
};

export default NewProposal;
