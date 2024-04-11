import { FunctionComponent } from "preact";
import { useState } from "preact/hooks";
import HiButton from "./HiButton.tsx";
import Shower from "../components/Shower.tsx";

const AgendaManager: FunctionComponent = () => {
	const [name, setName] = useState<string>("");
	const [secondName, setSecondName] = useState<string>("");

	const validate = (name: string, secondName: string) => {
		if (name == "" || secondName == "") {
			return false;
		}
		return true;
	}

	return (
		<div className="formBody">
			<form className="formBox">
				<h3>Say hi hi hi</h3>
				<input
					type="text"
					name="nombre"
					placeholder={"Name"}
					onInput={(e) => setName(e.currentTarget.value)}
				/>
				<br/>
				<input
					type="text"
					name="apellido"
					placeholder={"Last name"}
					onInput={(e) => setSecondName(e.currentTarget.value)}
				/>
				<br/>
				<HiButton>
					Hi!
				</HiButton>
			</form>
			{validate(name,secondName) && <Shower name={name} secondName={secondName} />}
		</div>
	);
};

export default AgendaManager;