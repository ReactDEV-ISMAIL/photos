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
  width?: number;
  height?: number;
  description?: string;
  alt_description?: string;
  urls?: {
    raw: string;
    full: string;
    regular: string;
    small: string;
    thumb: string;
    small_s3: string;
  };
  liked_by_user: boolean;
}
