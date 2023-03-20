import styles from '../../styles/Home.module.css'
import useSound from "use-sound";
import musicFile  from "./../../musicfile.mp3"
import { useState } from 'react';
import { iconSvg } from '../api/helper';

export default function Footer() {
    
    const [musicPlay , setMusicPlay] = useState(false)
    
    const[play,{stop}] = useSound(musicFile)
    const playButton = () =>{
        if (!musicPlay){
            setMusicPlay(true)
            return play()
        }
        setMusicPlay(false)
        return stop()
    }
    return (
        <footer className={styles.footer}>
            
        <div onClick={() => playButton()}>{!musicPlay ? iconSvg('play') : iconSvg('pause')}</div>
        </footer>
    )

}