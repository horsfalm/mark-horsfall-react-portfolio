import React, { Component } from "react";
import { Grid, Cell, List, ListItem, ListItemContent } from "react-mdl";
import ContactForm from "./contactform";

class Contact extends Component {
  render() {
    return (
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Mark Horsfall</h2>
            <img
              src="../images/mark-horsfall.png"
              alt="profile picture"
              style={{ height: "250px", borderRadius: "50%" }}
            />
            <p style={{ width: "75%", margin: "auto", paddingTop: "1em" }}>
              Hi, I am Mark and coding is my third Act. I spent many years as an investment banker and subsequent to that, owning small and medium-sized businesses. I have seen a lot of opportunities to improve the operation of these organizations through IT and have developed a real interest in coding. I am just getting started on this journey and have a long way to got but I am getting more confident all the time with the many new languages and frameworks which I am learning. Please contact me anytime!
            </p>
          </Cell>
          <Cell col={6}>
            <ContactForm></ContactForm>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Contact;