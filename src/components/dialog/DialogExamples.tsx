import { Button, Dialog, Form, Input, useModal } from '@fluid-design/fluid-ui';
import { useState } from 'react';

import clsxm from '@/lib/clsxm';

const Wrap = ({ className = '', children }) => {
  return (
    <div
      className={clsxm(
        'flex h-full flex-wrap items-center justify-center gap-6 px-4 lg:px-6',
        className
      )}
    >
      {children}
    </div>
  );
};

const NestedModal2 = ({ dismiss }) => {
  const [nestedModal] = useModal(NestedModal1);
  return (
    <Dialog className='component'>
      <Dialog.Header transparentBg>
        <Dialog.Title>Are you sure?</Dialog.Title>
      </Dialog.Header>
      <Dialog.Body>
        <Dialog.Description>
          You have unsaved changes. Are you sure you want to cancel? All unsaved
          changes will be lost.
        </Dialog.Description>
      </Dialog.Body>
      <Dialog.Footer>
        <Button onClick={nestedModal} type='button' color='emerald'>
          Nest ME!
        </Button>
        <Button onClick={dismiss} type='button'>
          Close
        </Button>
      </Dialog.Footer>
    </Dialog>
  );
};

const NestedModal1 = ({ dismiss }) => {
  const [nestedModal] = useModal(NestedModal2);
  return (
    <Dialog className='component'>
      <Dialog.Header transparentBg>
        <Dialog.Title>Are you sure?</Dialog.Title>
      </Dialog.Header>
      <Dialog.Body>
        <Dialog.Description>
          You have unsaved changes. Are you sure you want to cancel? All unsaved
          changes will be lost.
        </Dialog.Description>
      </Dialog.Body>
      <Dialog.Footer>
        <Button onClick={nestedModal} type='button' color='emerald'>
          Nest ME!
        </Button>
        <Button onClick={dismiss} type='button'>
          Close
        </Button>
      </Dialog.Footer>
    </Dialog>
  );
};

const ConfirmCancelModal = ({ onConfirm, dismiss, ...props }) => {
  return (
    <Dialog className='component'>
      <Dialog.Header transparentBg>
        <Dialog.Title>Are you sure?</Dialog.Title>
      </Dialog.Header>
      <Dialog.Body>
        <Dialog.Description>
          You have unsaved changes. Are you sure you want to cancel? All unsaved
          changes will be lost.
        </Dialog.Description>
      </Dialog.Body>
      <Dialog.Footer>
        <Button onClick={onConfirm} type='button' color='rose'>
          Confirm
        </Button>
        <Button onClick={dismiss} type='button'>
          Close
        </Button>
      </Dialog.Footer>
    </Dialog>
  );
};

const ConfirmCancelModalWrap = ({ onConfirm, dismiss, onClose, ...props }) => {
  const [presentConfirmModal] = useModal(ConfirmCancelModal, {
    onConfirm: () => dismiss(),
  });
  const [name, setName] = useState<string>('John Doe');
  const canDismiss = name === 'John Doe';
  onClose(canDismiss ? dismiss : presentConfirmModal);
  return (
    <Dialog className='component'>
      <Dialog.Header transparentBg>
        <Dialog.Title>My Profile</Dialog.Title>
      </Dialog.Header>
      <Dialog.Body>
        <Dialog.Description>
          Enter your profile information below. (Try change the name to
          something else and try to close the modal.)
        </Dialog.Description>
        <Form
          initialValues={{
            name: 'John Doe',
          }}
          onSubmit={() => null}
        >
          <Input
            label='Name'
            name='name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form>
      </Dialog.Body>
      <Dialog.Footer>
        <Button onClick={dismiss} type='button' className='btn-primary'>
          Save
        </Button>
        <Button
          onClick={canDismiss ? dismiss : presentConfirmModal}
          type='button'
        >
          Close
        </Button>
      </Dialog.Footer>
    </Dialog>
  );
};

const SimpleModal = ({ dismiss }) => {
  return (
    <Dialog className='component'>
      <Dialog.Header>
        <Dialog.Title>Modal Title</Dialog.Title>
        <Dialog.CloseButton dismiss={dismiss} />
      </Dialog.Header>
      <Dialog.Body className='bg-whtie'>
        <Dialog.Description>
          This is a simple modal. It has a title, a description, and a footer.
        </Dialog.Description>
        <p>Modal Content</p>
      </Dialog.Body>
    </Dialog>
  );
};

const SimpleComponent = () => {
  const [presentModal] = useModal(SimpleModal);
  return (
    <Wrap>
      <Button
        label='Present Modal'
        color='gray'
        weight='light'
        onClick={() => presentModal()}
      />
    </Wrap>
  );
};

const NestedComponent = () => {
  const [presentModal] = useModal(NestedModal1);
  return (
    <Wrap>
      <Button
        label='Nested Modal'
        color='gray'
        weight='light'
        onClick={() => presentModal()}
      />
    </Wrap>
  );
};

const ConfirmComponent = () => {
  const [presentModal] = useModal(ConfirmCancelModalWrap);
  return (
    <Wrap>
      <Button
        label='Confirm Modal'
        color='gray'
        weight='light'
        onClick={() => presentModal()}
      />
    </Wrap>
  );
};

export const DialogExamples = Object.assign(
  {},
  {
    Simple: SimpleComponent,
    Nested: NestedComponent,
    Form: ConfirmComponent,
  }
);
