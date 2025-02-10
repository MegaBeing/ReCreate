import styles from "./Option.module.less"
import LogoImage from '/logo.png'
export default function Logo(){
    return(
        <div className={styles.logo_container}>
            <div className="rounded-full size-11 bg-white flex items-center justify-center p-2 ml-1">
                <img src={LogoImage} className="w-full m-auto" />
            </div>
            <div className="mx-3 text-white text-2xl font-bold">
                ReCreat
            </div>
        </div>
    )
}