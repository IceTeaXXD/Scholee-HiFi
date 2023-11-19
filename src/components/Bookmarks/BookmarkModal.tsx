import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/react'

const BookmarkModal: React.FC<{ open: boolean; onClose: () => void }> = ({
  open,
  onClose,
}) => {
  return (
    <Modal isOpen={open} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Bookmark Success</ModalHeader>
        <ModalCloseButton />
        <ModalBody>Bookmark untuk beasiswa ini berhasil!</ModalBody>
      </ModalContent>
    </Modal>
  )
}

export default BookmarkModal
