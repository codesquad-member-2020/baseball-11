import { useEffect } from 'react'
import { Howl, Howler } from 'howler';

function useSound(volume, src) {
    Howler.volume(volume);
    let sound;
    const soundStop = () => sound.stop();
    const soundPlay = (src) => {
        sound = new Howl({ src });
        sound.play();
    }
    soundPlay(src);
    useEffect(() => soundStop);
}

export default useSound;