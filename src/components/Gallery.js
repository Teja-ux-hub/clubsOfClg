import SectionTitle from "./SectionTitle";
import GalleryItem from "./GalleryItem";
import farhan from './farhan.jpeg'

const images = [
  {
    id: 1,
    src: "https://media.licdn.com/dms/image/v2/D5622AQGnfLwdHcCpDw/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1729938443833?e=1735171200&v=beta&t=3BzbqjzLFekH5pei7aUHz8Qbr3DWg13kVoOA9qpzIa0",
    title: "President of Code O holiks",
    category: "",
  },
  {
    id: 2,
    src:"https://chetan-portfolio-six.vercel.app/pic.jpg",
    title: "Dev lead of Code O holiks",
    category: "",
  },
  {
    id: 3,
    src: "https://www.spi.ox.ac.uk/sites/default/files/styles/callout_person_image/public/spi/images/media/no_image_available.png?itok=npEdKFMv",
    title: "Design lead of Code O holiks", 
    category: "",
  },
  {
    id: 4,
    src: "https://www.spi.ox.ac.uk/sites/default/files/styles/callout_person_image/public/spi/images/media/no_image_available.png?itok=npEdKFMv",
    title: "Core member",
    category: "",
  },
];

const Gallery = () => {
  return (
    <section className="gallery">
      <SectionTitle title="Members representing CodeOholics" needMargin={true} />
      <div className="gallery-wrapper">
        {images.map((image) => (
          <GalleryItem key={image.id} {...image} />
        ))}
      </div>
    </section>
  );
};

export default Gallery;
