import styled from "styled-components/native";
import { Body1 } from "../../../typography/typography";
import { Icon } from "../../base/icon/icon";

interface CommunityInputProps {
  sending?: boolean;
  value: string;
  onChange?: (value: string) => void;
  onSend?: () => void;
}

const Wrapper = styled.View`
  overflow: hidden;
  border-radius: ${({ theme }) => theme.sizes.corners}px;
  background-color: ${({ theme }) => theme.colors.background};
  padding: ${({ theme }) => theme.margins.small}px;
  gap: ${({ theme }) => theme.margins.medium}px;
  flex-direction: row;
`;

const InputField = styled.TextInput`
  flex: 1;
  color: ${({ theme }) => theme.colors.text};
`;

const Send = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  gap: ${({ theme }) => theme.margins.small}px;
  background: ${({ theme }) => theme.colors.primary};
  padding: ${({ theme }) => theme.margins.small}px;
  border-radius: ${({ theme }) => theme.sizes.corners}px;
`;

const CommunityInput: React.FC<CommunityInputProps> = ({
  value,
  onChange,
  onSend,
}) => {
  return (
    <Wrapper>
      <InputField
        placeholder="Join the conversation"
        value={value}
        testID="community-input-text"
        onChangeText={onChange}
      />
      <Send onPress={onSend} testID="community-input-button">
        <>
          <Icon color="primaryContrast" name="send" />
          <Body1 color="primaryContrast">Send</Body1>
        </>
      </Send>
    </Wrapper>
  );
};

export { CommunityInput, type CommunityInputProps };
