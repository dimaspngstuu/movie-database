import Alert from "../Alert/Alert";
import styles from "./AddMovieForm.module.css";
import { useState } from "react";

const AddMovieForm = (props) => {
  const [formData, setFormData] = useState({
    title: "",
    date: "",
    link: "",
    genre: "",
  });

  const { title, date, link, genre } = formData;

  // const [isTitleError, setTitleError] = useState(false);
  // const [isDateError, setDateError] = useState(false);
  // const [isLinkError, setIsLinkError] = useState(0);

  const [isError, setIsError] = useState({
    setTitleError: false,
    setDateError: false,
    setIsLinkError: false,
  });

  const { movies, setMovies } = props;

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validate = () => {
    if (title === "") {
      setIsError({setTitleError: true})
      return false;
    } else if (date === "") {
      setIsError({setDateError: true})
      return false;
    } else if (link === "") {
      setIsError({setIsLinkError: true})
      return false;
    } else {
      setIsError({setTitleError: false});
      setIsError({setDateError: false});
      setIsError({setIsLinkError: false})
      return true;
    }
  };

  const addMovie = () => {
    const newMovie = {
      id: 1234,
      title: title,
      year: date, 
      type: genre,
      poster: link,
    };

    setMovies([...movies, newMovie]);
  };

  const resetInput = () => {
    setFormData({
      title: "",
      date: "",
      link: "",
      genre: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validate() && addMovie();
    resetInput();
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
            {isError.setTitleError ? <Alert>Title wajib diisi</Alert> : ""}
            <input
              className={styles.AddMovieForm__input}
              type="text"
              value={title}
              id="title"
              name="title"
              onChange={handleChange}
            />
            <label className={styles.AddMovieForm__label} htmlFor="date">
              Date
            </label>
            {isError.setDateError ? <Alert>Date waib diisi</Alert> : ""}
            <input
              classname={styles.AddMovieForm__input}
              type="text"
              id="date"
              value={date}
              onChange={handleChange}
              name="date"
            />
            <label className={styles.AddMovieForm__label} htmlFor="date">
              Link Image
            </label>
            {isError.setIsLinkError ? <p>harap isi link</p> : ""}
            <input
              classname={styles.AddMovieForm__input}
              type="text"
              id="link"
              value={link}
              onChange={handleChange}
              name="link"
            />
            <label className={styles.AddMovieForm__label} htmlFor="date">
              Pilih Genre
            </label>
            <select value={genre} name="genre" onChange={handleChange}>
              <option value="action">Action</option>
              <option selected value="drama">
                Drama
              </option>
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
