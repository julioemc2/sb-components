import { Meta, StoryObj } from "@storybook/react";
import { MyLabel, type Props } from "../components/MyLabel";



const meta:Meta<Props> = {
    title: 'UI/labels/MyLabel',
    component: MyLabel,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
    argTypes: {
        size: { control: 'inline-radio' },
        fontColor: { control: 'color' },
    }
} satisfies Meta<typeof MyLabel>;

export default meta;
type Story = StoryObj<typeof meta>

export const Basic: Story = {
    args: {
        label: 'Basic label',
    }
};

export const AllCaps: Story = {
    args: {
        label: 'All Caps label',
        AllCaps: true,
    }
};

export const Secondary: Story = {
    args: {
        label: 'Secondary label',
        color: 'text-secondary',
    }
};

export const CustomColor: Story = {
    args: {
        label: 'Custom color label',
        fontColor: '#452166',
    }
};

export const CustomBackgroundColor: Story = {
    args: {
        size: 'h1',
        label: 'Custom color label',
        fontColor: '#ffffff',
        backgroundColor: '#000000'
    }
};