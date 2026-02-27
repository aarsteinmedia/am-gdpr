import type AMCookies from '@/elements/AMCookies';
interface Props {
    disabled?: boolean;
    label?: string;
    name: string;
    value: boolean;
}
export default function switchButton(this: AMCookies, { disabled, label, name, value, }: Props): string;
export {};
