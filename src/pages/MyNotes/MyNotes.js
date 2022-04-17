import React, { useEffect,useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Accordion, Badge, Button, Card } from "react-bootstrap";
import { MainScreen } from "../../components/MainScreen/MainScreen";
// import notes from "../../DummyData/notes";



const MyNotes = () => {

  const [notes, setNotes] = useState([])

  const deleteHandler = (id) => {
    if (window.confirm("Are you sure?")) {
    }
  };

  const fetchNotes = async () => {
    const data = await axios.get("/api/notes");

    setNotes(data);
  };

  console.log(notes);

  useEffect(() => {
    fetchNotes();
  }, []);

  // console.log(notes);
  return (
    <MainScreen title="Welcome back Shifali Gwal">
      <Link to="createnote">
        <Button style={{ marginLeft: 10, marginBottom: 6 }} size="lg">
          Create New Note
        </Button>
      </Link>
      {!!notes?.data &&
        notes.data.map((note) => (
          <Accordion key={note._id}>
            <Card style={{ margin: 10 }}>
              <Card.Header style={{ display: "flex" }}>
                <span
                  style={{
                    fontSize: 25,
                    cursor: "pointer",
                    alignSelf: "center",
                    flex: 1,
                  }}
                >
                  <Accordion.Header>{note.title}</Accordion.Header>
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
              <Accordion.Body>
                <Card.Body>
                  <h4>
                    <Badge variant="success">Category - {note.category}</Badge>
                  </h4>
                  <blockquote className="blockquote mb-0">
                    <p>{note.content}</p>
                    <footer className="blockquote-footer">
                      Created on - Date
                    </footer>
                  </blockquote>
                </Card.Body>
              </Accordion.Body>
            </Card>
          </Accordion>
        ))}
    </MainScreen>
  );
};

export default MyNotes;
