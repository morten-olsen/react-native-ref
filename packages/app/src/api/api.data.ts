import type {
  CourseThumbProps,
  CommunityMessageProps,
} from "@react-ref/ui";
import { addResponseTime } from "./api.utils";

const PAGE_SIZE = 10;
const sortCommunityMessages = (
  a: CommunityMessageProps,
  b: CommunityMessageProps,
) => b.publishedAt.getDate() - a.publishedAt.getDate();

const communityMessages = new Array(10)
  .fill(0)
  .map<CommunityMessageProps>((_, i) => ({
    id: i.toString(),
    user: {
      name: `User ${i.toString()}`,
      avatar: `https://via.placeholder.com/300?text=User+${i.toString()}`,
    },
    publishedAt: new Date(Date.now() - (i + 1) * 1000 * 60 * 60 * 24),
    content: `Message ${i.toString()}`,
    liked: i % 2 === 0,
  }))
  .sort(sortCommunityMessages);

const courses = new Array(10).fill(0).map<CourseThumbProps>((_, i) => ({
  course: {
    id: i.toString(),
    title: `Course ${i.toString()}`,
    cover: `https://via.placeholder.com/300?text=Course+${i.toString()}`,
    lessions: 10,
    duration: 60,
  },
  progress:
    Math.random() > 0.2 ? { percentage: Math.random() * 100 } : undefined,
  bookmarked: Math.random() > 0.5,
}));

const getCourse = addResponseTime((id: string) =>
  courses.find((current) => current.course.id === id),
);

interface CoursesRequest {
  cursor?: number;
}

const getCourses = addResponseTime(({ cursor = 0 }: CoursesRequest) => {
  const items = courses.slice(cursor, cursor + PAGE_SIZE + 1);
  const nextCursor =
    items.length === PAGE_SIZE + 1 ? cursor + PAGE_SIZE : undefined;
  return {
    items: items.slice(0, PAGE_SIZE),
    nextCursor,
  };
});

const getBookmarkedCourses = addResponseTime(
  ({ cursor = 0 }: CoursesRequest) => {
    const items = courses
      .filter((course) => course.bookmarked)
      .slice(cursor, cursor + PAGE_SIZE + 1);
    const nextCursor =
      items.length === PAGE_SIZE + 1 ? cursor + PAGE_SIZE : undefined;
    return {
      items: items.slice(0, PAGE_SIZE),
      nextCursor,
    };
  },
);

const addBookmark = addResponseTime((id: string) => {
  const course = courses.find((current) => current.course.id === id);
  if (course) {
    course.bookmarked = true;
  }
});

const removeBookmark = addResponseTime((id: string) => {
  const course = courses.find((current) => current.course.id === id);
  if (course) {
    course.bookmarked = false;
  }
});

const getCommunityMessages = addResponseTime(
  ({ cursor = 0 }: CoursesRequest) => {
    const items = communityMessages
      .sort(sortCommunityMessages)
      .slice(cursor, cursor + PAGE_SIZE + 1);
    const nextCursor =
      items.length === PAGE_SIZE + 1 ? cursor + PAGE_SIZE : undefined;
    return {
      items: items.slice(0, PAGE_SIZE),
      nextCursor,
    };
  },
);

const addCommunityMessage = addResponseTime((message: string) => {
  const randomId = Math.random().toString();
  communityMessages.push({
    id: randomId,
    user: {
      name: "Me",
      avatar: "https://via.placeholder.com/300?text=Me",
    },
    publishedAt: new Date(),
    content: message,
    liked: false,
  });
});

const likeCommunityMessage = addResponseTime((id: string) => {
  const message = communityMessages.find((current) => current.id === id);
  if (message) {
    message.liked = true;
  }
});

const unlikeCommunityMessage = addResponseTime((id: string) => {
  const message = communityMessages.find((current) => current.id === id);
  if (message) {
    message.liked = false;
  }
});

export {
  getCourse,
  getCourses,
  getBookmarkedCourses,
  addBookmark,
  removeBookmark,
  addCommunityMessage,
  getCommunityMessages,
  likeCommunityMessage,
  unlikeCommunityMessage,
};
