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
}
const PhotoGallery: React.FC<PhotoGalleryProps> = ({ photos }) => {
  const likePhoto = (id: string) => {
    axiosInstance
      .post(`/photos/${id}/like`)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <GridContainer>
      {photos.map((photo) => (
        <PhotoCard key={photo.id}>
          <PhotoImg
            src={photo.urls.thumb}
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
            <HeartIcon>{"❤️"}</HeartIcon>
          </LikeButton>
        </PhotoCard>
      ))}
    </GridContainer>
  );
};

export default PhotoGallery;
