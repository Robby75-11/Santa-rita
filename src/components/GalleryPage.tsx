import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import img1 from "../assets/images/Collage 01.jpg";
import img2 from "../assets/images/Collage 02.jpg";
import img3 from "../assets/images/Collage 03.jpg";
import img4 from "../assets/images/Collage 04.jpg";
import img5 from "../assets/images/Collage 05.jpg";
import img7 from "../assets/images/Collage 07.jpg";
import img6 from "../assets/images/Collage 06.jpg";
import img12 from "../assets/images/Collage12.jpg";
import img14 from "../assets/images/Collage 14.jpg";
import img13 from "../assets/images/Collage 13.jpg";
import img10 from "../assets/images/Collage 10.jpg";
import img11 from "../assets/images/Collage 11.jpg";
import img16 from "../assets/images/Collage 16.jpg";
import img20 from "../assets/images/Collage 20.jpg";
import img9 from "../assets/images/Collage 09.jpg";
import img17 from "../assets/images/Collage 17.jpg";
import img18 from "../assets/images/Collage 18.jpg";
import img15 from "../assets/images/Collage15.jpg";
import img19 from "../assets/images/Collage 19.jpg";
import img23 from "../assets/images/Collage 21.jpg";
import img8 from "../assets/images/Collage 08.jpg";
import img24 from "../assets/images/Immagine WhatsApp 2025-10-18 ore 15.48.31_26d7cc12.jpg";
import img22 from "../assets/images/6d9e99f6-4893-4514-83b8-9930ec51640b.jpeg";
import img28 from "../assets/images/Screenshot_20251017-221115_Samsung Notes.jpg";
import img26 from "../assets/images/Immagine WhatsApp 2025-10-19 ore 14.38.29_a6584f5d.jpg";
import img25 from "../assets/images/Immagine WhatsApp 2025-10-19 ore 13.39.57_86273a96.jpg";
import img27 from "../assets/images/Santa Rita da Cascia🌹22 Maggio.jpeg";
import img21 from "../assets/images/5c2c5308-0d0f-49f6-b0b3-8018e92600a8.jpeg";
import img29 from "../assets/images/fb6a88c4-c34c-4817-94ee-3e2379b957ee.jpeg";

const images = [
   img1, img2, img3, img4, img5, img7, img6, img12, img14, img13, img10,
  img11, img16, img20, img9, img17, img18, img15, img19, img23, img8, img29,
  img24, img26, img28, img27, img21, img22, img25
];

const GalleryPage: React.FC = () => {
  return (
    <Container className="mt-5 mb-5">
      <h2 className="text-center mb-4 text-pri
      mary">📸 Galleria Fotografica</h2>
      <Row xs={1} sm={2} md={3} lg={4} className="g-3">
        {images.map((img, index) => (
          <Col key={index}>
            <div className="gallery-image-wrapper">
              <img
                src={img}
                alt={`Foto ${index + 1}`}
                className="img-fluid rounded shadow-sm gallery-img"
              />
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default GalleryPage;
