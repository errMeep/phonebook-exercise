const Notification = ({ message }) => {
  const notifGood = {
    color: 'green',
    fontSize: 24,
  };
  const notifBad = {
    color: 'red',
    fontSize: 24,
  };
  if (message === null) {
    return null;
  }
  if (message[0] === 'E') {
    return (
      <div style={notifBad}>
        {message}
        <br></br>
      </div>
    );
  }
  return (
    <div style={notifGood}>
      {message}
      <br></br>
    </div>
  );
};

export default Notification;
