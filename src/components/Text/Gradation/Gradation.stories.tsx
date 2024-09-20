import type { Meta, StoryObj } from "@storybook/react"
import Text from "./Gradation"

const meta = {
    title: "Text",
    component: Text,
    parameters: {
        layout: "centered"
    }
} satisfies Meta<typeof Text>

export default meta

type Story = StoryObj<typeof meta>

export const Gradation: Story = {}
