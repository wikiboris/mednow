export type PostType = {
  id: string;
  slug: string;
  image: {
    formats: {
      large: {
        url: string;
      };
    };
  };
  title: string;
  description: string;
  category: { name: string };
  short_description: string;
  user: {
    username: string;
    picture: string;
  };
  published_at: string;
};
