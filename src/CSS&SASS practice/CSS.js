import styles from './copy-main-practice.module.css';

export default function CSS (){

    return(
        <div className={styles.container}>
        <section className={styles["sass-introduction"]}>
            <p>Sass stands for
                <span className={styles["char-highlight"]}>S</span>yntactically
                <span className={styles["char-highlight"]}>A</span>wesome
                <span className={styles["char-highlight"]}>S</span>tyle
                <span className={styles["char-highlight"]}>S</span>heets and it makes the creation of complex CSS code much easier.</p>
        </section>
        <section className={styles["sass-details"]}>
            <header className={styles["section-header"]}>
                <h1>Useful Resources</h1>
            </header>
            <ul className={styles["documentation-links"]}>
                <li>
                    <a className={styles["documentation-link"]} href="https://sass-lang.com/documentation/file.SASS_REFERENCE.html#using_sass">Using &amp; Installing Sass</a>
                </li>
                <li>
                    <a className={styles["documentation-link"]} href="https://sass-lang.com/documentation/file.SASS_REFERENCE.html#nested_rules">Nested Rules</a>
                </li>
                <li>
                    <a className={styles["documentation-link"]} href="https://sass-lang.com/documentation/file.SASS_REFERENCE.html#nested_properties">Nested Properties</a>
                </li>
                <li>
                    <a className={styles["documentation-link"]} href="https://sass-lang.com/documentation/file.SASS_REFERENCE.html#variables_">Variables</a>
                </li>
                <li>
                    <a className={styles["documentation-link"]} href="https://sass-lang.com/documentation/file.SASS_REFERENCE.html#lists">Lists &amp; Maps</a>
                </li>
                <li>
                    <a className={styles["documentation-link"]} href="https://sass-lang.com/documentation/Sass/Script/Functions.html">Built-in Functions</a>
                </li>
                <li>
                    <a className={styles["documentation-link"]} href="https://sass-lang.com/documentation/file.SASS_REFERENCE.html#import">Better Import</a>
                </li>
                <li>
                    <a className={styles["documentation-link"]} href="https://sass-lang.com/documentation/file.SASS_REFERENCE.html#partials">Partials</a>
                </li>
                <li>
                    <a className={styles["documentation-link"]} href="https://sass-lang.com/documentation/file.SASS_REFERENCE.html#media">Advanced @media</a>
                </li>
                <li>
                    <a className={styles["documentation-link"]} href="https://sass-lang.com/documentation/file.SASS_REFERENCE.html#extend">Inheritance</a>
                </li>
                <li>
                    <a className={styles["documentation-link"]} href="https://sass-lang.com/documentation/file.SASS_REFERENCE.html#defining_a_mixin">Mixins</a>
                </li>
            </ul>
        </section>
    </div>
    )
}