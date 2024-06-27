import styled from "styled-components/native";
import { Title1 } from "../../../typography/typography";

interface AvatarProps {
  name: string;
  url?: string;
}

const Wrapper = styled.View`
  align-items: center;
  width: 50px;
  height: 50px;
  align-items: center;
  justify-content: center;
`;

const Image = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 25px;
`;

const Avatar: React.FC<AvatarProps> = ({ name, url }) => {
  return (
    <Wrapper>
      {url ? <Image source={{ uri: url }} /> : <Title1>{name[0]}</Title1>}
    </Wrapper>
  );
};

export { Avatar };
