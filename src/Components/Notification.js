const Notification = ({ message }) => {
  const notifStyle = {
    color: 'green',
    fontSize: 24,
  };
  if (message === null) {
    return null;
  }
  return (
    <div style={notifStyle}>
      {message}
      <br></br>
    </div>
  );
};

export default Notification;
