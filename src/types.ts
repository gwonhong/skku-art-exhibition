export type Contact = {
  [key: string]: string;
};

export type Artist = {
  name: string;
  artworks: string[];
  link: string;
};

export type Exhibition = {
  name: string;
  date: string;
  artists: Artist[];
};

export type Exhibitions = {
  [key: string]: Exhibition;
};
