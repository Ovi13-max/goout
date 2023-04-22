const ContactInfo = () => {
  const contactContent = [
    {
      id: 1,
      title: "Tel :",
      action: "tel:+(4) 0771 - 580 - 394",
      text: "+(4) 0771 - 580 - 394",
    },
    {
      id: 2,
      title: "Vrei asistență?",
      action: "mailto:contact@webdesign-pro.ro",
      text: "contact@webdesign-pro.ro",
    },
  ];
  return (
    <>
      {contactContent.map((item) => (
        <div className="mt-30" key={item.id}>
          <div className={"text-14 mt-30"}>{item.title}</div>
          <a href={item.action} className="text-16 fw-500 text-blue-1 mt-5">
            {item.text}
          </a>
        </div>
      ))}
    </>
  );
};

export default ContactInfo;
