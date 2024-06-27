import styled from "styled-components/native";
import { Caption, Title1 } from "../../../typography/typography";
import { Icon } from "../../base/icon/icon";
import { TouchableOpacity } from "react-native";

interface CourseThumbProps {
  onPress?: () => void;
  onBookmarkChange?: (state: boolean) => void;
  course: {
    id: string;
    title: string;
    cover: string;
    lessions: number;
    duration: number;
  };
  bookmarked?: boolean;
  progress?: {
    percentage: number;
  };
}

const Wrapper = styled.View`
  overflow: hidden;
  width: 300px;
  border-radius: ${({ theme }) => theme.sizes.corners}px;
  background-color: ${({ theme }) => theme.colors.background};
  position: relative;
`;

const Cover = styled.Image`
  width: 100%;
  aspect-ratio: 16/9;
  border-top-left-radius: ${({ theme }) => theme.sizes.corners}px;
  border-top-right-radius: ${({ theme }) => theme.sizes.corners}px;
`;

const Info = styled.View`
  padding: ${({ theme }) => theme.margins.small}px;
  gap: ${({ theme }) => theme.margins.small}px;
`;

const Meta = styled.View`
  flex-direction: row;
  gap: ${({ theme }) => theme.margins.small}px;
`;

const MetaItem = styled.View`
  flex-direction: row;
  align-items: center;
  gap: ${({ theme }) => theme.margins.small}px;
`;

const ProgressWrapper = styled.View`
  background-color: ${({ theme }) => theme.colors.primary};
  position: absolute;
  top: ${({ theme }) => theme.margins.small}px;
  left: ${({ theme }) => theme.margins.small}px;
  padding: ${({ theme }) => theme.margins.small}px;
  border-radius: ${({ theme }) => theme.sizes.corners}px;
`;

const BookmarkWrapper = styled.View`
  position: absolute;
  top: ${({ theme }) => theme.margins.small}px;
  right: ${({ theme }) => theme.margins.small}px;
  padding: ${({ theme }) => theme.margins.small}px;
`;

const CourseThumb: React.FC<CourseThumbProps> = ({
  course,
  progress,
  bookmarked,
  onPress,
  onBookmarkChange,
}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Wrapper>
        <Cover source={{ uri: course.cover }} />
        {progress ? (
          <ProgressWrapper>
            <Caption color="primaryContrast">
              {Math.round(progress.percentage)}% completed
            </Caption>
          </ProgressWrapper>
        ) : null}
        <BookmarkWrapper>
          <TouchableOpacity
            onPress={() => {
              onBookmarkChange && onBookmarkChange(!bookmarked);
            }}
          >
            <Icon name={bookmarked ? "book-open" : "book"} size={24} />
          </TouchableOpacity>
        </BookmarkWrapper>
        <Info>
          <Title1>{course.title}</Title1>
          <Meta>
            <MetaItem>
              <Caption>{course.lessions} lessons</Caption>
            </MetaItem>
            <MetaItem>
              <Icon name="clock" size={16} />
              <Caption>{course.duration} min</Caption>
            </MetaItem>
          </Meta>
        </Info>
      </Wrapper>
    </TouchableOpacity>
  );
};

export { CourseThumb, type CourseThumbProps };
