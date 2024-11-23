const specialties = [
  { name: "Dentist", image: "/assets/dentist.jpg" },
  { name: "Optometrist", image: "/assets/optometrist.jpg" },
  { name: "Dietitian", image: "/assets/dietitian.jpg" },
  { name: "Chiropractor", image: "/assets/chiropractor.jpg" },
  { name: "Medical Clinic", image: "/assets/medical_clinic.jpg" },
  { name: "Health Clinic", image: "/assets/health_clinic.jpg" },
];

const SpecialtyCards = () => (
  <section id="specialty" className="py-5 bg-white">
    <div className="container">
      <h2 className="text-center text-primary mb-4">Trouver des soins par spécialité</h2>
      <p className="text-center text-muted mb-5">Accédez à une grande variété de spécialités de santé</p>
      <div className="row">
        {specialties.map((specialty, index) => (
          <div key={index} className="col-md-4 mb-4">
            <div className="card shadow text-center">
              <img src={specialty.image} alt={specialty.name} className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title text-primary">{specialty.name}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default SpecialtyCards;
