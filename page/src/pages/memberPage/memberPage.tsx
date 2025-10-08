import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button, Card, Row, Col, Tag, Divider } from 'antd';
import { ArrowLeftOutlined } from '@ant-design/icons';
import type { TeamMember } from '../../model/memberType';
import './memberPage.css'

const MemberProfile: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { member } = location.state as { member: TeamMember };

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="member-profile">
      <div className="member-profile__container">
        <Button 
          type="primary" 
          icon={<ArrowLeftOutlined />} 
          onClick={handleBack}
          className="member-profile__back-button"
        >
          Назад
        </Button>

        <div className="member-profile__header">
          <img 
            src={member.imageUrl} 
            alt={member.name}
            className="member-profile__avatar"
          />
          <div className="member-profile__info">
            <h1 className="member-profile__name">{member.name}</h1>
            <h2 className="member-profile__position">{member.position}</h2>
            <p className="member-profile__description">{member.description}</p>
          </div>
        </div>

        <Divider />

        <Row gutter={[24, 24]}>
          <Col xs={24} lg={8}>
            <Card 
              title="💻 Hard Skills" 
              className="member-profile__card"
            >
              <div className="member-profile__skills">
                {member.skills.hard.map((skill, index) => (
                  <Tag key={index} color="blue" className="member-profile__skill-tag">
                    {skill}
                  </Tag>
                ))}
              </div>
            </Card>
          </Col>

          <Col xs={24} lg={8}>
            <Card 
              title="🤝 Soft Skills" 
              className="member-profile__card"
            >
              <div className="member-profile__skills">
                {member.skills.soft.map((skill, index) => (
                  <Tag key={index} color="green" className="member-profile__skill-tag">
                    {skill}
                  </Tag>
                ))}
              </div>
            </Card>
          </Col>

          <Col xs={24} lg={8}>
            <Card 
              title="👥 Роль в команде" 
              className="member-profile__card"
            >
              <p className="member-profile__team-role">{member.teamRole}</p>
            </Card>
          </Col>
        </Row>

        <Row gutter={[24, 24]} style={{ marginTop: 24 }}>
          <Col xs={24}>
            <Card 
              title="📈 Личный опыт" 
              className="member-profile__card"
            >
              <ul className="member-profile__experience-list">
                {member.experience.map((item, index) => (
                  <li key={index} className="member-profile__experience-item">
                    {item}
                  </li>
                ))}
              </ul>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default MemberProfile;