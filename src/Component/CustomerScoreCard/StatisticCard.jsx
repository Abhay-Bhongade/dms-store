import React from "react";
import Card from "react-bootstrap/Card";

const StatisticCard = ({
  title,
  value,
  icon = false,
  onClick,
  additionalClass,
  header = false,
}) => {
  return header ? (
    <Card
      className="mb-3 card-shadow statistic-card"
      onClick={onClick}
      style={{ cursor: "pointer" }}
    >
      <Card.Body className="card-body">
        <Card.Title className="statistic-title">{title}</Card.Title>
        <div className="flex-grow-1"></div>
        <Card.Text className="mt-auto">
          {icon && (
            <span className={`icon-container ${additionalClass}`}>
              <span style={{ marginTop: "-2px" }}>{icon}</span>
            </span>
          )}
          <span className="ms-2 statistic-value">{value}</span>
        </Card.Text>
      </Card.Body>
    </Card>
  ) : (
    <Card.Body
      className="card-body"
      style={{ padding: "0.5rem 1rem" }}
      onClick={onClick}
    >
      <Card.Title className="statistic-title">{title}</Card.Title>
      <Card.Text>
        {icon && (
          <span className={`icon-container ${additionalClass}`}>
            <span style={{ marginTop: "-2px" }}>{icon}</span>
          </span>
        )}
        <span className="ms-2 gauge-statistic-score">{value}</span>
      </Card.Text>
    </Card.Body>
  );
};

export default StatisticCard;
