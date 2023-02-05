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
    <Dialog>
      <Dialog.Body>
        <Dialog.Title>Are you sure?</Dialog.Title>
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
    <Dialog>
      <Dialog.Body>
        <Dialog.Title>Are you sure?</Dialog.Title>
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
    <Dialog>
      <Dialog.Body>
        <Dialog.Title>Are you sure?</Dialog.Title>
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
    <Dialog>
      <Dialog.Body>
        <Dialog.Title>My Profile</Dialog.Title>
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
        <Button onClick={dismiss} type='button' color='sky'>
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

const SimpleModal = ({ dismiss, onConfirm }) => {
  return (
    <Dialog className='component'>
      <Dialog.Body className='bg-whtie'>
        <Dialog.Title>Modal Title</Dialog.Title>
        <Dialog.Description>
          This is a simple modal. It has a title, a description, and a footer.
        </Dialog.Description>
        <p>Modal Content</p>
      </Dialog.Body>
      <Dialog.Footer>
        <Button
          type='button'
          color='blue'
          onClick={() => {
            onConfirm();
            dismiss();
          }}
        >
          Confirm
        </Button>
        <Button type='button' onClick={dismiss}>
          Close
        </Button>
      </Dialog.Footer>
    </Dialog>
  );
};

const SimpleComponent = () => {
  const [presentModal] = useModal(SimpleModal, {
    onConfirm: () => console.log('Confirmed'),
  });
  return (
    <Wrap>
      <Button label='Present Modal' onClick={() => presentModal()} />
    </Wrap>
  );
};

const NestedComponent = () => {
  const [presentModal] = useModal(NestedModal1);
  return (
    <Wrap>
      <Button label='Nested Modal' onClick={() => presentModal()} />
    </Wrap>
  );
};

export const DialogExamples = Object.assign(
  {},
  {
    Simple: SimpleComponent,
    Nested: NestedComponent,
  }
);
