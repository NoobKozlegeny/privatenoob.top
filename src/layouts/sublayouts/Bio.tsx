import styled, { keyframes } from "styled-components";
import BaseContentDiv from "../../components/ui/BaseContentDiv";
import BaseProps from "../../utils/interfaces";

const avatarAnimation = keyframes`   
  from {
    transform: scale(1.0)
  }
  to {
    transform: scale(1.05)
  }
`;

const AvatarCard = styled.div`
  color: ${(props) => props.theme.colors.primary};
  background-color: ${(props) => props.theme.colors.bg};
  display: grid;
  max-width: 200px;
  margin: 10px auto 0px auto;
  border-radius: 20% 20% 0% 0%;
  border: double;

  &:hover {
    animation: ${avatarAnimation} 1s forwards;
  }

  @media (max-width: 1140px) {
    margin: 0px auto 0px auto;
    border-radius: 20px 20px 0% 0%;
  }
`;

const AvatarImg = styled.img`
  max-height: 100%;
  max-width: 100%;
  display: block;
  margin-left: auto;
  margin-right: auto;
  border-radius: inherit;
  object-fit: cover;
`;

const BioInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.colors.text2};
  background-color: ${({ theme }) => theme.colors.primary};
  max-width: 200px;
  margin: 5px auto 0px auto;
  border: double ${({ theme }) => theme.colors.primary};
  border-radius: 0 0 50px 50px;

  &:hover {
    animation: ${avatarAnimation} 1s forwards;
  }

  @media (max-width: 900px) {
    margin: 5px auto 10px auto;
  }
`;

const OnlineIndicator = styled.span`
  height: 20px;
  width: 20px;
  background-color: #7fff00;
  border-radius: 50%;
  margin-right: 8px;
`;

const OfflineIndicator = styled.span`
  height: 20px;
  width: 20px;
  background-color: #dc143c;
  border-radius: 50%;
  margin-right: 8px;
`;

const BioList = styled.div`
  text-align: center;
`;

function Bio({ isLast = false }: BaseProps) {
  return (
    <BaseContentDiv isLast={isLast}>
      <div>
        <AvatarCard>
          <AvatarImg
            src="https://i.pinimg.com/564x/37/88/17/3788172348dca4cda1a19d8d131e9167.jpg"
            onClick={() =>
              window.open(
                "https://i.pinimg.com/564x/37/88/17/3788172348dca4cda1a19d8d131e9167.jpg"
              )
            }
            alt="Avatar"
          />
          {/* <OnlineIndicator /> */}
        </AvatarCard>
        <BioInfo
          onClick={() =>
            window.open("https://discordapp.com/users/334419819627675648")
          }
        >
          <OnlineIndicator />
          <h4>PrivateNoob</h4>
        </BioInfo>
      </div>
      <BioList>
        <h3>♂️ 23, he/him</h3>
        <h3>🇭🇺 Hungarian</h3>
        <h3>Idunno</h3>
      </BioList>
    </BaseContentDiv>
  );
}

export default Bio;