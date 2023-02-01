import StoryContainer from '../../storybookUtils/StoryContainer';
import SectionTile from './SectionTile';

export default {
  title: 'Components/Organisms/SectionTile',
  component: SectionTile,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/PGyn99Nrq2fXcnwGJqj0hR/HTML-1-%2F-%D0%93%D0%BB%D0%B5%D0%B9%D1%81%D0%B8-(34)-(Copy)?node-id=7577%3A3358&t=rIxPhdSCPwbBF3el-4',
    },
  },
};

export const Demo = () => {
  return (
    <StoryContainer
      title='Section Tile'
      style={{ maxWidth: '1200px', minHeight: '2000px', height: 'min-content', padding: '5px' }}
    >
      <SectionTile data-testid='demo' title='Test section'>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ultrices mi tempus imperdiet nulla malesuada pellentesque elit eget gravida. Quam nulla
          porttitor massa id neque aliquam. Sed egestas egestas fringilla phasellus faucibus scelerisque eleifend donec
          pretium. Ipsum consequat nisl vel pretium lectus quam id leo in. Amet facilisis magna etiam tempor. Eros in
          cursus turpis massa.
        </p>
      </SectionTile>
    </StoryContainer>
  );
};
