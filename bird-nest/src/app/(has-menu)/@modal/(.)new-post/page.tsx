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
    router.back()
  }

  useEffect(() => {
    onOpen()
  }, [onOpen])

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
                placeholder="텍스트와 이모지 사용이 가능합니다"
                className="max-w-full"
              />
              <Button color="default" variant="light" onPress={onClose}>
                사진 첨부
              </Button>
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
