import PhotoGallery from "components/PhotoGallery";
import useInfiniteScroll from "hooks/infinitScrolling";
import { useEffect, useState } from "react";
import { Photo } from "types/types";
import { axiosInstance, useAxios } from "utils/axiosClient";

const Home = () => {
  const [data, setData] = useState<Photo[]>([]);
  const [page, setPage] = useState(1);
  const fetchData = async () => {
    getPhotos(page, 20);
  };
  const [isFetching, setIsFetching] = useInfiniteScroll(fetchData);

  const getPhotos = (page: number, per_page: number) => {
    axiosInstance
      .get("/photos", {
        params: { page, per_page },
      })
      .then((res) => {
        setIsFetching(false);
        setData((prevData) => [...prevData, ...res.data]);
        setPage((prevPage) => prevPage + 1);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getPhotos(page, 20);
  }, []);

  return (
    <div>
      <PhotoGallery photos={data} setPhotos={setData} />
      {isFetching && <p>Loading...</p>}
    </div>
  );
};

export default Home;
