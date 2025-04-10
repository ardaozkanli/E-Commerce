import { useEffect, useState } from "react";

function useScreenShotDetect(callback) {
  const [pressedKeys, setPressedKeys] = useState([]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      const { keyCode } = event;

      console.log("Tuş Basıldı:", event.key, event.code, event.keyCode);

      // Eğer PrintScreen tuşuna basılırsa direkt ekran görüntüsü alındı mesajı ver
      if (keyCode === 124) {
        console.log("📸 PrintScreen tuşuna basıldı!");
        if (callback) callback();
        return;
      }

      // Eğer Command (91) veya Shift (16) veya 4 (52) tuşlarına basılmışsa state'e ekle
      setPressedKeys((prevKeys) => {
        if (!prevKeys.includes(keyCode)) {
          return [...prevKeys, keyCode]; // Yeni tuşu ekle
        }
        return prevKeys;
      });

      console.log("Basılı Tuşlar:", pressedKeys);

      // Command (91) ve Shift (16) basıldıysa, 4 (52) basıldığında ekran görüntüsü alındı
      if (
        pressedKeys.includes(91) &&
        pressedKeys.includes(16) &&
        keyCode === 52
      ) {
        console.log("📸 Mac ⌘ + ⇧ + 4 ile ekran görüntüsü alındı!");
        if (callback) callback();
        setPressedKeys([]); // State’i sıfırla
      }
    };

    const handleKeyUp = (event) => {
      const { keyCode } = event;

      // Basılan tuşu state'ten çıkar
      setPressedKeys((prevKeys) => prevKeys.filter((key) => key !== keyCode));

      // Eğer yanlış bir tuşa basılırsa state’i sıfırla
      if (![91, 16, 52].includes(keyCode)) {
        setPressedKeys([]);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [callback, pressedKeys]);

  return pressedKeys;
}

export default useScreenShotDetect;
