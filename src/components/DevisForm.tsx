import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

function DevisForm() {
  const [name, setName] = useState("");
  const [adresse, setAdresse] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [type, setType] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!name || !adresse || !phone || !email || !message) {
      setSuccess("");

      setError("Veuillez remplir tous les champs");
      return;
    } else {
      setError("");
      emailjs
        .sendForm(
          "service_eyvi5rv",
          "template_6h2f7nz",
          form.current as HTMLFormElement,
          "5TblqTKLCZ0uOX-VC"
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );

      setSuccess("Votre message a bien été envoyé");
    }
  };

  return (
    <>
      <div>
        <img
          src="https://picsum.photos/1920/1080"
          className="h-[30rem] w-full object-cover"
          alt="devis"
        />
        <div className="max-w-7xl mx-auto px-5 py-10">
          <h1 className="text-4xl font-bold text-center mt-10 mb-5">
            Demande de devis
          </h1>
          <p className="text-center text-gray-500 mb-10">
            Vous êtes professionnel ? En cas de besoin n hésitez pas à demander
            votre devis gratuit à l aide du formulaire de contact ci-dessous,
            nos experts vous répondront dans les meilleurs délais.
          </p>
        </div>
      </div>
      <form
        className="w-full mx-auto bg-white rounded-lg max-w-7xl px-5 py-10"
        onSubmit={sendEmail}
        ref={form}
      >
        <div className="mb-6">
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            placeholder="Name*"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            Adresse
          </label>
          <input
            type="text"
            id="adresse"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            placeholder="Adresse*"
            value={adresse}
            name="adresse"
            onChange={(e) => setAdresse(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="phone"
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            Phone
          </label>
          <input
            type="text"
            id="phone"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            placeholder="Phone*"
            value={phone}
            name="phone"
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <select className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ">
            <option selected>Type de projet</option>
            <option value="Formations">Formations</option>
            <option value="Produits">Produits</option>
            <option value="Services">Services</option>
            <option value="Autres">Autres</option>
          </select>
        </div>
        <div className="mb-6">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            Your email
          </label>
          <input
            type="email"
            id="email"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            placeholder="name@email.com"
            value={email}
            name="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="message"
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            Message
          </label>
          <textarea
            id="message"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg min-h-[15rem] focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            placeholder="Message*"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            name="message"
          />
        </div>

        {error && (
          <div
            className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-5"
            role="alert"
          >
            <strong className="font-bold">Erreur !</strong>
            <span className="block sm:inline">{error}</span>
          </div>
        )}
        {success && (
          <div
            className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-5"
            role="alert"
          >
            <strong className="font-bold">Succès !</strong>
            <span className="block sm:inline">{success}</span>
          </div>
        )}
        <button
          type="submit"
          className="text-white bg-[#EC730D] hover:bg-[#c25d0b] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-10 py-5 text-center "
        >
          Envoyer
        </button>
      </form>
    </>
  );
}

export default DevisForm;
