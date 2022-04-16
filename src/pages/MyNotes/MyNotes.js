import React from "react";
import { Link } from "react-router-dom";
import { Badge, Button, Card } from "react-bootstrap";
// import Accordion from "react-bootstrap/Accordion";
import { MainScreen } from "../../components/MainScreen/MainScreen";
import notes from "../../DummyData/notes";

const deleteHandler = (id) => {
  if (window.confirm("Are you sure?")) {
  }
};

const MyNotes = () => {
  console.log(notes);
  return (
    <MainScreen title="Welcome back Shifali Gwal">
      <Link to="createnote">
        <Button style={{ marginLeft: 10, marginBottom: 6 }} size="lg">
          Create New Note
        </Button>
      </Link>
      {notes.map((note) => (
        <Card key={notes.id} style={{ margin: 10 }}>
          <Card.Header style={{ display: "flex" }}>
            <span
              style={{
                fontSize: 25,
                cursor: "pointer",
                alignSelf: "center",
                flex: 1,
              }}
            >
              {note.title}
            </span>
            <div>
              <Button href={`/notes/${note._id}`}>Edit</Button>
              <Button
                variant="danger"
                className="mx-2"
                onClick={() => deleteHandler(note._id)}
              >
                Delete
              </Button>
            </div>
          </Card.Header>

          <Card.Body>
            <h4>
              <Badge variant="success">Category - {note.category}</Badge>
            </h4>
            <blockquote className="blockquote mb-0">
              <p>{note.content}</p>
              <footer className="blockquote-footer">Created on - Date</footer>
            </blockquote>
          </Card.Body>
        </Card>
      ))}
    </MainScreen>
  );
};

export default MyNotes;
