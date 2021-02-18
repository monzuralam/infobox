import React, { useState, useEffect } from "react";
import "./style.scss";

const ToggleButton = ({ options, focusColor, onChange }) => {
	const [selected, setSelected] = useState(options[0]);

	useEffect(() => {
		onChange(selected.value);
	}, [selected]);

	return (
		<div id="switch" className="eb-switch-control">
			{options.map((option, index) => (
				<label>
					<input
						className={index ? "individual" : "business"}
						type="radio"
						name="gh"
						placeholder="name"
						onChange={() => setSelected(option)}
					/>
					<span
						style={{
							color: selected.value === option.value ? "white" : "black",
						}}
					>
						{option.label}
					</span>
				</label>
			))}
			<span
				className="slideBg"
				style={{
					backgroundColor: "#551ef7",
					transform:
						selected == options[0] ? "translateX(0)" : "translateX(100%)",
				}}
			/>
		</div>
	);
};

export default ToggleButton;
