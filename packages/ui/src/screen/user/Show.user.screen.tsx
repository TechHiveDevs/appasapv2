import { Button, Paragraph, YStack } from 'tamagui'
import { ChevronLeft } from '@tamagui/lucide-icons'
import React from 'react'
import { createParam } from 'solito'
import { useLink } from 'solito/link'

const { useParam } = createParam<{ id: string }>()

export function ShowUser() {
  const [id] = useParam('id')
  const linkProps = useLink({ href: '/' })

  return (
    <YStack f={1} jc="center" ai="center" space>
      <Paragraph ta="center" fow="800">{`User ID: ${id}`}</Paragraph>
      <Button {...linkProps} icon={ChevronLeft}>
        Go Home from show user
      </Button>
    </YStack>
  )
}
