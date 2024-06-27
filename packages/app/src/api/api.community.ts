import {
  useInfiniteQuery,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";
import * as data from "./api.data";

const useCommunityMessages = () => {
  const query = useInfiniteQuery({
    initialPageParam: 0,
    queryKey: ["communityMessages"],
    queryFn: ({ pageParam }) =>
      data.getCommunityMessages({ cursor: pageParam }),
    getNextPageParam: (lastPage) => lastPage.nextCursor,
  });

  return query;
};

const useLikeCommunityMessage = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: (id: string) => data.likeCommunityMessage(id),
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ["communityMessages"] });
    },
  });
  return mutation;
};

const useUnlikeCommunityMessage = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: (id: string) => data.unlikeCommunityMessage(id),
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ["communityMessages"] });
    },
  });
  return mutation;
};

const useAddCommunityMessage = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: (content: string) => data.addCommunityMessage(content),
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ["communityMessages"] });
    },
  });
  return mutation;
};

export {
  useCommunityMessages,
  useLikeCommunityMessage,
  useUnlikeCommunityMessage,
  useAddCommunityMessage,
};
