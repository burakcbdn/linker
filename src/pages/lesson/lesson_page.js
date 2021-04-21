import React, { useEffect, useState } from "react";
import "./lesson_page.css";
import PlusIcon from "../../plus.svg";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

function LessonPage({ match }) {
  const lessonId = match.params.lessonId;

  const addNewLessonLink = () => {
    openDialog();
  };

  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [link, setLink] = useState("");
  const [links, setLinks] = useState([]);

  const openDialog = () => {
    setOpen(true);
  };

  const closeDialog = () => {
    setOpen(false);
  };

  const addNewLink = () => {
    const newLinks = [ { title, link },...links];

    setLinks(newLinks);

    closeDialog();
  };

  const updateTitle = (newTitle) => {
    console.log(newTitle.target.value);
    setTitle(newTitle.target.value);
  };

  const updateLink = (newLink) => {
    console.log(newLink.target.value);
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
          onClick={addNewLessonLink}
        />
      </div>

      <div className="links">
        {links.map((link) => (
          <div className="link-box">
            <h3>{link.title}</h3>
            <div className="video-box">
                <iframe 
                    src={`https://www.youtube.com/embed/${link.link}`} title={link.title} className="video">
                </iframe>
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
