import type { Meta, StoryObj } from '@storybook/sveltekit';
import Operator from './Operator.svelte';

const meta = {
  title: 'Atoms/Operator',
  component: Operator,
} satisfies Meta<typeof  Operator>

  export default meta;
type Story = StoryObj<typeof meta>

export const TurnOff:  Story = {
  render:  (args) => ({
    Component: Operator,
    props: args,
  }),
  args: {
    operator: '&times',
    turns: false,
  }
}


export const TurnOn:  Story = {
  render:  (args) => ({
    Component: Operator,
    props: args,
  }),
  args: {
    operator: '&times',
    turns: true,
  }
}
