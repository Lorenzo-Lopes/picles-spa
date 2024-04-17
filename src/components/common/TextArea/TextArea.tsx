import styles from './TextArea.module.css'

export function TextArea(){
    return(
        <div className={styles.textareaGroup}>
					<label>Sobre</label>
					<textarea name="about"></textarea>
				</div>
    )
}