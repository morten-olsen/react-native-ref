import {
  useQuery,
  useInfiniteQuery,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";
import * as data from "./api.data";

const useCourse = (id: string) => {
  const query = useQuery({
    queryKey: ["course", id],
    queryFn: () => data.getCourse(id),
  });

  return query;
};

const useCourses = () => {
  const query = useInfiniteQuery({
    initialPageParam: 0,
    queryKey: ["courses"],
    queryFn: ({ pageParam }) => data.getCourses({ cursor: pageParam }),
    getNextPageParam: (lastPage) => lastPage.nextCursor,
  });

  return query;
};

const useBookmarkedCourses = () => {
  const query = useInfiniteQuery({
    initialPageParam: 0,
    queryKey: ["bookmarkedCourses"],
    queryFn: ({ pageParam }) =>
      data.getBookmarkedCourses({ cursor: pageParam }),
    getNextPageParam: (lastPage) => lastPage.nextCursor,
  });

  return query;
};

const useAddBookmark = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: (id: string) => data.addBookmark(id),
    onSuccess: async (_, id) => {
      await queryClient.invalidateQueries({ queryKey: ["bookmarkedCourses"] });
      await queryClient.invalidateQueries({ queryKey: ["courses"] });
      await queryClient.invalidateQueries({ queryKey: ["course", id] });
    },
  });
  return mutation;
};

const useRemoveBookmark = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: (id: string) => data.removeBookmark(id),
    onSuccess: async (_, id) => {
      await queryClient.invalidateQueries({ queryKey: ["bookmarkedCourses"] });
      await queryClient.invalidateQueries({ queryKey: ["courses"] });
      await queryClient.invalidateQueries({ queryKey: ["course", id] });
    },
  });
  return mutation;
};

export {
  useCourse,
  useCourses,
  useBookmarkedCourses,
  useAddBookmark,
  useRemoveBookmark,
};
