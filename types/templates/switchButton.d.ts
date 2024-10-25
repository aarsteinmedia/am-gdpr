import type AMCookies from '../elements/AMCookies';
export default function switchButton(this: AMCookies, { disabled, label, name, value, }: {
    disabled?: boolean;
    name: string;
    label?: string;
    value: boolean;
}): string;
