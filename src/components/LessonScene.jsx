const SCENE_SRC = {
  desk: "/scenes/desk.png?v=1",
  docs: "/scenes/docs.png?v=1",
  phone: "/scenes/phone.png?v=1",
  meeting: "/scenes/meeting.png?v=1",
  camera: "/scenes/camera.png?v=1",
  code: "/scenes/code.png?v=1",
  search: "/scenes/search.png?v=1",
  product: "/scenes/product.png?v=1",
  lyria: "/scenes/lyria.png?v=1",
  celebrate: "/scenes/celebrate.png?v=1",
};

export default function LessonScene({ scene = "desk", caption = "", src }) {
  const photo = src || SCENE_SRC[scene] || SCENE_SRC.desk;
  return (
    <figure className="lesson-figure lesson-figure-photo">
      <div className="scene-photo-wrap">
        <img src={photo} alt="" className="scene-photo" />
        {caption ? <span className="scene-photo-title">{caption}</span> : null}
        <span className="scene-photo-mark" aria-hidden>
          M
        </span>
      </div>
    </figure>
  );
}
