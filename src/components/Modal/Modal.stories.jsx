import React, { useState } from 'react';
import Modal from './Modal';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Modal/Modal',
  component: Modal,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      <Modal
        isModalOpen={isModalOpen}
        toggleModal={() => {
          setIsModalOpen(!isModalOpen);
        }}
      >
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione harum
        nihil tempora, porro cumque dignissimos praesentium? Nobis illum iusto
        harum! Tempora adipisci cupiditate veniam minima consequatur
        consectetur, molestias magni facere dolorem possimus neque quibusdam quo
        distinctio totam. Harum dolorem, suscipit recusandae non perspiciatis,
        corporis nisi, nulla iure laborum dignissimos maxime libero reiciendis
        necessitatibus illum repudiandae esse et asperiores. Harum nobis ut
        laudantium expedita error omnis? Possimus, natus officiis! Vero nulla
        ducimus enim ea ipsum vel voluptate, ipsa, atque vitae quae illum
        aspernatur.
      </Modal>
      <button
        type="button"
        onClick={() => {
          setIsModalOpen(!isModalOpen);
        }}
      >
        Open modal
      </button>
    </div>
  );
};

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
