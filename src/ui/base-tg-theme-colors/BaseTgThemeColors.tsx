import styles from './styles.module.scss';

export function BaseTgThemeColors() {
  return (
    <div className={styles.color_test}>
      <div>bg_color</div>
      <div>text_color</div>
      <div>hint_color</div>
      <div>link_color</div>
      <div>button_color</div>
      <div>button_text_color</div>
      <div>secondary_bg_color</div>
    </div>
  );
}
