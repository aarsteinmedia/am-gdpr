import type { AMGDPR } from '../elements/AMGDPR';
export default function switchButton(this: AMGDPR, { disabled, name, label, value, }: {
    disabled?: boolean;
    name: string;
    label?: string;
    value: boolean;
}): string;
