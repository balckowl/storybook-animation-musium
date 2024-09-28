import type { Meta, StoryObj } from "@storybook/react"
import Scroll from "./Default"

const meta = {
    title: "Scroll",
    component: Scroll,
    parameters: {
        layout: "centered"
    }
} satisfies Meta<typeof Scroll>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
