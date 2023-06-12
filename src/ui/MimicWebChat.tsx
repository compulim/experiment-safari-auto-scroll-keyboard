const App = () => {
  return (
    <div className="webchat" role="complementary">
      <div className="webchat__transcript">
        <p>Hello, World!</p>
      </div>
      <div aria-errormessage={undefined} aria-invalid={false} className="webchat__send-box" dir="ltr" role="form">
        <div className="webchat__send-box__main">
          <div aria-disabled={false} className="webchat__send-box__text-box webchat__send-box-text-box">
            <input
              aria-label="Type your message"
              className="webchat__send-box-text-box__input"
              data-id="webchat-sendbox-input"
              disabled={false}
              enterKeyHint="send"
              inputMode="text"
              placeholder="Type your message"
              readOnly={false}
              type="text"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
