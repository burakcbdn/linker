import React, { useEffect, useState } from "react";
import "./lesson_page.css";
import PlusIcon from "../../plus.svg";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";

function LessonPage({ match }) {
  const lessonId = match.params.lessonId;

  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [link, setLink] = useState("");
  const [links, setLinks] = useState([]);

  useEffect(() => {
    fetchLinksOfLesson();
  });

  const url = `https://us-central1-linker-bb.cloudfunctions.net/app/api/links/`;

  function getId(url) {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);

    return match && match[2].length === 11 ? match[2] : null;
  }

  function changeToEmbedLink(url) {
    const videoId = getId(url);
    const embedLink = `https://www.youtube.com/embed/${videoId}`;
    return embedLink;
  }

  const fetchLinksOfLesson = async () => {
    const result = await fetch(url + lessonId);
    const data = await result.json();
    setLinks(data.reverse());
  };

  const addNewLink = () => {
    fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        link: changeToEmbedLink(link),
        title: title,
        lesson: lessonId,
      }),
    }).then(async (res) => {
      const data = await res.json();
      console.log(data);
      closeDialog();
      fetchLinksOfLesson();
    });
  };

  const deleteLink = (linkIdToDelete) => {
    const deleteURL = url + linkIdToDelete;
    fetch(deleteURL, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });
  };

  const openDialog = () => {
    setOpen(true);
  };

  const closeDialog = () => {
    setOpen(false);
  };

  const updateTitle = (newTitle) => {
    setTitle(newTitle.target.value);
  };

  const updateLink = (newLink) => {
    setLink(newLink.target.value);
  };

  return (
    <div className="lesson-page">
      <div className="lesson-title">
        <h1> {lessonId[0].toUpperCase() + lessonId.slice(1)} linkler</h1>

        <img
          src={PlusIcon}
          alt=""
          height="40px"
          className="plusIcon"
          onClick={openDialog}
        />
      </div>

      <div className="links">
        {links.map((link) => (
          <div className="link-box">
            <div className="link-box-header">
              <h3>{link.title}</h3>
              <h4
                style={{ color: "red" }}
                onClick={() => {
                  deleteLink(link["_id"]);
                }}
              >
                X
              </h4>
            </div>

            <div className="video-box">
              <iframe
                src={link.link}
                title={link.title}
                className="video"
              ></iframe>
            </div>
          </div>
        ))}
      </div>

      <Dialog
        open={open}
        onClose={closeDialog}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Yeni link ekle</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="title"
            label="Başlık"
            type="text"
            fullWidth
            onChange={updateTitle}
          />

          <TextField
            autoFocus
            margin="dense"
            id="link"
            label="link"
            type="text"
            fullWidth
            onChange={updateLink}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={closeDialog} color="primary">
            İptal
          </Button>
          <Button onClick={addNewLink} color="primary">
            Ekle
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default LessonPage;
