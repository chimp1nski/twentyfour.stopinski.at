import { createEffect, createSignal, onCleanup } from "solid-js";
import { format } from "date-fns";

const Time = () => {
  const [time, setTime] = createSignal(new Date());
  const [light, toggleLight] = createSignal<boolean>(true);
  const [blend, toggleBlend] = createSignal<boolean>(false);

  const toggleFullScreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  };

  const formattedTime = () => format(time(), "HH:mm:ss");

  const tick = setInterval(() => {
    setTime(new Date());
  }, 1000);

  onCleanup(() => {
    clearInterval(tick);
  });

  createEffect(() => {
    const handleKeyPress = ({ key }: KeyboardEvent) => {
      switch (key) {
        case "1":
          toggleLight((v) => !v);
          break;
        case "2":
          toggleBlend((v) => !v);
          break;
        case "3":
          toggleFullScreen();
          break;
      }
    };

    document.addEventListener("keyup", handleKeyPress);

    return () => {
      document.removeEventListener("keyup", handleKeyPress);
    };
  });

  return (
    <>
      <time
        style="font-size: clamp(12px, 16vw, 16rem)"
        class="fixed inset-0 z-10 flex select-none items-center justify-center gap-0.5 font-mono hover:cursor-none"
        classList={{
          "text-white": light(),
          "text-black": !light(),
          "mix-blend-difference": blend(),
        }}
        onClick={() => toggleLight((v) => !v)}
        dateTime={time().toISOString()}
      >
        {formattedTime()}
      </time>
    </>
  );
};

export default Time;
