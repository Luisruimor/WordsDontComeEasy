import { IS_BROWSER } from "$fresh/runtime.ts";
import { Signal } from "@preact/signals";
import { FunctionComponent } from "https://esm.sh/v128/preact@10.19.6/src/index.js";

const HiButton: FunctionComponent<
  {
    type?: string;
    children?: any;
    SayHi: Signal<any>;
    nombre: Signal<string>;
    apellido: Signal<string>;
  }
> = (
  { type, children, SayHi, nombre, apellido },
) => {
  const audio = IS_BROWSER ? new Audio("./hihihi.mp3") : null;
  return (
    <button
      class="trippyBackgroundAnimated"
      type={type}
      onClick={(e) => {
        if (audio) {
          audio.play();
        }
        e.preventDefault();
        SayHi.value = `${nombre.value} ${apellido.value}`;
      }}
    >
      {children}
    </button>
  );
};

export default HiButton;