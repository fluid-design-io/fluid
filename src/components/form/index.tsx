import { ComboBoxExamples } from '@/components/form/ComboBoxExamples';
import { InputExamples } from '@/components/form/InputExamples';
import { SelectExamples } from '@/components/form/SelectExamples';
import { SwitchExamples } from '@/components/form/SwitchExamples';
import { TextareaExamples } from '@/components/form/TextareaExamples';
import { ValidationExamples } from '@/components/form/ValidationExamples';

export const FormExamples = Object.assign(
  {},
  {
    Input: InputExamples,
    Textarea: TextareaExamples,
    Switch: SwitchExamples,
    Select: SelectExamples,
    Combobox: ComboBoxExamples,
    Validation: ValidationExamples,
  }
);

export const defaultFormClassName =
  'w-4/5 max-w-md flex flex-col justify-start items-stretch bg-white';
