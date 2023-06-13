const App = () => {
  return (
    <div className="webchat" role="complementary">
      <div className="webchat__transcript" tabIndex={0}>
        Tap here.
      </div>
      <div aria-errormessage={undefined} aria-invalid={false} className="webchat__send-box" dir="ltr" role="form">
        <div className="webchat__send-box__main">
          <div aria-disabled={false} className="webchat__send-box__text-box webchat__send-box-text-box">
            <input
              aria-label="Then tap here"
              className="webchat__send-box-text-box__input"
              data-id="webchat-sendbox-input"
              disabled={false}
              enterKeyHint="send"
              inputMode="text"
              placeholder="Then tap here"
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
