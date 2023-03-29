import Form from "react-bootstrap/Form";

export const InputAppointment = ({
  type,
  name,
  placeholder,
  changeFunction,
  blurFunction,
  disable
}) => {
  return (
    <Form.Control
      type={type}
      name={name}
      placeholder={placeholder}
      onChange={(e) => changeFunction(e)}
      onBlur={(e) => blurFunction(e)}
    //   disable={disable}
    />
  );
};

export const DisabledInputAppointment = ({
    type,
    name,
    placeholder,
    changeFunction,
    blurFunction,
  }) => {
    return (
      <Form.Control
        type={type}
        name={name}
        placeholder={placeholder}
        onChange={(e) => changeFunction(e)}
        onBlur={(e) => blurFunction(e)}
        disabled
      />
    );
  };
