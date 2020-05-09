import { useEffect } from 'react'
import { Howl, Howler } from 'howler';

function useSound(volume, src, fadeoutTime = 0) {
    Howler.volume(volume);
    let sound;
    const soundStop = () => sound.stop();
    const soundPlay = (src) => {
        sound = new Howl({ src });
        sound.play();
    }
    soundPlay(src);
    sound.on('play', () => {
        const fadeouttime = fadeoutTime;
        setTimeout(() => sound.fade(volume, 0, fadeouttime), (sound.duration() - sound.seek()) * 1000 - fadeouttime);
    });

    useEffect(() => soundStop);
}

export default useSound;