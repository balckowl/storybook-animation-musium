import type { Meta, StoryObj } from "@storybook/react"
import Slider from "./CoverFlow"

const meta = {
    title: "Slider",
    component: Slider,
    parameters: {
        layout: "centered"
    }
} satisfies Meta<typeof Slider>

export default meta

type Story = StoryObj<typeof meta>

export const CoverFlow: Story = {}
