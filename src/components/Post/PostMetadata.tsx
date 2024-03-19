import dayjs from 'dayjs';
import Tags from '@/components/Post/Tags';

type PostMetadataProps = {
  publishedAt: string;
  tags?: string[];
};

export default function PostMetadata({ publishedAt, tags }: PostMetadataProps) {
  return (
    <div className="flex flex-wrap place-content-between mt-4 mb-8">
      <time className="mr-4 pt-4 text-white text-opacity-80" dateTime={publishedAt}>
        {dayjs(publishedAt).format('D MMM YYYY')}
      </time>
      {tags && <Tags tags={tags} />}
    </div>
  );
}
