import { BUTTONS_VALUES } from '@/constants';

interface Props {
  toggler: () => void;
}

export function EditButton({ toggler }: Props) {
  return <button onClick={toggler}>{BUTTONS_VALUES.EDIT}</button>;
}
