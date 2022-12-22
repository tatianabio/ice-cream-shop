import BasicModal from './BasicModal';
import StoryContainer from '../../storybookUtils/StoryContainer';

export default {
  title: 'Components/Organisms/BasicModal',
  component: BasicModal,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/PGyn99Nrq2fXcnwGJqj0hR/HTML-1-%2F-%D0%93%D0%BB%D0%B5%D0%B9%D1%81%D0%B8-(34)-(Copy)?node-id=54%3A650&t=ANKYOqsJQGTM1gR2-4',
    },
  },
};

export const Demo = () => {
  return (
    <StoryContainer
      title='Basic Modal'
      style={{ maxWidth: '100vw', minHeight: '2000px', height: 'min-content', padding: '15px' }}
    >
      <BasicModal data-testid='demo' openingButtonText='Open modal'>
        <div>
          <h2>Test modal</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ultrices mi tempus imperdiet nulla malesuada pellentesque elit eget gravida. Quam nulla
            porttitor massa id neque aliquam. Sed egestas egestas fringilla phasellus faucibus scelerisque eleifend
            donec pretium. Ipsum consequat nisl vel pretium lectus quam id leo in. Amet facilisis magna etiam tempor.
            Eros in cursus turpis massa. Tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada proin libero.
            Blandit cursus risus at ultrices. Congue mauris rhoncus aenean vel elit scelerisque mauris pellentesque. At
            elementum eu facilisis sed odio morbi quis commodo odio. Purus semper eget duis at tellus at urna
            condimentum. Netus et malesuada fames ac turpis egestas integer.
          </p>
        </div>
      </BasicModal>
    </StoryContainer>
  );
};
