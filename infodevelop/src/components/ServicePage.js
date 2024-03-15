import React from 'react';
import Service from './Services';

const ServicePage = () => {
  return (
    <div className="service-page">
      <div className="services">
        <Service
          title="Reparação de Computadores"
          description="A nossa equipa de técnicos qualificados está pronta para resolver qualquer problema com o seu computador ou portátil rapidamente e eficientemente."
          icon={<i className="fas fa-tools"></i>}
        />
        <Service
          title="Desenvolvimento Web"
          description="Desenvolvemos sites e aplicações web à medida para atender às suas necessidades de negócio, garantindo uma presença online eficaz."
          icon={<i className="fas fa-laptop-code"></i>}
        />
        <Service
          title="Montagem de Servidores e Manutenção"
          description="Projetamos e montamos servidores personalizados para atender às necessidades específicas da sua empresa, além de oferecer manutenção regular para garantir desempenho máximo."
          icon={<i className="fas fa-cogs"></i>}
        />
      </div>
    </div>
  );
}

export default ServicePage;
