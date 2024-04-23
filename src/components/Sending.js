import React, { useRef, useState } from "react";
import MarqueeButton from "../animations/MarqueeButton";
import emailjs from "@emailjs/browser";

export const Sending = () => {
  const formRef = useRef();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_2l8691d",
        "template_xxnpv2p",
        formRef.current,
        "TCLTbBBqLyWifVTbK"
      )
      .then(
        () => {
          setLoading(false);
          alert(
            "Thank you for your message. I will get back to you as soon as possible."
          );
          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.log(error);
          alert("Something went wrong. Please try again.");
        }
      );
  };

  return (
    <div id="sending" className="container-fluid">
      <h2 className="component-title home-title text-uppercase">Sending</h2>
      <form
        ref={formRef}
        className="card"
        onSubmit={handleSubmit}
        style={{ backgroundColor: "#191e24" }}
      >
        <div className="card-body">
          <div className="mb-3">
            <label
              htmlFor="formGroupExampleInput"
              className="form-label body-text text-uppercase"
            >
              your name
            </label>
            <input
              type="text"
              name="name"
              value={form.name}
              placeholder="What's your name?"
              className="form-control body-text text-uppercase"
              id="name"
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label
              htmlFor="exampleFormControlInput1"
              className="form-label body-text text-uppercase"
            >
              your email
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              placeholder="email@myemail.com"
              className="form-control body-text text-uppercase"
              id="email"
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label
              htmlFor="exampleFormControlTextarea1"
              className="form-label body-text text-uppercase"
            >
              your message
            </label>
            <textarea
              rows="3"
              name="message"
              value={form.message}
              placeholder="what's your message?"
              className="form-control body-text text-uppercase"
              id="message"
              onChange={handleChange}
            ></textarea>
          </div>
          {/* <MarqueeButton
            type="submit"
            label={loading ? "sending" : "send"}
            hasMarquee
            style={{
              backgroundColor: "#F2F2F5",
              color: "#191e24",
              fontWeight: "600",
            }}
            textColor="#191e24"
          /> */}
          {/* <button type="submit" className="btn btn-primary body-text text-uppercase">
          {loading ? "sending" : "send"}
          </button> */}
          <button type="submit" className="btn btn-outline">
            <MarqueeButton
              label={loading ? "sending" : "send"}
              hasMarquee
              style={{
                backgroundColor: "#F2F2F5",
                color: "#191e24",
                fontWeight: "600",
              }}
              textColor="#191e24"
            />
          </button>
        </div>
      </form>
    </div>
  );
};
