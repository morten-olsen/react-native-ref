import { useCallback, useState } from "react";
import styled from "styled-components/native";
import { CommunityInput, CommunityMessage } from "@react-ref/ui";
import {
  useAddCommunityMessage,
  useCommunityMessages,
  useLikeCommunityMessage,
  useUnlikeCommunityMessage,
} from "../../api/api.community";
import { Keyboard } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const Wrapper = styled.View`
  flex: 1;
`;

const Container = styled.View`
  height: ${({ theme }) => theme.margins.medium}px;
`;

const HeaderElm = styled.View<{ insets: { top: number } }>`
  padding-top: ${({ insets }) => insets.top}px;
`;

const Header: React.FC = () => {
  const insets = useSafeAreaInsets();
  return <HeaderElm insets={insets} />;
};

const List = styled.FlatList`
  flex: 1;
  padding: ${({ theme }) => theme.margins.medium}px;
`;

const CommunityScreen: React.FC = () => {
  const [input, setInput] = useState("");
  const messages = useCommunityMessages();
  const likeCommuniytMessage = useLikeCommunityMessage();
  const unlikeCommuniytMessage = useUnlikeCommunityMessage();
  const addCommuniytMessage = useAddCommunityMessage();

  const handleLikeChange = useCallback(
    (id: string, liked: boolean) => {
      if (liked) {
        likeCommuniytMessage.mutate(id);
      } else {
        unlikeCommuniytMessage.mutate(id);
      }
    },
    [likeCommuniytMessage, unlikeCommuniytMessage],
  );

  const handleSend = useCallback(() => {
    addCommuniytMessage.mutate(input, {
      onSuccess: () => {
        setInput("");
        Keyboard.dismiss();
      },
    });
  }, [addCommuniytMessage, input]);

  return (
    <Wrapper>
      <List
        data={
          messages.data?.pages
            .flatMap((page) => page.items)
            .sort(
              (a, b) => b.publishedAt.getDate() - a.publishedAt.getDate(),
            ) ?? []
        }
        keyExtractor={(message) => message.id}
        inverted
        ItemHeaderComponent={Header}
        ItemSeparatorComponent={Container}
        renderItem={({ item }) => (
          <CommunityMessage
            {...item}
            onLikeChange={(liked) => {
              handleLikeChange(item.id, liked);
            }}
          />
        )}
      />
      <CommunityInput value={input} onChange={setInput} onSend={handleSend} />
    </Wrapper>
  );
};

export { CommunityScreen };
