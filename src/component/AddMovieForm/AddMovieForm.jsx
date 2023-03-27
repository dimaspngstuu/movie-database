import  styles from './AddMovieForm.module.css'

const AddMovieForm = () => {
  return (
    <div className={styles.container}>
        <section className={styles.AddMovieForm}>
            <div className={styles.AddMovieForm__left}>
                <img 
                className={styles.AddMovieForm__img}
                src="https://picsum.photos/536/354" 
                alt="" />
            </div>
            <div className={styles.AddMovieForm__right}>
                <h2 className={styles.AddMovieForm__right__title}>Add Movie</h2>
                 <div className={styles.AddMovieForm__container__form}>
                    <label className={styles.AddMovieForm__label} htmlFor="title">Title</label>
                    <input className={styles.AddMovieForm__input} type="text"  name='title'/>
                    <label className={styles.AddMovieForm__label}htmlFor="year">Year</label>
                    <input classname={styles.AddMovieForm__input} type="text" name='year' />
                    <button className={styles.AddMovieForm__button}>Submit</button>
                </div>
            </div>
        </section>
    </div>
  )
}

export default AddMovieForm