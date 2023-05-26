import {
  Box,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
} from "@chakra-ui/react";
import { useState } from "react";
//import "./ImageSlider.css";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
export const ImageSlider = ({ imageList }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openModalSlider = (imageIndex) => {
    setCurrentImageIndex(imageIndex);
    setIsModalOpen(true);
  };

  const renderImages = () => {
    return imageList.map((imageLink, index) => {
      return (
        <Image
          onClick={() => openModalSlider(index)}
          src={imageLink}
          boxShadow={"xl"}
          borderRadius={"xl"}
          key={imageLink}
        />
      );
    });
  };

  const slider = (
    <Slide
      defaultIndex={currentImageIndex}
      infinite={false}
      arrows={imageList.length > 1}
      autoplay={false}
    >
      {renderImages()}
    </Slide>
  );

  const modalSlider = (
    <Modal
      size={"6xl"}
      isOpen={isModalOpen}
      onClose={() => setIsModalOpen(false)}
    >
      <ModalOverlay />
      <ModalContent bg={"transparent"} boxShadow={"none"}>
        <ModalCloseButton zIndex={1} bg={"white"} />
        <ModalBody>{slider}</ModalBody>
      </ModalContent>
    </Modal>
  );

  return (
    <>
      <Box w={350}>{slider}</Box>
      {modalSlider}
    </>
  );
};