export interface LoginFormType {
  username: string;
  password: string;
}

export interface User {
  username: string;
  password: string;
  enabled: boolean;
}

export interface Photo {
  id: string;
  width: number;
  height: number;
  description?: string;
  alt_description: string;
  breadcrumbs: [];
  urls: {
    raw: string;
    full: string;
    regular: string;
    small: string;
    thumb: string;
    small_s3: string;
  };
  links: {
    self: "https://api.unsplash.com/photos/KR0WW6bjtt0";
    html: "https://unsplash.com/photos/KR0WW6bjtt0";
    download: "https://unsplash.com/photos/KR0WW6bjtt0/download?ixid=M3w0ODE3NDN8MXwxfGFsbHwxfHx8fHx8Mnx8MTY5MDczMjA3M3w";
    download_location: "https://api.unsplash.com/photos/KR0WW6bjtt0/download?ixid=M3w0ODE3NDN8MXwxfGFsbHwxfHx8fHx8Mnx8MTY5MDczMjA3M3w";
  };
  likes: 253;
  liked_by_user: false;
}
