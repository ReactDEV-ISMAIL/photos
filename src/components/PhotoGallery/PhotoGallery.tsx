import { Photo } from "types/types";
import { axiosInstance, useAxios } from "utils/axiosClient";
import {
  GridContainer,
  HeartIcon,
  LikeButton,
  PhotoCard,
  PhotoImg,
} from "./PhotoGallery.styles";

interface PhotoGalleryProps {
  photos: Photo[];
  setPhotos: React.Dispatch<React.SetStateAction<Photo[]>>;
}
const PhotoGallery: React.FC<PhotoGalleryProps> = ({ photos, setPhotos }) => {
  const likePhoto = (id: string) => {
    const newPhotos = photos.map((e) => ({
      ...e,
      liked_by_user: e.id === id ? !e.liked_by_user : e.liked_by_user,
    }));
    setPhotos(newPhotos);
  };
  return (
    <GridContainer>
      {photos.map((photo) => (
        <PhotoCard key={photo.id}>
          <PhotoImg
            src={photo.urls?.thumb}
            alt={photo.alt_description}
            width="200px"
            height={"200px"}
          />

          <LikeButton
            onClick={() => {
              likePhoto(photo.id);
              console.log(photo.id);
            }}
          >
            <HeartIcon>{photo.liked_by_user ? "❤️" : "🤍"}</HeartIcon>
          </LikeButton>
        </PhotoCard>
      ))}
    </GridContainer>
  );
};

export default PhotoGallery;
