import styled from "styled-components/native";
import { Body1, Caption } from "../../../typography/typography";
import { Icon } from "../../base/icon/icon";
import { TouchableOpacity } from "react-native";
import { RelativeTime } from "../../base/relative-time/relative-time";
import { Avatar } from "../../base/avatar/avatar";

interface CommunityMessageProps {
  id: string;
  user: {
    name: string;
    avatar: string;
  };
  publishedAt: Date;
  content: string;
  liked: boolean;
  onLikeChange?: (liked: boolean) => void;
}

const Wrapper = styled.View`
  overflow: hidden;
  border-radius: ${({ theme }) => theme.sizes.corners}px;
  background-color: ${({ theme }) => theme.colors.background};
  padding: ${({ theme }) => theme.margins.medium}px;
  gap: ${({ theme }) => theme.margins.medium}px;
`;

const Header = styled.View`
  flex-direction: row;
  gap: ${({ theme }) => theme.margins.medium}px;
  align-items: center;
`;

const HeaderInfo = styled.View``;

const Actions = styled.View`
  flex-direction: row;
  gap: ${({ theme }) => theme.margins.small}px;
`;

const CommunityMessage: React.FC<CommunityMessageProps> = ({
  user,
  publishedAt,
  content,
  liked,
  onLikeChange,
}) => {
  return (
    <Wrapper>
      <Header>
        <Avatar url={user.avatar} name={user.name} />
        <HeaderInfo>
          <Body1>{user.name}</Body1>
          <Caption color="textShade">
            <RelativeTime date={publishedAt} />
          </Caption>
        </HeaderInfo>
      </Header>
      <Body1>{content}</Body1>
      <Actions>
        <TouchableOpacity
          onPress={() => {
            onLikeChange && onLikeChange(!liked);
          }}
        >
          <Icon name={liked ? "heart" : "airplay"} size={16} />
        </TouchableOpacity>
      </Actions>
    </Wrapper>
  );
};

export { CommunityMessage, type CommunityMessageProps };
