import type { Meta, StoryObj } from "@storybook/react"
import Text from "./SvgLine"

const meta = {
    title: "Text",
    component: Text,
    parameters: {
        layout: "centered"
    }
} satisfies Meta<typeof Text>

export default meta

type Story = StoryObj<typeof meta>

export const SvgLine: Story = {}
