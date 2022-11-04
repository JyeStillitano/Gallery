import { ArtProps } from "../../types/ArtProps";

export default function Gallery(props: ArtProps[]) {
  return (
    <>
      {props.map((art) => {
        console.log(art);
      })}
    </>
  );
}
