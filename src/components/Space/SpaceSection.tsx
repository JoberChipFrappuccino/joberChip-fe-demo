import { Section } from '@/models/space'

type Props = {
  section: Section
}
export const SpaceSection = ({ section }: Props) => {
  console.log(section.blocks)
  return <div></div>
}
