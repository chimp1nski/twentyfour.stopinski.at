import { children, createSignal, type JSXElement } from "solid-js";

interface ToggleProps {
	checked: boolean;
	onChange: (state: boolean) => void;
	children?: JSXElement;
}

const [value, setValue] = createSignal(false);

const Toggle = ({ checked, onChange, children }: ToggleProps) => {
	return (
		<label class="flex items-center gap-2">
			<input
				type="checkbox"
				checked={checked}
				onChange={(e) => onChange(e.currentTarget.checked)}
			/>
			{children}
		</label>
	);
};

export default Toggle;
