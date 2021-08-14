/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Modal from "react-modal";
import appContext from "../../contexts/context";
import reviewService from "../../services/review";
import "./ReviewDetails.scss";

function ReviewDetails() {
  const history = useHistory();
  const { isAuth } = useContext(appContext);
  const [data, setData] = useState({});
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }

  const title = history.location.pathname.split("/")[3];

  const getTheReview = async () => {
    const response = await reviewService.getOne(title);
    setData(response.data);
  };

  const handleClick = () => {
    openModal();
  };

  const handleDelete = async () => {
    reviewService.deleteReview(title);
    history.push("/");
  };

  const goToModifier = () => {
    history.push(`/update/${title}`);
  };

  useEffect(() => {
    getTheReview();
  }, []);

  function strUcFirst(string) {
    if (string) return `${string}`.charAt(0).toUpperCase() + string.substr(1);
    return null;
  }

  return (
    <>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        ariaHideApp={false}
      >
        <h3>Attention</h3>
        <p>Voulez-vous vraiment supprimer cette review ?</p>
        <div>
          <button type="button" onClick={closeModal}>
            Annuler
          </button>
          <button type="button" onClick={handleDelete}>
            Confirmer
          </button>
          <button type="button" onClick={goToModifier}>
            Modifier la review
          </button>
        </div>
      </Modal>
      {data ? (
        <div className="reviewDetails">
          <iframe
            src={data.trailer}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
          <div className="head">
            <img src={data.poster} alt="Affiche du film" />
            <div className="titlecateg">
              <h3>{data.title}</h3>
              <p>
                Catégorie: {strUcFirst(data.category)}
                <br /> Genre: {data.genres ? data.genres[0].name : null}
              </p>
            </div>
          </div>
          <div className="bottom">
            <p className="resume">{data.resume}</p>
            <div className="notedate">
              <p>Note: {data.score}/20</p>
              <p>
                Review créée le{" "}
                {data.createdAt ? data.createdAt.split("T")[0] : null}
              </p>
            </div>
          </div>

          {isAuth && (
            <div className="buttonsdetails">
              <button onClick={handleClick} type="button">
                Supprimer la review
              </button>
              <button onClick={goToModifier} type="button">
                Modifier la review
              </button>
            </div>
          )}
        </div>
      ) : (
        "Chargement..."
      )}
    </>
  );
}

export default ReviewDetails;
