import React from 'react'
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
  useToast,
} from '@chakra-ui/react'

export const DeleteBookmarkDialog: React.FC<{
  open: boolean
  onClose: () => void
}> = ({ open, onClose }) => {
  const toast = useToast()
  const cancelRef = React.useRef(null)
  return (
    <AlertDialog
      isOpen={open}
      onClose={onClose}
      isCentered
      motionPreset="slideInBottom"
      leastDestructiveRef={cancelRef}
    >
      <AlertDialogOverlay sx={{ backdropFilter: 'blur(10px)' }}>
        <AlertDialogContent>
          <AlertDialogHeader fontSize="lg" fontWeight="bold">
            Delete Assignment
          </AlertDialogHeader>

          <AlertDialogBody>
            Are you sure? You can't undo this action afterwards.
          </AlertDialogBody>

          <AlertDialogFooter>
            <Button
              colorScheme="red"
              onClick={() => {
                onClose()
                toast({
                  title: 'Assignment deleted.',
                  description: 'Your assignment has been successfully deleted.',
                  status: 'warning',
                  duration: 9000,
                  isClosable: true,
                })
              }}
            >
              Delete
            </Button>
            <Button onClick={onClose} ml={3}>
              Cancel
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  )
}
