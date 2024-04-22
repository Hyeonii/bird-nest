'use client'
import { useEffect } from 'react'
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Textarea,
  Button,
  useDisclosure,
} from '@nextui-org/react'
import { useRouter } from 'next/navigation'

export default function NewPost() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const router = useRouter()

  const onOpenChange = () => {
    router.push('/')
  }

  useEffect(() => {
    onOpen()
  }, [])

  return (
    <Modal
      size="xl"
      backdrop="blur"
      isOpen={isOpen}
      onOpenChange={onOpenChange}
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">
              포스팅 작성
            </ModalHeader>
            <ModalBody>
              <Textarea
                label="Description"
                placeholder="(가로채기) 새로운 포스팅 작성"
                className="max-w-full"
              />
            </ModalBody>
            <ModalFooter>
              <Button color="danger" variant="light" onPress={onClose}>
                취소
              </Button>
              <Button color="primary" onPress={onClose}>
                포스팅
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  )
}
