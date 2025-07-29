// src/components/Button.stories.tsx
import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  component: Button,
  title: "Components/Button",
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: "Botão Primário",
    variant: "primary",
  },
};

export const Outline: Story = {
  args: {
    children: "Botão Outline",
    variant: "outline",
  },
};

export const Large: Story = {
  args: {
    children: "Grande",
    size: "lg",
  },
};
