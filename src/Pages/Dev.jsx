import Header from "../modules/Header/Header";
import Footer from "../modules/Footer/Footer";
import Developing from "../modules/Developing/Developing";
import Certificates from "../modules/Certificates/Certificates";


function App() {
  return(
    <>
      <Header/>
      <Developing/>
      <Certificates
          title="My certificates"
          titleImage="https://udemy-certificate.s3.amazonaws.com/image/UC-75b99bd3-5697-4e26-aa7f-73d81c4f5a47.jpg?v=1675877991000"
          about="Certification in SQL Mastery: Mastered SQL coding, MySQL database management, and advanced techniques in data manipulation, query optimization, and database design, equipped for roles such as SQL developer, Database Administrator, and Business Analyst."
          skills={[
              "Create Databases & Tables",
              "Create",
              "Select",
              "Update",
              "Delete",
              "Aggregate Functions",
              "Joins",
              "Variables",
              "Views",
              "Stored Procedures",
              "Triggers",
              "Functions"
          ]}
      />
            <Certificates
          titleImage="https://images.credly.com/size/340x340/images/978f88dc-c247-4093-9d39-6efac3651297/image.png"
          about=" Cisco verifies the earner of this badge successfully completed the Networking Technician career path and achieved this student level credential. Earner has knowledge of networking fundamentals, how devices communicate, cabling, network addressing and services, basics of configuring Cisco devices, troubleshooting and support of endpoints, networks, and users including diagnostics and documentation as a member of a help desk team, and basic wireless. Participated in up to 50 practice activities."
          skills={[
              "OSI & TCP/IP model",
              "IPv4 & IPv6",
              "Network Topolofies",
              "SaaS, PasS & IasS",
              "TCP vs UDP",
              "Protocols",
              "NAT",
              "Subnets",
              "Cabling and Wireless",
              "Wireshark",
              "Diagnostic commands",
              "SSH & Telnet",
              "Firewalls",
              "Security Concepts"
          ]}
      />
            <Certificates
          titleImage="https://images.credly.com/size/340x340/images/4e3d6f9f-55d7-4ea7-b0e6-f4d4ff543e22/image.png"
          about="Scrum Foundation Professional Certification holders have developed entry-level skills in Scrum that endorse their fundamental knowledge in this framework. They have demonstrated an understanding of the empirical Scrum pillars of transparency, inspection, and adaptation. Their primary focus is on the work of Sprint to make the best possible progress toward these goals."
          skills={[
            "Scrum Team",
            "Scrum Values",
            "Sprint Planning",
            "Daily Crum",
            "Sprint Review",
            "Sprint Retrospective"
          ]}
      />
      <Footer/>
    </>
  );
}

export default App
