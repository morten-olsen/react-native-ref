import { useCallback } from "react";
import { Carusel, CourseThumb, Title1 } from "@react-ref/ui";
import {
  useAddBookmark,
  useBookmarkedCourses,
  useCourses,
  useRemoveBookmark,
} from "../../api/api.courses";
import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

const Wrapper = styled(SafeAreaView)``;

const HomeScreen: React.FC = () => {
  const courses = useCourses();
  const bookmarks = useBookmarkedCourses();
  const addBookmark = useAddBookmark();
  const removeBookmark = useRemoveBookmark();
  const onBookmark = useCallback(
    (id: string, value: boolean) => {
      if (value) {
        addBookmark.mutate(id);
      } else {
        removeBookmark.mutate(id);
      }
    },
    [addBookmark, removeBookmark],
  );

  return (
    <Wrapper>
      <Title1>Continue learning</Title1>
      <Carusel
        items={bookmarks.data?.pages.flatMap((page) => page.items) ?? []}
        getKey={(course) => course.course.id}
        renderItem={(course) => (
          <CourseThumb
            {...course}
            onBookmarkChange={onBookmark.bind(null, course.course.id)}
          />
        )}
      />
      <Title1>You may also like</Title1>
      <Carusel
        items={courses.data?.pages.flatMap((page) => page.items) ?? []}
        getKey={(course) => course.course.id}
        renderItem={(course) => (
          <CourseThumb
            {...course}
            onBookmarkChange={onBookmark.bind(null, course.course.id)}
          />
        )}
      />
    </Wrapper>
  );
};

export { HomeScreen };
