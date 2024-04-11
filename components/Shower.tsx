import { FunctionalComponent } from "https://esm.sh/v128/preact@10.19.6/src/index.js";

type ShowerProps = {
  name: string;
  secondName: string;
};
const Shower: FunctionalComponent<ShowerProps> = (props:ShowerProps) => {
  return (
    <div class="vintage__container">
      <h1 class="vintage vintage__top">{props.name}</h1>
      <h1 class="vintage vintage__bot">{props.secondName}</h1>
    </div>
  );
};

export default Shower;
