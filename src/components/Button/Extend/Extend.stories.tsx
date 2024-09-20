import type { Meta, StoryObj } from "@storybook/react"
import Button from "./Extend"

const meta = {
    title: "Button",
    component: Button,
    parameters: {
        layout: "centered"
    }
} satisfies Meta<typeof Button>

export default meta

type Story = StoryObj<typeof meta>

export const Extend: Story = {}
