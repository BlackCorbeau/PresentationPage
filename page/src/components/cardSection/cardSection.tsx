import React from 'react';
import { Card, Row, Col, Space } from 'antd';
import { useNavigate } from 'react-router-dom';
import type { TeamMember } from '../../model/memberType';
import './cardSection.css';

const CardPage: React.FC = () => {
  const navigate = useNavigate();

  const teamMembers: TeamMember[] = [
    {
      id: 1,
      name: 'Алексей Петров',
      position: 'Frontend Developer',
      description: 'Опытный разработчик с фокусом на React и TypeScript',
      imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      skills: {
        hard: ['React', 'TypeScript', 'Redux', 'Webpack', 'Jest'],
        soft: ['Коммуникабельность', 'Лидерство', 'Тайм-менеджмент']
      },
      experience: [
        '5 лет в веб-разработке',
        'Участие в 10+ проектах',
        'Менторство junior разработчиков'
      ],
      teamRole: 'Tech Lead, архитектор фронтенд решений'
    },
    {
      id: 2,
      name: 'Мария Иванова',
      position: 'UX/UI Designer',
      description: 'Креативный дизайнер с вниманием к деталям',
      imageUrl: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      skills: {
        hard: ['Figma', 'Adobe XD', 'Photoshop', 'Illustrator', 'Prototyping'],
        soft: ['Эмпатия', 'Креативность', 'Адаптивность']
      },
      experience: [
        '4 года в UI/UX дизайне',
        'Работа с международными клиентами',
        'Создание дизайн-систем'
      ],
      teamRole: 'Дизайнер интерфейсов, исследователь пользовательского опыта'
    },
    {
      id: 3,
      name: 'Дмитрий Сидоров',
      position: 'Backend Developer',
      description: 'Специалист по серверной разработке и базам данных',
      imageUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      skills: {
        hard: ['Node.js', 'Python', 'PostgreSQL', 'Docker', 'AWS'],
        soft: ['Аналитическое мышление', 'Решение проблем', 'Работа в команде']
      },
      experience: [
        '6 лет в backend разработке',
        'Разработка микросервисной архитектуры',
        'Оптимизация производительности'
      ],
      teamRole: 'Backend разработчик, архитектор баз данных'
    }
  ];

  const handleCardClick = (member: TeamMember) => {
    navigate(`/member/${member.id}`, { state: { member } });
  };

  return (
    <div className="card-page">
      <Space direction="vertical" size="large" style={{ width: '100%' }}>
        <div className="card-page__header">
          <h1 className="card-page__title">Наша команда</h1>
          <p className="card-page__subtitle">Выберите участника для подробной информации</p>
        </div>

        <div className="card-page__grid">
          <Row gutter={[24, 24]} justify="center">
            {teamMembers.map((member) => (
              <Col 
                xs={24} 
                sm={12} 
                lg={8} 
                key={member.id}
              >
                <Card
                  hoverable
                  className="card-page__card"
                  cover={
                    <img 
                      alt={member.name}
                      src={member.imageUrl}
                      className="card-page__card-image"
                    />
                  }
                  onClick={() => handleCardClick(member)}
                >
                  <div className="card-page__card-body">
                    <h3 className="card-page__card-title">
                      {member.name}
                    </h3>
                    <p className="card-page__card-position">
                      {member.position}
                    </p>
                    <p className="card-page__card-description">
                      {member.description}
                    </p>
                    <div className="card-page__card-id">
                      ID: {member.id}
                    </div>
                  </div>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </Space>
    </div>
  );
};

export default CardPage;