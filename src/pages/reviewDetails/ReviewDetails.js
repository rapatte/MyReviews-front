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

  const title = history.location.pathname.split("/")[2];

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
          <h1>{data.title}</h1>
          <img src={data.poster} alt="Affiche du film" />
          <iframe
            width="560"
            height="315"
            src={data.trailer}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
          <p>
            Catégorie: {data.category} Genre:{" "}
            {data.genres ? data.genres[0].name : null}
          </p>
          <p>{data.resume}</p>
          <p>Note: {data.score}/20</p>
          <p>
            Review créée le{" "}
            {data.createdAt ? data.createdAt.split("T")[0] : null}
          </p>
          {isAuth && (
            <>
              <button onClick={handleClick} type="button">
                Supprimer la review
              </button>
              <button onClick={goToModifier} type="button">
                Modifier la review
              </button>
            </>
          )}
        </div>
      ) : (
        "Chargement..."
      )}
    </>
  );
}

export default ReviewDetails;
