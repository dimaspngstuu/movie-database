import Alert from "../Alert/Alert";
import styles from "./AddMovieForm.module.css";
import { useState } from "react";


const AddMovieForm = (props) => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [link,setLink] =useState("");
  const [genre,setGenre] = useState();

  const [isTitleError, setTitleError] = useState(false);
  const [isDateError, setDateError] = useState(false);
  const [isLinkError,setIsLinkError] = useState(0);

  const { movies, setMovies } = props;

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleDate = (e) => {
    setDate(e.target.value);
  };

  const handleLink =(e) => {
    setLink(e.target.value)
  }

  const handleGenre = (e) => {
    setGenre(e.target.value)
    console.log(genre)
  } 

  const handleSubmit = (e) => {
    e.preventDefault();

    if (title === "") {
      setTitleError(true);
    } else if (date === "") {
      setDateError(true);
    } else if(link === ""){
      setIsLinkError(1)
    }
     else {
      const newMovie = {
        id: 1234,
        title: title,
        year: date,
        type: genre,
        poster:link
      };

      setMovies([...movies, newMovie]);
      setTitleError(false);
      setDateError(false);
      setIsLinkError(0);
    }

    setTitle("");
    setDate("");
    setLink("")
  };

  return (
    <div className={styles.container}>
      <section className={styles.AddMovieForm}>
        <div className={styles.AddMovieForm__left}>
          <img
            className={styles.AddMovieForm__img}
            src="https://picsum.photos/536/354"
            alt=""
          />
        </div>
        <div className={styles.AddMovieForm__right}>
          <h2 className={styles.AddMovieForm__right__title}>Add Movie</h2>
          <form
            className={styles.AddMovieForm__container__form}
            onSubmit={handleSubmit}>
            <label className={styles.AddMovieForm__label} htmlFor="title">
              Title
            </label>
            {isTitleError ? <Alert>Title wajib diisi</Alert> : ""}
            <input
              className={styles.AddMovieForm__input}
              type="text"
              value={title}
              id="title"
              name="title"
              onChange={handleTitle}
            />
            <label className={styles.AddMovieForm__label} htmlFor="date">
              Date
            </label>
            {isDateError ? <Alert>Date waib diisi</Alert> : ""}
            <input
              classname={styles.AddMovieForm__input}
              type="text"
              id="date"
              value={date}
              onChange={handleDate}
              name="date"
            />
            <label className={styles.AddMovieForm__label} htmlFor="date">
              Link Image
            </label>
            {isLinkError ? <p>harap isi link</p> : ""}
            <input
              classname={styles.AddMovieForm__input}
              type="text"
              id="link"
              value={link}
              onChange={handleLink}
              name="link"
            />
            <label className={styles.AddMovieForm__label} htmlFor="date">
              Pilih Genre
            </label>
            <select value={genre} onChange={handleGenre}>
              <option value="action">Action</option>
              <option selected value="drama">Drama</option>
              <option value="horror">Horror</option>
              <option value="Comedy">Comedy</option>
            </select>
            <button className={styles.AddMovieForm__button}>Submit</button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default AddMovieForm;
